/*
 * This example demonstrates how to move page from the docx file.
 */
async function movePage(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MovePage.pptx`
    const moveOptions = new groupdocs.merger.MoveOptions(2, 1)
    console.log(`Source document pages were moved successfully to ${outputPath}`)
    merger.movePage(moveOptions)
    return merger.save(outputPath)
}

module.exports = movePage
