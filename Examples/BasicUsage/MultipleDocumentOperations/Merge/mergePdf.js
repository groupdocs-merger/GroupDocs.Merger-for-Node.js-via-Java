/*
 * This example demonstrates how to merge multiple pdf files into single file.
 */
async function mergePdf(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergePdf.pdf`
    console.log(`Merged to ${outputPath}`)
    merger.join(inputFilePath)
    return merger.save(outputPath)
}

module.exports = mergePdf
