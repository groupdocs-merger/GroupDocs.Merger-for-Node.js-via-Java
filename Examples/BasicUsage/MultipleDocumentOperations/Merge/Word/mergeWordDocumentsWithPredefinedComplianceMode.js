/*
 * This example demonstrates how merge Word documents with pre-defined Compliance mode into single file.
 */
async function mergeWordDocumentsWithPredefinedComplianceMode(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/MergeWordDocumentsWithPredefinedComplianceMode.docx`
    console.log(`Merged to ${outputPath}`)
    const wordJoinOptionsCompliance = groupdocs.merger.WordJoinCompliance.Iso29500_2008_Strict
    const wordJoinOptions = new groupdocs.merger.WordJoinOptions()
    wordJoinOptions.Compliance = wordJoinOptionsCompliance
    merger.join(inputFilePath)
    return merger.save(outputPath)
}

module.exports = mergeWordDocumentsWithPredefinedComplianceMode
