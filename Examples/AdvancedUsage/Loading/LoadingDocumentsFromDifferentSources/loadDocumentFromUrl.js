const java = require('java')
const URL = java.import('java.net.URL');

/*
 * This example demonstrates how to download and save document.
 */
async function loadDocumentFromUrl(groupdocs) {
    const url = 'https://github.com/groupdocs-merger/GroupDocs.Merger-for-.NET/blob/master/Examples/GroupDocs.Merger.Examples.CSharp/Resources/SampleFiles/Pdf/sample.pdf?raw=true'
    const outputPath = `${groupdocs.outputFolder}/LoadDocumentFromUrl.pdf`

    try {
        const stream = new URL(url).openStream();
        const merger = new groupdocs.merger.Merger(stream);
        console.log(`Source document loaded from URL successfully to ${outputPath}`)
        return merger.save(outputPath)

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = loadDocumentFromUrl
