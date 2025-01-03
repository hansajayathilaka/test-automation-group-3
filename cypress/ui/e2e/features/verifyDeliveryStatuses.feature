Feature: Verify delivery statuses when no stocks

  Scenario: Verify delivery status when no stocks
    Given User logged in as an inventory admin
    When User navigates to the new delieveries page
    And User creates a new delievery
    Then User should be able to see the delievery created successfully
    When User makes delivery as to do
    Then Status change to Waiting and Product Availability to Not Available
