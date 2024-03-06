const fs = require('fs')
const merger = require('@groupdocs/groupdocs.merger')

// Constant Variables 
const Constants = require('./constants')

// Quick Start
const setLicense = require('./QuickStart/setLicense')

// Basic usage
const getDocumentInformation = require('./BasicUsage/getDocumentInformation')
const getSupportedFileTypes = require('./BasicUsage/getSupportedFileTypes')

// Multiple Document Operations
const joinMultipleDocuments = require('./BasicUsage/MultipleDocumentOperations/joinMultipleDocuments')
const joinPagesFromVariousDocuments = require('./BasicUsage/MultipleDocumentOperations/joinPagesFromVariousDocuments')
const crossJoinFamilyDocuments = require('./BasicUsage/MultipleDocumentOperations/crossJoinFamilyDocuments')
const crossJoinImagesToPdf = require('./BasicUsage/MultipleDocumentOperations/crossJoinImagesToPdf')
const crossJoinMultipleArchives = require('./BasicUsage/MultipleDocumentOperations/crossJoinMultipleArchives')
const crossJoinMultipleDocuments = require('./BasicUsage/MultipleDocumentOperations/crossJoinMultipleDocuments')
const crossJoinMultipleImages = require('./BasicUsage/MultipleDocumentOperations/crossJoinMultipleImages')
const crossJoinPagesFromVariousDocuments = require('./BasicUsage/MultipleDocumentOperations/crossJoinPagesFromVariousDocuments')
const joinPagesUsingPageBuilder = require('./BasicUsage/MultipleDocumentOperations/joinPagesUsingPageBuilder')

// Merge
const mergePdf = require('./BasicUsage/MultipleDocumentOperations/Merge/mergePdf')
const mergeDocx = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeDocx')
const mergeXlsx = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeXlsx')
const mergeOne = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeOne')
const mergeTxt = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeTxt')
const mergeVsdx = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeVsdx')
const mergeEpub = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeEpub')
const mergePptx = require('./BasicUsage/MultipleDocumentOperations/Merge/mergePptx')
const mergeHtml = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeHtml')
const mergeZip = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeZip')
const mergeJpg = require('./BasicUsage/MultipleDocumentOperations/Merge/mergeJpg')

// Security Operations
const addDocumentPassword = require('./BasicUsage/SecurityOperations/addDocumentPassword')
const checkDocumentPasswordProtection = require('./BasicUsage/SecurityOperations/checkDocumentPasswordProtection')
const removeDocumentPassword = require('./BasicUsage/SecurityOperations/removeDocumentPassword')
const updateDocumentPassword = require('./BasicUsage/SecurityOperations/updateDocumentPassword')

// Single Document Operations
const swapPages = require('./BasicUsage/SingleDocumentOperations/swapPages')
const rotatePages = require('./BasicUsage/SingleDocumentOperations/rotatePages')
const removePages = require('./BasicUsage/SingleDocumentOperations/removePages')
const movePage = require('./BasicUsage/SingleDocumentOperations/movePage')
const changePageOrientation = require('./BasicUsage/SingleDocumentOperations/changePageOrientation')
// Extract pages
const extractPagesByNumbers = require('./BasicUsage/SingleDocumentOperations/ExtractPages/extractPagesByNumbers')
const extractPagesByRange = require('./BasicUsage/SingleDocumentOperations/ExtractPages/extractPagesByRange')
// Split text file
const splitToLineRanges = require('./BasicUsage/SingleDocumentOperations/SplitTextFile/splitToLineRanges')
const splitToSeparateLines = require('./BasicUsage/SingleDocumentOperations/SplitTextFile/splitToSeparateLines')
// Split document
const splitToSinglePages = require('./BasicUsage/SingleDocumentOperations/SplitDocument/splitToSinglePages')
const splitToSinglePagesByRange = require('./BasicUsage/SingleDocumentOperations/SplitDocument/splitToSinglePagesByRange')
const splitToSinglePagesByRangeWithFilter = require('./BasicUsage/SingleDocumentOperations/SplitDocument/splitToSinglePagesByRangeWithFilter')
const splitToMultiPageDocuments = require('./BasicUsage/SingleDocumentOperations/SplitDocument/splitToMultiPageDocuments')
// Import document
const importDocumentToDiagram = require('./BasicUsage/SingleDocumentOperations/ImportDocument/importDocumentToDiagram')
const importDocumentToPdf = require('./BasicUsage/SingleDocumentOperations/ImportDocument/importDocumentToPdf')
const importDocumentToPresentation = require('./BasicUsage/SingleDocumentOperations/ImportDocument/importDocumentToPresentation')
const importDocumentToSpreadsheet = require('./BasicUsage/SingleDocumentOperations/ImportDocument/importDocumentToSpreadsheet')
const importDocumentToWordProcessing = require('./BasicUsage/SingleDocumentOperations/ImportDocument/importDocumentToWordProcessing')

