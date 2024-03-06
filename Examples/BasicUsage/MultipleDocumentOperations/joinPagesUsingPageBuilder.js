/*
 * This example demonstrates how to join specific pages from several source documents using PageBuilder class.
 */
async function joinPagesUsingPageBuilder(groupdocs, inputFilePath, joinFilePath) { 
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/JoinPagesUsingPageBuilder.docx`
    console.log(`Merged to ${outputPath}`)
    merger.join(joinFilePath)

    const pageBuilder = merger.createPageBuilder()
    pageBuilder.addPage(pageBuilder.getDocuments().get(1).getPages()[0]) // Add 1 page of the second document
    pageBuilder.addPage(pageBuilder.getDocuments().get(0).getPages()[1]) // Add 2 page of the first document
    pageBuilder.addPage(pageBuilder.getDocuments().get(1).getPages()[1]) // Add 2 page of the second document

    merger.applyPageBuilder(pageBuilder);
    return merger.save(outputPath)
}

module.exports = joinPagesUsingPageBuilder
