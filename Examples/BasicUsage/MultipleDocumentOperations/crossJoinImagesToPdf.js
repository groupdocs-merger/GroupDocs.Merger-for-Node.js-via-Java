/*
 * This example demonstrates how to merge multiple image files into single pdf file.
 */
async function crossJoinImagesToPdf(groupdocs, inputFilePath, joinFilePath1, joinFilePath2) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/CrossJoinImagesToPdf.pdf`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath1)
    merger.join(joinFilePath2)
    return merger.save(outputPath)
}

module.exports = crossJoinImagesToPdf
