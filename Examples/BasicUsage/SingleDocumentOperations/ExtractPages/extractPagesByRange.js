/*
 * This example demonstrates how to extract pages from the docx file.
 */
async function extractPagesByRange(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/ExtractPagesByRange.docx`
    const evenPages = groupdocs.merger.RangeMode.EvenPages
    const extractOptions = new groupdocs.merger.ExtractOptions(1, 3, evenPages)
    console.log(`Source document pages were extracted successfully to ${outputPath}`)
    merger.extractPages(extractOptions)
    return merger.save(outputPath)
}

module.exports = extractPagesByRange
