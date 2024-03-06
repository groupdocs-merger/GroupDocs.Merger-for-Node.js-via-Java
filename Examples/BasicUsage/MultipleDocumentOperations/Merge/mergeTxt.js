/*
 * This example demonstrates how to merge multiple txt files into single file.
 */
async function mergeTxt(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergeTxt.txt`
    console.log(`Merged to ${outputPath}`)
    merger.join(inputFilePath)
    return merger.save(outputPath)
}

module.exports = mergeTxt
