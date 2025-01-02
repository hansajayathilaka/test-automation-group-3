Feature: Verify the New Receipt Creation when there are no Receipts Created

  Scenario: Create new receipt when no receipts are available
    Given User logged in as an inventory admin
    When User visits the Receipts create page
    And User creates a new receipt with valid data
    Then User should be able to see the receipt created successfully
