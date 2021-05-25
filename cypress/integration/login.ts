import {LoginPage} from "../pages/login_page"

it('login to app', function(){
//object olusturuyoruz sabit olmasini istedigimiz icin const kullandik
    const loginPage = new LoginPage()
    //; is optional but good practice to use it
    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.inputUserName('test');
    loginPage.inputPassword('test');
    loginPage.clickLoginButton();

    
    
    
})