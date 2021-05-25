export class LoginPage{
    //we can store locaters as below
    //this keyword means this things belong this class
    loginPage_username = '#uname';
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]';

    //we can identify test data like parameter for functions
    navigate(url : string){
        cy.visit(url)
    }
    inputUserName(username: string){
        cy.get(this.loginPage_username).type(username)
    }
    inputPassword(password : string){
        cy.get(this.loginPage_password).type(password)
    }
    clickLoginButton(){
        cy.get(this.loginPage_loginButton).click()
    }




}