Feature: Verify the New Receipt Creation when there are no Receipts Created

  Scenario: Create a new receipt when no receipts are available
    Given User logged in as an inventory admin
    When No Receipts are available
    Then User should be able to create a new receipt

   
