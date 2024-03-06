/*
 * This example demonstrates how to update password of document.
 */
async function updateDocumentPassword(groupdocs, inputFilePath, passwordString) {
    const loadOptions = new groupdocs.merger.LoadOptions(passwordString)
    const merger = new groupdocs.merger.Merger(inputFilePath, loadOptions)
    const outputPath = `${groupdocs.outputFolder}/UpdateDocumentPassword.docx`
    console.log(`Source document password was updated successfully to ${outputPath}`)
    const updatePasswordOptions = new groupdocs.merger.UpdatePasswordOptions(passwordString + passwordString)
    merger.updatePassword(updatePasswordOptions)
    return merger.save(outputPath)
}

module.exports = updateDocumentPassword
