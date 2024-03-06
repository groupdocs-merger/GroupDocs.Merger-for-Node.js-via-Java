/*
 * This example demonstrates how to split the text file to the line interval text ones.
 */
async function splitToLineRanges(groupdocs, inputFilePath) {
    const merger = new groupdocs.merger.Merger(inputFilePath)
    const outputPath = `${groupdocs.outputFolder}/text_{0}.{1}`
    const textSplitMode = groupdocs.merger.TextSplitMode.Interval
    const java = require('java')
    const lineArray = java.newArray('int', [3, 6])
    const textSplitOptions = new groupdocs.merger.TextSplitOptions(outputPath, textSplitMode, lineArray)
    console.log(`Source document was splitted successfully to ${outputPath}`)
    merger.split(textSplitOptions)
}

module.exports = splitToLineRanges
