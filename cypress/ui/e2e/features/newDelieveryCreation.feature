Feature: Create a new delievery

  Scenario: Verify the new delivery creation
    Given User logged in as an inventory admin
    When User navigates to the new delieveries page 
    And User creates a new delievery
    Then User should be able to see the delievery created successfully
