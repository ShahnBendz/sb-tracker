// ════════════════════════════════════════════════════════════
//  SHAHN BENDZ — SUBMISSION TRACKER
//  Google Apps Script — paste this into Extensions > Apps Script
//  in your Google Sheet, then deploy as a Web App.
// ════════════════════════════════════════════════════════════

function doGet(e) {
  try {
    const sheet = getOrCreateDataSheet();
    const cell = sheet.getRange('A1').getValue();
    const data = cell ? JSON.parse(cell) : { contacts: [], submissions: [] };
    return jsonResponse({ success: true, data });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheet = getOrCreateDataSheet();

    // Store full JSON in A1 (source of truth)
    sheet.getRange('A1').setValue(JSON.stringify(payload));

    // Write human-readable summary to adjacent cells
    const contacts   = payload.contacts   || [];
    const submissions = payload.submissions || [];
    sheet.getRange('B1').setValue('Contacts: '    + contacts.length);
    sheet.getRange('C1').setValue('Submissions: ' + submissions.length);
    sheet.getRange('D1').setValue('Last synced: ' + new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));

    // Write a readable submissions log starting at row 3
    writeSubmissionsLog(sheet, contacts, submissions);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message });
  }
}

// ── helpers ──────────────────────────────────────────────────

function getOrCreateDataSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName('TrackerData') || ss.insertSheet('TrackerData');
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function writeSubmissionsLog(sheet, contacts, submissions) {
  // Header row at row 3
  const headers = ['Song', 'Contact', 'Type', 'Priority', 'Status', 'Response', 'Date Sent', 'Date Responded', 'Notes'];
  sheet.getRange(3, 1, 1, headers.length).setValues([headers]);

  if (submissions.length === 0) return;

  const rows = submissions.map(s => {
    const c = contacts.find(c => c.id === s.contactId) || {};
    const pLabel = ['', 'P1-Send First', 'P2-Very Strong', 'P3-Rising', 'P4-Hardgroove', 'P5-Wildcard'];
    return [
      s.song        || '',
      c.name        || '',
      c.type        || '',
      pLabel[c.priority] || '',
      s.status      || '',
      s.responseDetail || '',
      s.dateSent    || '',
      s.dateResponded || '',
      s.notes       || ''
    ];
  });

  // Clear old log rows first
  const lastRow = sheet.getLastRow();
  if (lastRow > 3) sheet.getRange(4, 1, lastRow - 3, headers.length).clearContent();

  // Write new rows
  sheet.getRange(4, 1, rows.length, headers.length).setValues(rows);
}
