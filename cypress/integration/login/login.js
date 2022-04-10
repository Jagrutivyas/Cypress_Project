import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import login from './LoginPage'
import LoginPage from './LoginPage'

// SUCCESSFULL LOGIN WITH CORRECT CREDENTIALS

Given('user launches login page', () => { 
    LoginPage.loadLoginPage();
})

When('user enters email and password as {string} and {string}', (Email , Password) => {
    LoginPage.enterCredentials(Email , Password);
})

And('user clicks on login button', () => {
    LoginPage.clickOnLoginBtn();
})

Then('user is successfully logged in', () => {
    LoginPage.verifyHomePage();
})

// TERMS AND CONDITIONS

When('user clicks Terms and conditions link', () => {
    LoginPage.clickOnTermsAndConditionsLink();
})

Then('user is shown terms and conditions page', () => {
    LoginPage.verifyTermsAndConditionsPage();
})


// FORGOT PASSWORD

When('user clicks on forgot password', () => {
    LoginPage.clickOnForgotPasswordBtn();
})

And('user navigates to forgot password page', () => {
    LoginPage.verifyRestorePasswordPage();
})

Then('user is able to restore password', () => {
    LoginPage.restorePassword();
})

// VERIFY USER GO BACK TO LOGIN PAGE

And('user clicks on Back to Login', () => {
    LoginPage.clickOnGoBackToLoginPage();
})

Then('user is back to Login page', () => {
    LoginPage.verifyUserIsOnLoginPage();
})

//LOGIN BUTTON IS DISBLE

Then('Login Button is Disable', () => {
    LoginPage.verifyLoginButtonIsDisable()
})

