Feature: Verify that the user can successfully create a new Inventory Adjustment entry

  Scenario: Create new Inventory Adjustment when no Inventory Adjustment are available
    Given User logged in as an inventory admin
    When User visits the Inventory Adjustment create page
    Then User should be able to create new Inventory Adjustment successfully
