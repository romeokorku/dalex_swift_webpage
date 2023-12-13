class SignUp{
    
getCreateAccountButton()
{
    return cy.get('[style="margin-top: 3rem;"] > .login-page-button')
}
getEnterphonenumbertab()
{
    return cy.get('.ion-text-left > #phoneNumber > .native-input')
}
getContinueButton()
{
    return cy.get('.sw-btn')
}
getEnterOTPCode()
{
    return cy.get('.sw-btn')
}

}
export default SignUp;