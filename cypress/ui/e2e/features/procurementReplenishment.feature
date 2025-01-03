Feature: Procurement Replenishment

  Scenario: Go to Replenishment page
    Given User logged in as an inventory admin
    When User visit the replenishment page
    Then User should go to the replenishment list page

  Scenario: Create a new Replenishment
    Given User logged in as an inventory admin
    And User visit the replenishment page
    When User click on the create new replenishment button
    Then User should see new row in the replenishment list

  Scenario: Create a new Replenishment with product
    Given User logged in as an inventory admin
    And User visit the replenishment page
    And User click on the create new replenishment button
    When User selects a product from the new row
    Then Product details should be displayed in the replenishment form

  Scenario: Validating the On Hand Quantity and Forecast Quantity
    Given User logged in as an inventory admin
    And User visit the replenishment page
    And User click on the create new replenishment button
    When User selects a product from the new row
    Then User should see the on hand quantity of the product
    And User should see the forecast quantity of the product
