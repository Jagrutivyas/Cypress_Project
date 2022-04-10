Feature: Login Page Testing

Scenario: User is able to Successfully Login
Given user launches login page
When user enters email and password as 'fake@email.com' and "1fake@Password"
And user clicks on login button
Then user is successfully logged in

Scenario: User is able to View Terms and Conditions.
Given user launches login page
When user clicks Terms and conditions link
Then user is shown terms and conditions page

Scenario: User is able to Reset Password using Forgot Password link.
Given user launches login page
When user clicks on forgot password
And user navigates to forgot password page
Then user is able to restore password

Scenario: User is able to Go Back to Login Page from Forgot password Page.
Given user launches login page
When user clicks on forgot password
And user clicks on Back to Login
Then user is back to Login page

Scenario: Login Button is Disable when user enters Email in incorrect format.
Given user launches login page
When user enters email and password as 'fakeemailcom' and "1fake@Password"
Then Login Button is Disable

Scenario: Login Button is Disable when user enters Password in incorrect format.
Given user launches login page
When user enters email and password as 'fake@email.com' and "fakePassword"
Then Login Button is Disable
