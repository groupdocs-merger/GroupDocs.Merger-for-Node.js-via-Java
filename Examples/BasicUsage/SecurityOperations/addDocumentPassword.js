/*
 * This example demonstrates how to add password to document.
 */
async function addDocumentPassword(groupdocs, inputFilePath, passwordString) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/AddDocumentPassword.pptx`
    console.log(`Source document password was added successfully to ${outputPath}`)
    const addPasswordOptions = new groupdocs.merger.AddPasswordOptions(passwordString)
    merger.addPassword(addPasswordOptions)
    return merger.save(outputPath)
}

module.exports = addDocumentPassword
