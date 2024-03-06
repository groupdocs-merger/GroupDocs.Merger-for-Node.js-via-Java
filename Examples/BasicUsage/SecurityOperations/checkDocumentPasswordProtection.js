/*
 * This example demonstrates how to check document password.
 */
async function checkDocumentPasswordProtection(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const isPasswordSet = merger.isPasswordSet();
    console.log(`Source document password has password: ${isPasswordSet}`)
}

module.exports = checkDocumentPasswordProtection
