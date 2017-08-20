// get a reference to your required module
var dataHelper = require('./excel-data-helper'),
    parse = require("json-templates");

// this is a sample json request template    
var requestBodyTemplate = parse(
    {   
        acctNum  : '{{accountNumber}}',
        acctType : '{{accountType}}'
    }
);   

for(i = 1 ; i < dataHelper.numberOfTestCases(0); i++ ){
    // get data array one row at a time by calling getTestData function
    values = dataHelper.getTestData(0,i);
 
    data_testCaseId = values[0];
    data_accountNumber = values[1];
    data_accountType   = values[2];

    var requestBody = requestBodyTemplate({accountNumber : data_accountNumber, accountType : data_accountType});    
    
    console.log('Test Case : ' + data_testCaseId);
    console.log(JSON.stringify(requestBody, null, 2));
}
