Feature: Test an entire e-commerce site

    Scenario: As a user, I can login to my account and purchase things

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see a flash message saying <message>
        And if I'm on the login page, add a product to the cart
        Then I should navigate to shopping cart page
        And  when I click on purchase button
        When I give my <firstname> <lastname> and <postalcode> and click continue button
        Then I should be able to click on finish button 
        And I should see a confirmation message saying <message2>

    Examples:
        | username       | password       | message                 |   firstname  |    lastname    |   postalcode  |                | message2            |
        | standard_user  | secret_sauce   | Sauce Labs Backpack     |   standard   |    user        |   673019      |                | Thank you for your order! |