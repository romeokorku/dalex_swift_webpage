import SignUp from "./pageObjects/SignUp"

describe('Swift Page',()=>
{

    before (function(){
        cy.fixture('example').then((data) =>
        {
            this.data=data
        })
    })

    it('Test homePage',function ()  {
        const signup=new SignUp()

        cy.visit(Cypress.env('url')+"/login")
        signup.getCreateAccountButton().click()
        signup.getEnterphonenumbertab().type(this.data.phonenumber)
        signup.getContinueButton().click()
        //signup.getEnterOTPCode().type('47473')
        

    })
})