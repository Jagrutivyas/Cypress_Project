const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-report.html",// ** Path of report file **//
metadata: {
browser: {
name: "chrome",
version: "Version 100.0.4896.75 ",
},
device: "Local test machine",
platform: {
name: "Windows",
version: "Windows 10",
},
},
});