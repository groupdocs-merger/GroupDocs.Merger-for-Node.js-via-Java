/*
 * This example demonstrates how to load password protected document and save into single file.
 */
async function loadPasswordProtectedDocument(groupdocs, inputFilePath, passwordString) {
    const loadOptions = new groupdocs.merger.LoadOptions(passwordString)
    const merger = new groupdocs.merger.Merger(inputFilePath, loadOptions)
    const outputPath = `${groupdocs.outputFolder}/SaveProtectedDocx.docx`
    console.log(`Saved to ${outputPath}`)
    return merger.save(outputPath)
}

module.exports = loadPasswordProtectedDocument
