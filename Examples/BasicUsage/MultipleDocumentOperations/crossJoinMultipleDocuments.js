/*
 * This example demonstrates how to merge multiple various documents into single pdf file.
 */
async function crossJoinMultipleDocuments(groupdocs, inputFilePath, joinFilePath1, joinFilePath2) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/CrossJoinMultipleDocuments.pdf`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath1)
    merger.join(joinFilePath2)
    return merger.save(outputPath)
}

module.exports = crossJoinMultipleDocuments
