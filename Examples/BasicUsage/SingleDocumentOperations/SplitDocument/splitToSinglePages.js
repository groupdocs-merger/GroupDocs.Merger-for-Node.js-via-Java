/*
 * This example demonstrates how to split the document to several one-page documents (by exact page numbers).
 */
async function splitToSinglePages(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/splitToSinglePages_{0}.{1}`
    const java = require('java')
    const pageArray = java.newArray('int', [3, 6, 8])
    const splitOptions = new groupdocs.merger.SplitOptions(outputPath, pageArray)
    /* This options set should produce:
     * 
       Document name  |  Page numbers
       document_0     |     3
       document_1     |     6
       document_2     |     8
    */
    console.log(`Source document was splitted successfully to ${outputPath}`)
    merger.split(splitOptions)
}

module.exports = splitToSinglePages
