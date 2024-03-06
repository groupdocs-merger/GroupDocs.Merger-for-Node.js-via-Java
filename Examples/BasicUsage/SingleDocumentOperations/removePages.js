/*
 * This example demonstrates how to remove pages from the docx file.
 */
async function removePages(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/RemovePages.docx`
    const removeOptions = new groupdocs.merger.RemoveOptions(1, 2)
    console.log(`Source document pages were removed successfully to ${outputPath}`)
    merger.removePages(removeOptions)
    return merger.save(outputPath)
}

module.exports = removePages
