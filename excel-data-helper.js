var xlsx = require('node-xlsx').default;

// Parse a file 
const workSheetsFromFile = xlsx.parse(`${__dirname}/UserDetails.xlsx`);

// This returns all of the excel data in raw json format 
exports.testData = workSheetsFromFile;

// This returns number of rows present in an excel sheet
exports.numberOfTestCases = (sheetNumber) => workSheetsFromFile[sheetNumber].data.length;

// This returns a data array for a specified rowNumber from an excel sheet
exports.getTestData = (sheetNumber, rowNumber) => workSheetsFromFile[sheetNumber].data[rowNumber];

