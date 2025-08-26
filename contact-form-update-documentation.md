# Contact Form Update Documentation

## Changes Made

The contact form in the portfolio website has been updated to connect with the Google Apps Script provided in the issue description. The following changes were implemented:

1. **Updated Google Apps Script URL**: 
   - Replaced the placeholder URL with the actual Google Apps Script URL provided in the issue description.
   - URL: `https://script.google.com/macros/s/AKfycbxR3CG6BLek44YewrDkwTC1Flym6iuRFGkqeaFB7FjAeSd47px89I_FvUVPgU03eXgG/exec`

2. **Modified Data Format**:
   - Changed the data format from FormData to JSON as required by the Google Apps Script.
   - The script expects data in JSON format with fields: `name`, `email`, and `message`.

3. **Updated Primary Submission Method**:
   - Modified the fetch API call to send JSON data with the appropriate Content-Type header.
   - Added JSON.stringify to properly format the data.

4. **Updated Fallback Submission Method**:
   - Modified the iframe fallback approach to handle JSON data.
   - Used text/plain encoding and a hidden input field with empty name to send the JSON data.

## How It Works

1. When a user submits the contact form, the data is collected from the form fields.
2. The primary submission method uses the fetch API to send the data as JSON to the Google Apps Script.
3. If the primary method fails, the fallback method using an iframe is triggered.
4. The Google Apps Script processes the data and appends it to a Google Sheet with the following columns:
   - Name
   - Email
   - Message
   - Date (automatically added by the script)

## Testing

To test the contact form:
1. Fill out the form with valid data
2. Submit the form
3. Check the browser console for any errors
4. Verify that the data appears in the connected Google Sheet

## Troubleshooting

If the form submission is not working:
1. Check the browser console for any error messages
2. Verify that the Google Apps Script URL is correct
3. Ensure the Google Apps Script is deployed as a web app with access set to "Anyone, even anonymous"
4. Check that the Google Sheet referenced in the script exists and is accessible