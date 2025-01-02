Feature: Get Books API

    Scenario: Get all books without any authentication
        When User sends a get books request
        Then Unauthorized user receives an unautthorized response

    Scenario: Get all books with user authentication
        Given User is logged in as user
        When User sends a get books request
        Then User receives a list of books
    
    Scenario: Get all books with admin authentication
        Given User is logged in as admin
        When User sends a get books request
        Then User receives a list of books
