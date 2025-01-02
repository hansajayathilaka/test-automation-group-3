@setup-database
Feature: Create Database

  Scenario: Create a database if not exists
    Given User navigates to the database management page
    When Create a database if it does not exist
    Then Database should exist
