/*
 * This example demonstrates how to merge multiple vsdx files into single file.
 */
async function mergeVsdx(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergeVsdx.vsdx`
    console.log(`Merged to ${outputPath}`)
    merger.join(inputFilePath)
    return merger.save(outputPath)
}

module.exports = mergeVsdx