// Advanced usage
// LoadOptions
const loadPasswordProtectedDocument = require('./AdvancedUsage/Loading/loadPasswordProtectedDocument')
// Loading from different sources
const loadDocumentFromUrl = require('./AdvancedUsage/Loading/LoadingDocumentsFromDifferentSources/loadDocumentFromUrl')

class MergerExamples {
    constructor() {
        // Initialize the License
        let lic = Constants.LicensePath
        if (!lic || !lic.endsWith('.lic')) console.log('License is not found, continuing with demo version!')
        else this.licensePath = lic

        // Initialize the model
        this.merger = merger

        // Initialize files
        this.initializeInputFiles()
        this.initializeOutputFolder()
    }

    initializeInputFiles() {
        this.inputFiles = {
            samplePdf: Constants.SAMPLE_PDF,
            samplePdfSimple: Constants.SAMPLE_PDF_SIMPLE,
            sampleDoc: Constants.SAMPLE_DOC,
            sampleDocm: Constants.SAMPLE_DOCM,
            sampleDocx: Constants.SAMPLE_DOCX,
            sampleDocxPasswordProtected: Constants.SAMPLE_DOCX_WITH_PASSWORD,
            sampleDocxPages: Constants.SAMPLE_DOCX_PAGES,
            sampleXlsx: Constants.SAMPLE_XLSX,
            sampleOne: Constants.SAMPLE_ONE,
            sampleTxt: Constants.SAMPLE_TXT,
            sampleVsdx: Constants.SAMPLE_VSDX,
            sampleEpub: Constants.SAMPLE_EPUB,
            samplePptx: Constants.SAMPLE_PPTX,
            sampleHtml: Constants.SAMPLE_HTML,
            sampleTar: Constants.SAMPLE_TAR,
            sampleZip: Constants.SAMPLE_ZIP,
            sampleZip2: Constants.SAMPLE_ZIP2,
            samplePng: Constants.SAMPLE_PNG,
            sampleGif: Constants.SAMPLE_GIF,
            sampleEmf: Constants.SAMPLE_EMF,
            sampleTiff: Constants.SAMPLE_TIFF,
            sampleJpg: Constants.SAMPLE_JPG1,
            sampleJpg2: Constants.SAMPLE_JPG2,
            sampleJpg3: Constants.SAMPLE_JPG3,
        }
    }

    initializeOutputFolder() {
        this.outputFolder = Constants.OutputPath
        try {
            if (!fs.existsSync(this.outputFolder)) fs.mkdirSync(this.outputFolder)
        } catch (error) {
            console.error(error)
        }
    }

    async setLicense(licensePath = '') {
        if (this.licensePath) return setLicense(this, licensePath || this.licensePath)
    }

    async getDocumentInformation(inputFilePath = '') {
        return getDocumentInformation(this, inputFilePath || this.inputFiles.sampleVsdx)
    }

    async getSupportedFileTypes(inputFilePath = '') {
        return getSupportedFileTypes(this, inputFilePath || this.inputFiles.sampleVsdx)
    }

    async addDocumentPassword(inputFilePath = '', passwordString = '') {
        return addDocumentPassword(this, inputFilePath || this.inputFiles.samplePptx, passwordString || Constants.SAMPLE_PASSWORD)
    }

    async checkDocumentPasswordProtection(inputFilePath = '') {
        return checkDocumentPasswordProtection(this, inputFilePath || this.inputFiles.sampleDocxPasswordProtected)
    }

    async removeDocumentPassword(inputFilePath = '', passwordString) {
        return removeDocumentPassword(this, inputFilePath || this.inputFiles.sampleDocxPasswordProtected, passwordString || Constants.SAMPLE_PASSWORD)
    }

