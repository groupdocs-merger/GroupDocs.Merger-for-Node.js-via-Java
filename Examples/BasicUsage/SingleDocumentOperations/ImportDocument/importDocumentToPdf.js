/*
 * This example demonstrates how to add attachment to the Pdf document.
 */
async function importDocumentToPdf(groupdocs, inputFilePath, embeddedFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ImportDocumentToPdf.pdf`
    const pdfAttachmentOptions = new groupdocs.merger.PdfAttachmentOptions(embeddedFilePath)
    console.log(`Embedded object was added to the source document successfully to ${outputPath}`)
    merger.importDocument(pdfAttachmentOptions)
    return merger.save(outputPath)
}

module.exports = importDocumentToPdf
