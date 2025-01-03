@product-category
Feature: Product Categories

  Scenario: Go to product category page
    Given User logged in as an inventory admin
    When User visit the product category page
    Then User should go to the product category list page

  Scenario: Create new product category
    Given User logged in as an inventory admin
    When User create a new product category with name "Test Product Category for Create"
    Then User should see the new product category with name "Test Product Category for Create" in the list

  Scenario: Delete product category
    Given User logged in as an inventory admin
    Given User create a new product category with name "Test Product Category for Delete"
    When User delete the product category with name "Test Product Category for Delete"
    Then User should not see the product category with name "Test Product Category for Delete" in the list

  Scenario: Update product category
    Given User logged in as an inventory admin
    Given User create a new product category with name "Test Product Category for Update"
    When User update the product category with name "Test Product Category for Update" to "Test Product Category for Update Updated"
    Then User should see the new product category with name "Test Product Category for Update Updated" in the list
