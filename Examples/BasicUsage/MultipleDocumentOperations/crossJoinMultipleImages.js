/*
 * This example demonstrates how to merge multiple image files into single png file.
 */
async function crossJoinMultipleImages(groupdocs, inputFilePath, joinFilePath1, joinFilePath2) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/CrossJoinMultipleImages.png`
    console.log(`Merged to ${outputPath}`)
    const imageJoinModeVertical = groupdocs.merger.ImageJoinMode.Vertical
    const imageJoinOptions = new groupdocs.merger.ImageJoinOptions(imageJoinModeVertical)
    merger.join(joinFilePath1, imageJoinOptions)
    merger.join(joinFilePath2, imageJoinOptions)
    return merger.save(outputPath)
}

module.exports = crossJoinMultipleImages
