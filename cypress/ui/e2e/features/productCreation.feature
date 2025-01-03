Feature: Product Creation

  Scenario: Verify the Initial Inventory Overview
    Given User logged in as an inventory admin
    When User visits the Inventory Overview Page
    Then User should be able visit the Initial Inventory Overview Page

  Scenario: Verify the Initial Products View
    Given User logged in as an inventory admin
    When User visits the Initial Products Page
    Then User should be able visit the Initial Product View Page

  Scenario: Create a New Product
    Given User logged in as an inventory admin
    When User visits the Product Creation Page
    Then User should be able to Create a New Product

  Scenario: Delete a Product
    Given User logged in as an inventory admin
    When User visits the Product View
    Then User should be able to Delete a Product