    async updateDocumentPassword(inputFilePath = '', passwordString) {
        return updateDocumentPassword(this, inputFilePath || this.inputFiles.sampleDocxPasswordProtected, passwordString || Constants.SAMPLE_PASSWORD)
    }

    async swapPages(inputFilePath = '') {
        return swapPages(this, inputFilePath || this.inputFiles.samplePptx)
    }

    async rotatePages(inputFilePath = '') {
        return rotatePages(this, inputFilePath || this.inputFiles.samplePdf)
    }

    async removePages(inputFilePath = '') {
        return removePages(this, inputFilePath || this.inputFiles.sampleDocx)
    }

    async movePage(inputFilePath = '') {
        return movePage(this, inputFilePath || this.inputFiles.samplePptx)
    }

    async changePageOrientation(inputFilePath = '') {
        return changePageOrientation(this, inputFilePath || this.inputFiles.sampleDocx)
    }

    async extractPagesByNumbers(inputFilePath = '') {
        return extractPagesByNumbers(this, inputFilePath || this.inputFiles.sampleDocx)
    }

    async extractPagesByRange(inputFilePath = '') {
        return extractPagesByRange(this, inputFilePath || this.inputFiles.sampleDocx)
    }

    async splitToLineRanges(inputFilePath = '') {
        return splitToLineRanges(this, inputFilePath || this.inputFiles.sampleTxt)
    }

    async splitToSeparateLines(inputFilePath = '') {
        return splitToSeparateLines(this, inputFilePath || this.inputFiles.sampleTxt)
    }

    async splitToSinglePages(inputFilePath = '') {
        return splitToSinglePages(this, inputFilePath || this.inputFiles.sampleDocxPages)
    }

    async splitToSinglePagesByRange(inputFilePath = '') {
        return splitToSinglePagesByRange(this, inputFilePath || this.inputFiles.sampleDocxPages)
    }

    async splitToSinglePagesByRangeWithFilter(inputFilePath = '') {
        return splitToSinglePagesByRangeWithFilter(this, inputFilePath || this.inputFiles.sampleDocxPages)
    }

    async splitToMultiPageDocuments(inputFilePath = '') {
        return splitToMultiPageDocuments(this, inputFilePath || this.inputFiles.sampleDocxPages)
    }

    async importDocumentToDiagram(inputFilePath = '', embeddedFilePath = '') {
        return importDocumentToDiagram(this, inputFilePath || this.inputFiles.sampleVsdx, embeddedFilePath || this.inputFiles.sampleEmf)
    }

    async importDocumentToPdf(inputFilePath = '', embeddedFilePath = '') {
        return importDocumentToPdf(this, inputFilePath || this.inputFiles.samplePdf, embeddedFilePath || this.inputFiles.samplePptx)
    }

    async importDocumentToPresentation(inputFilePath = '', embeddedFilePath = '') {
        return importDocumentToPresentation(this, inputFilePath || this.inputFiles.samplePptx, embeddedFilePath || this.inputFiles.samplePdf)
    }

    async importDocumentToSpreadsheet(inputFilePath = '', embeddedFilePath = '') {
        return importDocumentToSpreadsheet(this, inputFilePath || this.inputFiles.sampleXlsx, embeddedFilePath || this.inputFiles.samplePdf)
    }

    async importDocumentToWordProcessing(inputFilePath = '', embeddedFilePath = '') {
        return importDocumentToWordProcessing(this, inputFilePath || this.inputFiles.sampleDocx, embeddedFilePath || this.inputFiles.samplePdf)
    }

    async joinMultipleDocuments(inputFilePath = '', joinFilePath = '') {
        return joinMultipleDocuments(this, inputFilePath || this.inputFiles.samplePdf, joinFilePath || this.inputFiles.samplePdfSimple)
    }

    async joinPagesFromVariousDocuments(inputFilePath = '', joinFilePath = '') {
        return joinPagesFromVariousDocuments(this, inputFilePath || this.inputFiles.sampleDocx, joinFilePath || this.inputFiles.sampleDocxPages)
    }

    async joinPagesUsingPageBuilder(inputFilePath = '', joinFilePath = '') {
        return joinPagesUsingPageBuilder(this, inputFilePath || this.inputFiles.sampleDocx, joinFilePath || this.inputFiles.sampleDocxPages)
    }

