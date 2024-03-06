/*
 * This example demonstrates how to split the text file to one-line documents.
 */
async function splitToSeparateLines(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/line_{0}.{1}`
    const java = require('java')
    const lineArray = java.newArray('int', [3, 6])
    const textSplitOptions = new groupdocs.merger.TextSplitOptions(outputPath, lineArray)
    console.log(`Source document was splitted successfully to ${outputPath}`)
    merger.split(textSplitOptions)
}

module.exports = splitToSeparateLines
