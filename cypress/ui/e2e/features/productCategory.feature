Feature: Product Categories

  Scenario: Go to product category page
    Given User logged in as an inventory admin
    When I visit the product category page
    Then I should go to the product category list page
