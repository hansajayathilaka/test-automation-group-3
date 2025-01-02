Feature: New Product Creation

  Scenario: Create a New Product
    Given User logged in as an inventory admin
    When User visits the Inventory Overview Page
    Then User should be able to Create a New Product
