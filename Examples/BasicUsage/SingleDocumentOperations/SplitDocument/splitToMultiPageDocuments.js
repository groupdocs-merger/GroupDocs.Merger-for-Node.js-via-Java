/*
 * This example demonstrates how to split the document to several multi-page documents by specified page ranges.
 */
async function splitToMultiPageDocuments(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/splitToMultiPageDocuments_{0}.{1}`
    const java = require('java')
    const pageArray = java.newArray('int', [3, 6, 8])
    const splitMode = groupdocs.merger.SplitMode.Interval
    const splitOptions = new groupdocs.merger.SplitOptions(outputPath, pageArray, splitMode)
    /* This options set should produce:
     * 
       Document name  |  Page numbers
       document_0     |     1, 2
       document_1     |     3, 4, 5
       document_2     |     6, 7
       document_3     |     8, 9, 10
    */
    console.log(`Source document was splitted successfully to ${outputPath}`)
    merger.split(splitOptions)
}

module.exports = splitToMultiPageDocuments
