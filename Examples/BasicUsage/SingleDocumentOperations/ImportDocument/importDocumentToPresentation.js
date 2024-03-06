/*
 * This example demonstrates how to add the OLE object to the Presentation document page.
 */
async function importDocumentToPresentation(groupdocs, inputFilePath, embeddedFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ImportDocumentToPresentation.pptx`
    const olePresentationOptions = new groupdocs.merger.OlePresentationOptions(embeddedFilePath, 2)
    olePresentationOptions.setX(10)
    olePresentationOptions.setY(10)

    console.log(`Embedded object was added to the source document successfully to ${outputPath}`)
    merger.importDocument(olePresentationOptions)
    return merger.save(outputPath)
}

module.exports = importDocumentToPresentation
