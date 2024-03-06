/*
 * This example demonstrates how to remove password to document.
 */
async function removeDocumentPassword(groupdocs, inputFilePath, passwordString) {
    const loadOptions = new groupdocs.merger.LoadOptions(passwordString)
    const merger = new groupdocs.merger.Merger(inputFilePath, loadOptions)
    const outputPath = `${groupdocs.outputFolder}/RemoveDocumentPassword.docx`
    console.log(`Source document password was removed successfully to ${outputPath}`)
    merger.removePassword()
    return merger.save(outputPath)
}

module.exports = removeDocumentPassword
