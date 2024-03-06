/*
 * This example demonstrates how to merge multiple Word files into single docx file.
 */
async function crossJoinFamilyDocuments(groupdocs, inputFilePath, joinFilePath1, joinFilePath2) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/CrossJoinWordFamilyDocuments.docx`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath1)
    merger.join(joinFilePath2)
    return merger.save(outputPath)
}

module.exports = crossJoinFamilyDocuments
