/*
 * This example demonstrates how to get the document info.
 */
async function getDocumentInformation(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    console.log('Document info retrieved successfully')
    const documentInformation = merger.getDocumentInfo()
    const documentType = documentInformation.getType()
    console.log(`Document info file format: ${documentType.getFileFormat()}`)
    console.log(`Document info page count: ${documentInformation.getPageCount()}`)
}

module.exports = getDocumentInformation
