Feature: New Product Creation

    Scenario: Create a New Product 
        Given I am logged in
        When No Product Exists in the Products Page
        Then I should be able to Create a New Product
