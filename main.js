// get a reference to your required module
var dataHelper = require('./excel-data-helper');

// get raw json data in a local variable
var data = dataHelper.testData;
console.log(data[0].data[0][0] + " \t " + data[0].data[0][1] + " \t " + data[0].data[0][2]);

for(i = 1 ; i < dataHelper.numberOfTestCases(0); i++ ){
    // get data array one row at a time by calling getTestData function
    values = dataHelper.getTestData(0,i)
    console.log(values[0] + " \t\t " + values[1] + " \t " + values[2]);
}

