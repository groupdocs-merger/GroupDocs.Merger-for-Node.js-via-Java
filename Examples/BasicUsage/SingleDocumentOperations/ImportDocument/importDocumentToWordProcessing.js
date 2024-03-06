/*
 * This example demonstrates how to add the OLE object to the Word processing document page.
 */
async function importDocumentToWordProcessing(groupdocs, inputFilePath, embeddedFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ImportDocumentToWordProcessing.docx`
    const oleWordProcessingOptions = new groupdocs.merger.OleWordProcessingOptions(embeddedFilePath, 2)
    oleWordProcessingOptions.setWidth(300)
    oleWordProcessingOptions.setHeight(300)

    console.log(`Embedded object was added to the source document successfully to ${outputPath}`)
    merger.importDocument(oleWordProcessingOptions)
    return merger.save(outputPath)
}

module.exports = importDocumentToWordProcessing
