/*
 * This example demonstrates how to swap pages from the pptx file.
 */
async function swapPages(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/SwapPages.pptx`
    const swapOptions = new groupdocs.merger.SwapOptions(1, 3)
    console.log(`Source document pages were swapped successfully to ${outputPath}`)
    merger.swapPages(swapOptions)
    return merger.save(outputPath)
}

module.exports = swapPages
