Feature: Install Inventory App

  Scenario: Install Inventory App If Not Installed
    Given User logged in as a super admin
    When User navigates to the App Store
    When User installs the Inventory App
    Then User should see the Inventory App installed