# Contact Form Deployment Instructions

## Issue Fixed
The contact form was not writing data to the Google Sheet because the previous Google Apps Script URL was no longer valid or accessible.

## Deployment Steps

### 1. Deploy the Google Apps Script
1. Go to [Google Apps Script](https://script.google.com) and sign in with your Google account
2. Click on "New Project" to create a new script
3. Delete any code in the editor and paste the entire content from `google-apps-script-code.js` in this project
4. Verify that the `SPREADSHEET_ID` in the script matches your Google Sheet ID:
   ```javascript
   const SPREADSHEET_ID = '1p5FKdgmX2p5bfQtX2Q_pHCUFunSrSulId6D2qQlLvzg';
   ```
   If you want to use a different Google Sheet, replace this ID with your sheet's ID
5. Click on "Save" (disk icon) and give your project a name (e.g., "Portfolio Contact Form Handler")
6. Deploy the script:
   - Click on "Deploy" > "New deployment"
   - For "Select type", choose "Web app"
   - Set "Execute as" to "Me" (your Google account)
   - Set "Who has access" to "Anyone, even anonymous"
   - Click "Deploy"
7. Copy the Web app URL that appears after deployment

### 2. Update the Contact Form Code
1. Open `/src/components/Footer.jsx` in your code editor
2. Find the line with `const googleScriptUrl = 'YOUR_NEW_GOOGLE_APPS_SCRIPT_WEB_APP_URL';`
3. Replace `'YOUR_NEW_GOOGLE_APPS_SCRIPT_WEB_APP_URL'` with the URL you copied from the deployment step
4. Save the file

## Testing the Contact Form

To verify that the contact form is working correctly:

1. Build and deploy your portfolio website
2. Navigate to the contact form section
3. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Submit the form
5. Check for the success message on the website
6. Open your Google Sheet to verify that the test data has been recorded

## Troubleshooting

If the form is not working:

1. Check the browser console for any errors
2. Verify that the Google Apps Script URL is correct in `Footer.jsx`
3. Make sure the Google Apps Script is deployed with the correct permissions (Anyone, even anonymous)
4. Check that the Google Sheet ID in the script is correct
5. Verify that your Google account has permission to write to the specified Google Sheet

## Future Maintenance

If the contact form stops working in the future:

1. The Google Apps Script deployment might have expired (they can expire after a certain period)
2. Re-deploy the script following the steps above
3. Update the URL in `Footer.jsx` with the new deployment URL
4. If you change the structure of the form (adding or removing fields), update the Google Apps Script accordingly