    async crossJoinFamilyDocuments(inputFilePath = '', joinFilePath1 = '', joinFilePath2 = '') {
        return crossJoinFamilyDocuments(this, inputFilePath || this.inputFiles.sampleDocx, joinFilePath1 || this.inputFiles.sampleDoc, joinFilePath2 || this.inputFiles.sampleDocm)
    }

    async crossJoinImagesToPdf(inputFilePath = '', joinFilePath1 = '', joinFilePath2 = '') {
        return crossJoinImagesToPdf(this, inputFilePath || this.inputFiles.samplePdf, joinFilePath1 || this.inputFiles.samplePng, joinFilePath2 || this.inputFiles.sampleGif)
    }

    async crossJoinMultipleArchives(inputFilePath = '', joinFilePath = '') {
        return crossJoinMultipleArchives(this, inputFilePath || this.inputFiles.sampleZip, joinFilePath || this.inputFiles.sampleTar)
    }

    async crossJoinMultipleDocuments(inputFilePath = '', joinFilePath1 = '', joinFilePath2 = '') {
        return crossJoinMultipleDocuments(this, inputFilePath || this.inputFiles.samplePdf, joinFilePath1 || this.inputFiles.sampleDocx, joinFilePath2 || this.inputFiles.samplePptx)
    }

    async crossJoinMultipleImages(inputFilePath = '', joinFilePath1 = '', joinFilePath2 = '') {
        return crossJoinMultipleImages(this, inputFilePath || this.inputFiles.samplePng, joinFilePath1 || this.inputFiles.sampleGif, joinFilePath2 || this.inputFiles.sampleJpg)
    }

    async crossJoinPagesFromVariousDocuments(inputFilePath = '', joinFilePath1 = '', joinFilePath2 = '') {
        return crossJoinPagesFromVariousDocuments(this, inputFilePath || this.inputFiles.samplePdf, joinFilePath1 || this.inputFiles.sampleDocx, joinFilePath2 || this.inputFiles.sampleTiff)
    }

    async mergePdf(inputFilePath = '') {
        return mergePdf(this, inputFilePath || this.inputFiles.samplePdf)
    }

    async mergeDocx(inputFilePath = '') {
        return mergeDocx(this, inputFilePath || this.inputFiles.sampleDocx)
    }

    async mergeXlsx(inputFilePath = '') {
        return mergeXlsx(this, inputFilePath || this.inputFiles.sampleXlsx)
    }

    async mergeOne(inputFilePath = '') {
        return mergeOne(this, inputFilePath || this.inputFiles.sampleOne)
    }

    async mergeTxt(inputFilePath = '') {
        return mergeTxt(this, inputFilePath || this.inputFiles.sampleTxt)
    }

    async mergeVsdx(inputFilePath = '') {
        return mergeVsdx(this, inputFilePath || this.inputFiles.sampleVsdx)
    }

    async mergeEpub(inputFilePath = '') {
        return mergeEpub(this, inputFilePath || this.inputFiles.sampleEpub)
    }

    async mergePptx(inputFilePath = '') {
        return mergePptx(this, inputFilePath || this.inputFiles.samplePptx)
    }

    async mergeHtml(inputFilePath = '') {
        return mergeHtml(this, inputFilePath || this.inputFiles.sampleHtml)
    }

    async mergeZip(inputFilePath = '', joinFilePath = '') {
        return mergeZip(this, inputFilePath || this.inputFiles.sampleZip, joinFilePath || this.inputFiles.sampleZip2)
    }

    async mergeJpg(inputFilePath = '', joinFilePath1 = '', joinFilePath2 = '') {
        return mergeJpg(this, inputFilePath || this.inputFiles.sampleJpg, joinFilePath1 || this.inputFiles.sampleJpg2, joinFilePath2 || this.inputFiles.sampleJpg3)
    }

    async loadPasswordProtectedDocument(inputFilePath = '', passwordString) {
        return loadPasswordProtectedDocument(this, inputFilePath || this.inputFiles.sampleDocxPasswordProtected, passwordString || Constants.SAMPLE_PASSWORD)
    }

    async loadDocumentFromUrl() {
        return loadDocumentFromUrl(this)
    }
}

module.exports = new MergerExamples()