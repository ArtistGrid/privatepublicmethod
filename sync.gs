const PUBLIC_SPREADSHEET_ID = 'YOUR_PUBLIC_SPREADSHEET_ID_HERE';

function syncChangeToPublic(e) {
  if (!e) return;

  const sourceSS = e.source || SpreadsheetApp.getActiveSpreadsheet();
  const sourceSheet = sourceSS.getActiveSheet();
  
  syncSheetSimple(sourceSheet);
}

function fullSpreadsheetMirrorSync() {
  const sourceSS = SpreadsheetApp.getActiveSpreadsheet();
  const sourceSheets = sourceSS.getSheets();

  sourceSheets.forEach(sourceSheet => {
    syncSheetSimple(sourceSheet);
  });
}

function syncSheetSimple(sourceSheet) {
  const sheetName = sourceSheet.getName();
  const targetSS = SpreadsheetApp.openById(PUBLIC_SPREADSHEET_ID);
  let targetSheet = targetSS.getSheetByName(sheetName);

  if (!targetSheet) {
    sourceSheet.copyTo(targetSS).setName(sheetName);
    return;
  }

  const tempSheet = sourceSheet.copyTo(targetSS);

  targetSheet.clear();
  tempSheet.getDataRange().copyTo(targetSheet.getRange(1, 1));

  targetSS.deleteSheet(tempSheet);
}
