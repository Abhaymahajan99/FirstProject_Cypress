
/// <reference types="cypress" />

it('Lawyer Wangu Test' , function(){

    cy.visit('https://staging.lawyerwangu.com/')

    cy.get('#cn-accept-cookie').click

    cy.wait(5000)

    cy.get('#auto-suggest-front',{timeout:6000}).type("Letter of Consent to Register a Company with similar name{enter}");

   
})


it.only( "Login Lawyer Wangu site", function() {

    cy.once('uncaught:exception', () => false);
    cy.visit("https://staging.lawyerwangu.com/")
     cy.contains('Log in',).click({force: true})
    
    console.log('login')
   
    cy.get('#email',{timeout:20000}).type('lwtesterindi@gmail.com')
    console.log('enter email')
    cy.get('#con_password').type('tester@123')
    cy.contains('Sign in',{timeout:5000}).click()

    
 
}
)

