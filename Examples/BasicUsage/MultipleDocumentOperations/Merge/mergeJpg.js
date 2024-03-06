/*
 * This example demonstrates how to merge multiple jpg files into single file.
 */
async function mergeJpg(groupdocs, inputFilePath, joinFilePath1, joinFilePath2) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const imageJoinOptions = new groupdocs.merger.ImageJoinOptions()
    const outputPath = `${groupdocs.outputFolder}/MergeJpg.jpg`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath1, imageJoinOptions)
    merger.join(joinFilePath2, imageJoinOptions)
    return merger.save(outputPath)
}

module.exports = mergeJpg
