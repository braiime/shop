const sheetName = 'Orders';
const spreadsheetId = 'YOUR_SPREADSHEET_ID';

function doPost(e) {
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  const data = JSON.parse(e.postData.contents);
  
  const timestamp = new Date();
  const row = [
    timestamp,
    data.Product,
    data.Name,
    data.Phone,
    data.Address,
    data.Quantity
  ];
  
  sheet.appendRow(row);
  
  return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput("Service is running!");
} 