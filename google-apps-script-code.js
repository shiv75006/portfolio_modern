// Google Apps Script code to handle form submissions and write to a Google Sheet
// This code should be deployed as a web app with access set to "Anyone, even anonymous"

// Replace SPREADSHEET_ID with the actual ID of your Google Sheet
// The ID is the long string in the URL of your sheet: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
const SPREADSHEET_ID = '1p5FKdgmX2p5bfQtX2Q_pHCUFunSrSulId6D2qQlLvzg';
const SHEET_NAME = 'Form Responses'; // The name of the sheet tab to write data to

function doGet(e) {
  return HtmlService.createHtmlOutput('The script is running. Use POST method to submit form data.');
}

function doPost(e) {
  try {
    // Get the form data from the request
    const name = e.parameter.name;
    const email = e.parameter.email;
    const message = e.parameter.message;
    const timestamp = new Date();
    
    // Log the received data for debugging
    console.log('Received form submission:');
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message length: ' + (message ? message.length : 0));
    
    // Open the spreadsheet and get the sheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // If the sheet doesn't exist, create it and add headers
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Name', 'Email', 'Message', 'Timestamp']);
    }
    
    // Append the form data to the sheet
    sheet.appendRow([name, email, message, timestamp]);
    
    // Return a success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Form data successfully recorded'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error
    console.error('Error processing form submission: ' + error.toString());
    
    // Return an error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// This function can be used to test the script
function testAppendToSheet() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message'
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
}