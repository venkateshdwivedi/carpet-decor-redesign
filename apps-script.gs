/**
 * Carpet Furnishing Service & Decor (wallpaper + furnishing, Maulviganj, Lucknow):
 * enquiry-form backend (Google Apps Script).
 *
 * Setup (5 minutes, on the CLIENT's Google account so they own the leads):
 * 1. Create a Google Sheet named "Carpet Decor leads". Extensions -> Apps Script.
 * 2. Paste this file, set the e-mail address(es) below, Save.
 * 3. Deploy -> New deployment -> type "Web app".
 *      Execute as: Me    Who has access: Anyone
 * 4. Copy the web-app URL and paste it into FORM_ENDPOINT in index.html.
 * 5. Submit a test from the site; a row should appear and an e-mail arrive.
 *
 * Routing: the e-mail subject names the "need" (Wallpaper, Wall panels, Flooring,
 * Blinds & curtains, Carpet, Full room) so each can go to its own inbox later.
 * Until the client says otherwise everything goes to one address.
 */
const DEFAULT_TO = 'enquiry@example.com';            // <- set the client's inbox (GAP: confirm address)
const NOTIFY = {                                      // route a "need" to its own inbox here if wanted
  'Wallpaper':          DEFAULT_TO,
  'Wall panels':        DEFAULT_TO,
  'Flooring':           DEFAULT_TO,
  'Blinds & curtains':  DEFAULT_TO,
  'Carpet':             DEFAULT_TO,
  'Full room':          DEFAULT_TO,
};
const WHATSAPP = '919598959954';                      // GAP: confirm this number is on WhatsApp
const SHEET_NAME = 'Leads';
const HEADERS = ['Time', 'Name', 'Phone', 'Need', 'Room', 'Area', 'Message', 'Page'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  const phone = String(p.phone || '').replace(/\D/g, '').slice(-10);
  if (!p.name || phone.length !== 10 || p.company) {   // p.company = honeypot
    return ContentService.createTextOutput('ignored');
  }
  const need = NOTIFY[p.service] ? p.service : 'Full room';

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

  const clean = (v, n) => String(v || '').slice(0, n || 200).replace(/^[=+\-@]/, "'$&"); // block formula injection
  sheet.appendRow([new Date(), clean(p.name), "'" + phone, need, clean(p.property), clean(p.area), clean(p.message, 1000), clean(p.page)]);

  MailApp.sendEmail({
    to: NOTIFY[need],
    subject: 'New ' + need + ' enquiry: ' + clean(p.name) + ' (' + phone + ')',
    body:
      'Need: ' + need + '\n' +
      'Name: ' + p.name + '\n' +
      'Phone: ' + phone + '  ->  tel:+91' + phone + '\n' +
      'Room: ' + (p.property || '-') + '\n' +
      'Area in Lucknow: ' + (p.area || '-') + '\n' +
      'Message: ' + (p.message || '-') + '\n\n' +
      'WhatsApp them: https://wa.me/91' + phone + '\n' +
      '(They were offered a link to send a photo of their wall or room to +' + WHATSAPP + '.)',
  });

  return ContentService.createTextOutput('ok');
}
