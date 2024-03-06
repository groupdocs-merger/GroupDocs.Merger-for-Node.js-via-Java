/*
 * This example demonstrates how to join pages from various docx files into single file.
 */
async function joinPagesFromVariousDocuments(groupdocs, inputFilePath, joinFilePath) { 
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/JoinPagesFromVariousDocxDocuments.docx`
    console.log(`Merged to ${outputPath}`)
    const pageJoinOptions1 = new groupdocs.merger.PageJoinOptions(7, 8)
    merger.join(joinFilePath, pageJoinOptions1)
    const pageJoinOptions2 = new groupdocs.merger.PageJoinOptions(9, 10)
    merger.join(joinFilePath, pageJoinOptions2)
    return merger.save(outputPath)
}

module.exports = joinPagesFromVariousDocuments
