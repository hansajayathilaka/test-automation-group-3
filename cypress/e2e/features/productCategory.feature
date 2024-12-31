Feature: Product Categories

  Scenario: Go to product category page
    Given I am logged in
    When I visit the product category page
    Then I should go to the product category list page
