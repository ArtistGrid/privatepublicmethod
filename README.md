# Google Sheets Mirror Sync

Automated Google Apps Script that mirrors data and formatting from a source Google Spreadsheet to a target public/destination spreadsheet in real-time.

It preserves sheet IDs (`gid`) on the target spreadsheet so external references and formulas don't break.

---

## Features

* **Real-time Tab Sync (`syncChangeToPublic`):** Automatically syncs changes on the active tab whenever edits, row insertions/deletions, or column changes occur.
* **Full Workbook Sync (`fullSpreadsheetMirrorSync`):** Mirrors all tabs from the source spreadsheet to the target spreadsheet. Run this manually in case the formatting gets messed up.
* **In-Place Updates:** Updates existing sheets without deleting the tab, preserving the target sheet's unique ID (`gid`).
* **Format & Value Copy:** Copies cell values, formulas, formatting, styles, and merged cells.

---

## Setup Instructions

1. Open your Source Google Sheet.
2. Go to **Extensions** > **Apps Script**.
3. Paste `sync.gs` into the editor.
4. Replace `PUBLIC_SPREADSHEET_ID` with your target spreadsheet ID.
5. Save and add an **`On change`** trigger under the **Triggers (🕒)** menu for `syncChangeToPublic`.
