class LoginPage {

    static loadLoginPage(){
        cy.visit('https://login.sentryc.com/auth/login')
    }

    static enterCredentials(Email, Password){
        cy.get('[name="email"]').type(Email)
        cy.get('[name="password"]').type(Password)
    }

    static clickOnLoginBtn(){
        cy.get('[type="submit"]').click()
    }

    static verifyHomePage(){
        cy.contains('Sentryc Home Page').should('be.visible')
    }

    static verifyPasswordReqError(){

    }

    static clickOnTermsAndConditionsLink(){
        cy.contains('a','Terms').click()
    }

    static verifyTermsAndConditionsPage(){
        cy.url().should('include', '/terms')
    }

    static clickOnForgotPasswordBtn(){
        cy.contains('a','Forgot password?').click()
    }

    static verifyRestorePasswordPage(){
        cy.contains('b','Forgot password').should('be.visible');
        cy.contains('p','Enter your email to restore.').should('be.visible');
    }

    static restorePassword(){
        cy.get('[name="email"]').type("Example@email.com")
        cy.get('[type="submit"]').click()
    }

    static clickOnGoBackToLoginPage(){
        cy.contains('a','Back to login.').click()
    }

    static verifyUserIsOnLoginPage(){
        cy.contains('p','Welcome to the Sentryc.').should('be.visible')
    }

    static verifyLoginButtonIsDisable(){
        cy.get('[type="submit"]').should('be.visible')
}
}

export default LoginPage;