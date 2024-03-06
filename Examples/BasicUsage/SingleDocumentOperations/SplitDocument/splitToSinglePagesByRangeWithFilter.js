/*
 * This example demonstrates how to split the document to several one-page documents (by start/end page numbers and even/odd filter).
 */
async function splitToSinglePagesByRangeWithFilter(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/splitToSinglePagesByRangeWithFilter_{0}.{1}`
    const rangeMode = groupdocs.merger.RangeMode.OddPages
    const splitOptions = new groupdocs.merger.SplitOptions(outputPath, 3, 7, rangeMode)
    /* This options set should produce:
     * 
       Document name  |  Page numbers
       document_0     |     3
       document_1     |     5
       document_2     |     7
    */
    console.log(`Source document was splitted successfully to ${outputPath}`)
    merger.split(splitOptions)
}

module.exports = splitToSinglePagesByRangeWithFilter
