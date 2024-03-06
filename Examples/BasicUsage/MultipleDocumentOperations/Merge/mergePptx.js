/*
 * This example demonstrates how to merge multiple pptx files into single file.
 */
async function mergePptx(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergePptx.pptx`
    console.log(`Merged to ${outputPath}`)
    merger.join(inputFilePath)
    return merger.save(outputPath)
}

module.exports = mergePptx
