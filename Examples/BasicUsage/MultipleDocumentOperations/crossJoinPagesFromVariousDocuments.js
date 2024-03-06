/*
 * This example demonstrates how to join pages from various documents into single pdf file.
 */
async function crossJoinPagesFromVariousDocuments(groupdocs, inputFilePath, joinFilePath1, joinFilePath2) { 
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/CrossJoinPagesFromVariousDocuments.pdf`
    console.log(`Merged to ${outputPath}`)
    const pageJoinOptions = new groupdocs.merger.PageJoinOptions(1, 2)
    merger.join(joinFilePath1, pageJoinOptions)
    merger.join(joinFilePath2, pageJoinOptions)
    return merger.save(outputPath)
}

module.exports = crossJoinPagesFromVariousDocuments
