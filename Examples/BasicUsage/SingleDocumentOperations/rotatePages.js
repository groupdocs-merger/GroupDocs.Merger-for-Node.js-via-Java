/*
 * This example demonstrates how to rotate pages from the pptx file.
 */
async function rotatePages(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/RotatePages.pdf`
    const rotateMode = groupdocs.merger.RotateMode.Rotate180
    const rotateOptions = new groupdocs.merger.RotateOptions(rotateMode, 1, 2)
    console.log(`Source document pages were rotated successfully to ${outputPath}`)
    merger.rotatePages(rotateOptions)
    return merger.save(outputPath)
}

module.exports = rotatePages
