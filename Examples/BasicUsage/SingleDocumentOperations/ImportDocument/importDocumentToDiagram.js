/*
 * This example demonstrates how to add attachment to the Diagram document.
 */
async function importDocumentToDiagram(groupdocs, inputFilePath, embeddedFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ImportDocumentToDiagram.vsdx`

    const fs = require('fs')
    const imageBuffer = fs.readFileSync(embeddedFilePath)
    const java = require('java')
    const byteArray = java.newArray('byte', [...imageBuffer])
    const oleDiagramOptions = new groupdocs.merger.OleDiagramOptions(embeddedFilePath, byteArray, 2)
    oleDiagramOptions.setX(1)
    oleDiagramOptions.setY(1)
    oleDiagramOptions.setWidth(2)
    oleDiagramOptions.setHeight(1)

    console.log(`Embedded object was added to the source document successfully to ${outputPath}`)
    merger.importDocument(oleDiagramOptions)
    return merger.save(outputPath)
}

module.exports = importDocumentToDiagram
