require('dotenv').config()
const path = require('path')
const SamplePath = path.join(__dirname, './Resources/SampleFiles')

module.exports = {
    LicensePath: (process.env.PATH_TO_LICS + process.env.PRODUCT_LIC) || '',
    SamplePath,
    OutputPath: path.join(__dirname, '../', 'Output'),
    SAMPLE_PASSWORD: 'SomePasswordString',
    SAMPLE_PDF: SamplePath + '/Pdf/sample.pdf',
    SAMPLE_PDF_SIMPLE: SamplePath + '/Pdf/sample_simple.pdf',
    SAMPLE_DOC: SamplePath + '/Words/sample.doc',
    SAMPLE_DOCM: SamplePath + '/Words/sample.docm',
    SAMPLE_DOCX: SamplePath + '/Words/sample.docx',
    SAMPLE_DOCX_WITH_PASSWORD: SamplePath + '/Words/sample_protected.docx',
    SAMPLE_DOCX_PAGES: SamplePath + '/Words/sample-10-pages.docx',
    SAMPLE_XLSX: SamplePath + '/Spreadsheet/sample.xlsx',
    SAMPLE_ONE: SamplePath + '/Note/sample.one',
    SAMPLE_TXT: SamplePath + '/Text/sample.txt',
    SAMPLE_VSDX: SamplePath + '/Diagram/sample.vsdx',
    SAMPLE_EPUB: SamplePath + '/Ebook/sample.epub',
    SAMPLE_PPTX: SamplePath + '/Presentation/sample.pptx',
    SAMPLE_HTML: SamplePath + '/Web/sample.html',
    SAMPLE_TAR: SamplePath + '/Archive/sample.tar',
    SAMPLE_ZIP: SamplePath + '/Archive/sample.zip',
    SAMPLE_ZIP2: SamplePath + '/Archive/sample2.zip',
    SAMPLE_PNG: SamplePath + '/Image/sample.png',
    SAMPLE_GIF: SamplePath + '/Image/sample.gif',
    SAMPLE_EMF: SamplePath + '/Image/sample.emf',
    SAMPLE_TIFF: SamplePath + '/Image/sample.tiff',
    SAMPLE_JPG1: SamplePath + '/Image/sample_1_JPG.jpg',
    SAMPLE_JPG2: SamplePath + '/Image/sample_2_JPG.jpg',
    SAMPLE_JPG3: SamplePath + '/Image/sample_3_JPG.jpg',
}