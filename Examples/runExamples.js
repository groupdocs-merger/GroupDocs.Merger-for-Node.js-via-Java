const examples = require('./mergerExamples')

// CALL EXAMPLES
    ; (async () => {
        try {
            console.log('Start merger. \nIn Main() method uncomment the example that you want to run.')
            await examples.setLicense() // You can pass the licensePath as an argument, it's optional

            await Promise.all([
                /* NOTE: Please uncomment the example you want to try out */
                // Basic usage
                examples.getDocumentInformation(),
                examples.getSupportedFileTypes(),
                // Multiple Document Operations
                examples.joinMultipleDocuments(),
                examples.joinPagesFromVariousDocuments(),
                examples.joinPagesUsingPageBuilder(),
                examples.crossJoinFamilyDocuments(),
                examples.crossJoinImagesToPdf(),
                examples.crossJoinMultipleArchives(),
                examples.crossJoinMultipleDocuments(),
                examples.crossJoinMultipleImages(),
                examples.crossJoinPagesFromVariousDocuments(),
                // Merge
                examples.mergePdf(),
                examples.mergeDocx(),
                examples.mergeXlsx(),
                examples.mergeOne(),
                examples.mergeTxt(),
                examples.mergeVsdx(),
                examples.mergeEpub(),
                examples.mergePptx(),
                examples.mergeHtml(),
                examples.mergeZip(),
                examples.mergeJpg(),
                // Security Operations
                examples.addDocumentPassword(),
                examples.checkDocumentPasswordProtection(),
                examples.removeDocumentPassword(),
                examples.updateDocumentPassword(),
                // Single Document Operations
                examples.swapPages(),
                examples.rotatePages(),
                examples.removePages(),
                examples.movePage(),
                examples.changePageOrientation(),
                // Extract pages
                examples.extractPagesByRange(),
                examples.extractPagesByNumbers(),
                // Split text file
                examples.splitToLineRanges(),
                examples.splitToSeparateLines(),
                // Split document
                examples.splitToSinglePages(),
                examples.splitToSinglePagesByRange(),
                examples.splitToSinglePagesByRangeWithFilter(),
                examples.splitToMultiPageDocuments(),
                // Import document
                examples.importDocumentToPdf(),
                examples.importDocumentToDiagram(),
                examples.importDocumentToPresentation(),
                examples.importDocumentToSpreadsheet(),
                examples.importDocumentToWordProcessing(),
                // Advanced usage
                // LoadOptions
                examples.loadDocumentFromUrl(),
                examples.loadPasswordProtectedDocument(),
            ])
            console.log('The end of process.')
            process.exit(0)
        } catch (err) {
            console.error(err)
            process.exit(1)
        }
    })()