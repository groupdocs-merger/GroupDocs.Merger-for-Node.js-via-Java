/*
 * This example demonstrates how to add the OLE object to the Spreadsheet document page.
 */
async function importDocumentToSpreadsheet(groupdocs, inputFilePath, embeddedFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ImportDocumentToSpreadsheet.xlsx`
    const oleSpreadsheetOptions = new groupdocs.merger.OleSpreadsheetOptions(embeddedFilePath, 2)
    oleSpreadsheetOptions.setRowIndex(2)
    oleSpreadsheetOptions.setColumnIndex(2)

    console.log(`Embedded object was added to the source document successfully to ${outputPath}`)
    merger.importDocument(oleSpreadsheetOptions)
    return merger.save(outputPath)
}

module.exports = importDocumentToSpreadsheet
