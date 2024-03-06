/*
 * This example demonstrates how to extract pages from the docx file.
 */
async function extractPagesByNumbers(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ExtractPagesByNumbers.docx`
    const java = require('java')
    const pageArray = java.newArray('int', [1, 3])
    const extractOptions = new groupdocs.merger.ExtractOptions(pageArray)
    console.log(`Source document pages were extracted successfully to ${outputPath}`)
    merger.extractPages(extractOptions)
    return merger.save(outputPath)
}

module.exports = extractPagesByNumbers
