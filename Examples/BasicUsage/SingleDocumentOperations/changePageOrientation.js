/*
 * This example demonstrates how to change page orientation from the docx file.
 */
async function changePageOrientation(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ChangePageOrientation.docx`
    const orientationMode = groupdocs.merger.OrientationMode.Landscape
    const orientationOptions = new groupdocs.merger.OrientationOptions(orientationMode, 1, 2)
    console.log(`Source document changed page orientation successfully to ${outputPath}`)
    merger.changeOrientation(orientationOptions)
    return merger.save(outputPath)
}

module.exports = changePageOrientation
