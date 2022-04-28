
it( "Login Lawyer Wangu site", ()=>{

    cy.once('uncaught:exception', () => false);
    
    cy.visit("https://staging.lawyerwangu.com/")
    cy.wait(5000)
    cy.contains('Log in',).click({force: true})
    
    console.log('login')

    
    cy.get('#email',{timeout:5000}).type('lwtesterindi@gmail.com')
    console.log('enter email')
    cy.get('#con_password').type('tester@123')
    cy.contains('Sign in',{timeout:5000}).click()
    cy.wait(5000)
    cy.get('.btn-type2').should("be.a" ,"button")
 
}
)