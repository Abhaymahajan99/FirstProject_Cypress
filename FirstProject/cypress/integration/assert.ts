

it( "Login Lawyer Wangu site", function() {
    
    //   cy.viewport(1366, 768)
    cy.visit("https://staging.lawyerwangu.com/")
    cy.wait(5000)
    cy.contains('Log in',).click({force: true})
    
    console.log('login')

    
    cy.get('#email',{timeout:5000}).type('lwtesterindi@gmail.com')
    console.log('enter email')
    cy.get('#con_password').type('tester@123')

    cy.contains('Sign in',{timeout:5000}).click()

    // Implicit Assertions

    cy.get('.btn-type2',{timeout:5000})
        .should('contain','My Account')
        .should('have.class','btn-type2')
        .and('be.visible')
        // .should('be.enabled')
        // .should('be.disabled')
   
    cy.get('.btn-type2').invoke('attr','class')
        .should('equal','btn-type2')

    
    })
