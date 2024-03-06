/*
 * This example demonstrates how to merge multiple archive files into single zip file.
 */
async function crossJoinMultipleArchives(groupdocs, inputFilePath, joinFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/CrossJoinMultipleArchives.zip`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath)
    return merger.save(outputPath)
}

module.exports = crossJoinMultipleArchives
