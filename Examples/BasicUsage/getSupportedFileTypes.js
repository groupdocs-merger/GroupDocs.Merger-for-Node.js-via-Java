/*
 * This example demonstrates how to get the supported file types.
 */

async function getSupportedFileTypes(groupdocs) {
    console.log('\n----------------------------------------------------------------------------');
    console.log('[Example Basic Usage] # GetSupportedFileFormats : Get supported file formats\n');

    const supportedFileTypes = groupdocs.merger.FileType.getSupportedFileTypes().toArray();
    supportedFileTypes.forEach((fileType) => {
        console.log('\n' + fileType.getExtension());
    });
    console.log('\n----------------------------------------------------------------------------');
}

module.exports = getSupportedFileTypes