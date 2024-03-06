/*
 * This example demonstrates how to merge multiple zip files into single file.
 */
async function mergeZip(groupdocs, inputFilePath, joinFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergeZip.zip`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath)
    return merger.save(outputPath)
}

module.exports = mergeZip
