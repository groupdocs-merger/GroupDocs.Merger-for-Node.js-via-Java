/*
 * This example demonstrates how to merge multiple pdf files into single file.
 */
async function joinMultipleDocuments(groupdocs, inputFilePath, joinFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/JoinMultiplePdfDocuments.pdf`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath)
    merger.join(joinFilePath)
    return merger.save(outputPath)
}

module.exports = joinMultipleDocuments
