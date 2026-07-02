// ============================================================
// PRIMECOST — Google Sheets Lead Submission Utility
// Replace APPS_SCRIPT_URL below with your deployed Web App URL
// ============================================================

// 🔴 PASTE YOUR DEPLOYED WEB APP URL HERE after deployment:
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

/**
 * Sends form data to the Google Apps Script Web App
 * which then writes a row into the linked Google Sheet.
 *
 * @param {Object} payload - The form data to save
 * @returns {Promise<boolean>} - true if saved successfully
 */
export async function saveLeadToSheet(payload) {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      // Apps Script requires text/plain for no-cors mode
      headers: { 'Content-Type': 'text/plain' },
      mode: 'no-cors',
      body: JSON.stringify(payload),
    });
    // no-cors means we can't read the response — assume success
    return true;
  } catch (err) {
    console.error('[PRIMECOST] Sheet save failed:', err);
    return false;
  }
}
