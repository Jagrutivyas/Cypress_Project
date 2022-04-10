# Automation of Login Page

This project is created to automate the Test Cases for Login Page using Cucumber BDD framework in Cypress. The design pattern used for automation is POM (Page Object Model). The result of Test Cases is shown in the form of HTML reports.

## Features

- Implemented using BDD Cucumber Framework
- POM(Page Object Model) Design Pattern
- HTML reports with details of execution and screenshots of failed steps

## Technologies
- [Node js] 
- [Cypress] 
- [Cucumber] 
- [Javascript]
- [POM]

## Assumptions 

cypress, cypress-cucumber-preprocessor, cucumber-html-reporter are already setup in your project.
To install these,Open your favorite Terminal and run these commands.

```sh
npm install cypress
```
For installing cucumber
```sh
npm install cypress-cucumber-preprocessor
```
For installing cucumber html reporter
```sh
npm install cucumber-html-reporter
```




#### Steps to Execute

i) Open command Prompt and run below command to open cypress.
```sh
npx cypress open
```

ii) Cypress window opens double click the file name "Login.feature" , it will execute the feature   file.

iii) To generate HTML report run below command

```sh
node cucumber-html-report.js
```

#### Reports

HTML reports are generated in Cypress Project\reports:

1) Report Dashboard ,it shows the Features and Scenarios which are passed.


![Report Dashboard](https://github.com/Jagrutivyas/Cypress_Project/blob/main/cypress/screenshots/Report%20Dashboard.PNG)


2) To see feature overview click on feature name it wil take to feature overview tab and will show the scenario's passed and failed.

![Report Login Feature](https://github.com/Jagrutivyas/Cypress_Project/blob/main/cypress/screenshots/Report%20Login%20Page%20feature.PNG)





