Feature: Create Book API

    Scenario: Create book with unauthorized user
        Given "Unauthorized" user loged in
        When Create a book with title "Random Title 1" and author "Random Author 1" as "getRequest"
        Then "@getRequest" request return status 401

    Scenario: Create book with standard user
        Given "Standard" user loged in
        When Create a book with title "Random Title 2" and author "Random Author 2" as "createRequest"
        Then "@createRequest" request return status 201
        And "@createRequest" request return title "Random Title 2" and author "Random Author 2"
