/*
 * This example demonstrates how to merge multiple one files into single file.
 */
async function mergeOne(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergeOne.one`
    console.log(`Merged to ${outputPath}`)
    merger.join(inputFilePath)
    return merger.save(outputPath)
}

module.exports = mergeOne
