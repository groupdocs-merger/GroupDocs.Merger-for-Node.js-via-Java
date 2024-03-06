/*
 * This example demonstrates how to merge multiple xlsx files into single file.
 */
async function mergeXlsx(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergeXlsx.xlsx`
    console.log(`Merged to ${outputPath}`)
    merger.join(inputFilePath)
    return merger.save(outputPath)
}

module.exports = mergeXlsx
