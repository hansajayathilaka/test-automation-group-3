Feature: New Receipts Creation
  Scenario: Create new receipt when no receipts are available
    Given User logged in as an inventory admin
    And Create Product for receipt
    When User visits the Receipts create page
    And User creates a new receipt with valid data
    Then User should be able to see the receipt created successfully

  Scenario: Verify the Error Messages when Creating a New Receipt and no quantities are reserved
    Given User logged in as an inventory admin
    And Create Product for receipt
    When User visits the Receipts create page
    And User fills in the receipt details and attempts to save with zero quantity
    Then An error message should be displayed
