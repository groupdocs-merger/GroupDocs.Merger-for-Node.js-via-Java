# Document Merger API for Node.js

GroupDocs.Merger for-Node.js-via-Java is a [Document Merger API](https://products.groupdocs.com/merger/java) for Java developers. It supports over 60 document types from popular categories such as PDF, Microsoft Office, OpenOffice, Visio, images, audio, archives etc.

It allows developers to merge several documents into one, split single document to multiple documents, reorder or replace document pages, change page orientation, manage document protection, render documents as images and more.

<p align="center">
  <a title="Download complete GroupDocs.Merger for Java source code" href="https://github.com/groupdocs-merger/GroupDocs.Merger-for-Java/archive/master.zip"> 
    <img src="https://raw.github.com/AsposeExamples/java-examples-dashboard/master/images/downloadZip-Button-Large.png" />
  </a>
</p>

Directory | Description
--------- | -----------
[Examples](https://github.com/groupdocs-merger/GroupDocs.Merger-for-Node.js-via-Java/tree/master/Examples)  | Node.js examples and sample documents for you to get started quickly.


## Node.js Merger API Features 
- Join two or more documents into one document, join specific pages or page ranges from several source documents into single resultant document.
- Split a source document to several resultant documents.
- Move page to another position within a document.
- Remove single page or a collection of specific page numbers from the source document.
- Rotate pages within document by setting rotation angle to 90,180 or 270 degrees.
- Swap two pages positions within the source document. The result is a new document where two pages have their positions exchanged.
- Extract specified page or page ranges from source document. The result is a new document that contains only specified pages from the source document.
- Change orientation operation lets to set page orientation (portrait, landscape) for specific or all pages of the document.
- Manage document password protection: add/update/delete document password and check its existence.
- Get the basic information about source document - file type, size, pages count, page height and width etc.
- Document preview feature allows to generate image representations of document pages. This may be helpful for better understanding about document content and its structure. Preview can be generated for all document pages (by default) or for specific page numbers or page range.

## Supported File Formats
Merge documents of the [most popular file formats](https://docs.groupdocs.com/merger/nodejs-java/supported-document-formats/) (PDF, DOCX, XLSX, PPTX, JPG, ZIP and more) into single resultant document.

## Get Started with GroupDocs.Merger-for-Node.js-via-Java

GroupDocs.Merger-for-Node.js-via-Java requires J2SE 7.0 (1.7), J2SE 8.0 (1.8) or above. Please install Java first if you do not have it already.

GroupDocs hosts all Java APIs on [GroupDocs Artifact Repository](https://releases.groupdocs.com/java/repo/com/groupdocs/groupdocs-merger/), so simply [configure](https://docs.groupdocs.com/merger/java/installation/) your Maven project to fetch the dependencies automatically.

### Installation

From the command line:

	npm install @groupdocs/groupdocs.merger

### Run Examples

Change directory to Examples:

	cd Examples

Run runExamles.js:

	node runExamples.js


## Merge PDF using Node.js

```js
// Load the source PDF file
const merger = new groupdocs.merger.Merger("sample1.pdf");

//  Add another PDF file to merge
merger.join("sample2.pdf");

// Merge PDF files and save result
merger.save("merged.pdf");
```

### Load password protected DOCX via Node.js

```js
// Load the password protected DOCX file
const loadOptions = new groupdocs.merger.LoadOptions("123");
const merger = new groupdocs.merger.Merger("sample.docx", loadOptions);

// Save the password protected DOCX result
merger.save("merged.docx");
```

[Home](https://www.groupdocs.com/) | [Product Page](https://products.groupdocs.com/merger/java) | [Documentation](https://docs.groupdocs.com/merger/java/) | [Demo](https://products.groupdocs.app/merger/family) | [API Reference](https://apireference.groupdocs.com/java/merger) | [Examples](https://github.com/groupdocs-merger/GroupDocs.Merger-for-Java/tree/master/Examples) | [Blog](https://blog.groupdocs.com/category/merger/) | [Search](https://search.groupdocs.com/) | [Free Support](https://forum.groupdocs.com/c/merger) | [Temporary License](https://purchase.groupdocs.com/temporary-license)