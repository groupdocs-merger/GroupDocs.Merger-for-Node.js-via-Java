/*
 * This example demonstrates how to split the document to several one-page documents (by start/end page numbers).
 */
async function splitToSinglePagesByRange(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/splitToSinglePagesByRange_{0}.{1}`
    const splitOptions = new groupdocs.merger.SplitOptions(outputPath, 3, 7)
    /* This options set should produce:
     * 
       Document name  |  Page numbers
       document_0     |     3
       document_1     |     4
       document_2     |     5
       document_3     |     6
       document_4     |     7
    */
    console.log(`Source document was splitted successfully to ${outputPath}`)
    merger.split(splitOptions)
}

module.exports = splitToSinglePagesByRange
