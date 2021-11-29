const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function navigate(){
       var searchString = "Automation testing with Selenium and JavaScript";
        let driver = await new Builder().forBrowser("chrome").build();
         await driver.get("http://localhost:3000");
            
        //login to the browser through frontend
        await driver.findElement(By.linkText("Login")).click();

        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

        await driver.findElement(By.name("login__username")).sendKeys("Test");
        await driver.findElement(By.name("login__password")).sendKeys("Test",Key.RETURN);

        await driver.findElements(By.name("departments")).click();
        //await driver.findElements(By.name("homescreen__search__button")).click();


        //await driver.quit();
}

navigate();