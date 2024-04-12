const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the login page$/, async () => {
  await browser.url("https://www.saucedemo.com/");
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
  await $('input[name="user-name"]').setValue(username);
  await $('input[name="password"]').setValue(password);
  await $('input[name="login-button"]').click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  const currentUrl = await browser.getUrl();
  console.log("Current URL:", currentUrl);


  if (currentUrl === "https://www.saucedemo.com/inventory.html") {
    const inventoryItem = await $(".inventory_item_name");

    await expect(inventoryItem).toHaveTextContaining(message);
    console.log(inventoryItem);
  } 
  else if (currentUrl === "https://www.saucedemo.com/") {
    const errorMessage = await $('h3[data-test="error"]').getText(); 
    console.log(errorMessage);
    expect(errorMessage).toContain(message); 
  }
});


When(/^if I'm on the login page, add a product to the cart$/, async() => {
  await $('button[name="add-to-cart-sauce-labs-backpack"]').click();
});

Then(/^I should navigate to shopping cart page$/, async() => {
  await $('a.'+'shopping_cart_link').click();
});

Then(/^when I click on purchase button$/, async() => {
  await $('button[name="checkout"]').click();
});

When(/^I give my (.*) (.*) and (.*) and click continue button$/, async(firstname,lastname,postalcode) => {
  await $('input[name="firstName"]').setValue(firstname);
  await $('input[name="lastName"]').setValue(lastname);
  await $('input[name="postalCode"]').setValue(postalcode);
  await $('input[name="continue"]').click();
  
});


Then(/^I should be able to click on finish button$/, async() => {
  
  await $('button[name="finish"]').click();
});

Then(/^I should see a confirmation message saying (.*)$/, async(message2) => {
  
  const confirmationMessage = await $('h2[data-test="complete-header"]').getText(); 
  expect(confirmationMessage).toContain(message2); // Using Jasmine matcher inst
});



