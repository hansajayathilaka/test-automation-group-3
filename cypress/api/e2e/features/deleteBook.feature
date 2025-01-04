Feature: Delete Book API

    Scenario: Delete book with unauthorized user
        Given "Admin" user loged in
        And Create a book with title "Random Title 4" and author "Random Author 4" as "createRequest"
        And "Unauthorized" user loged in
        When "@createRequest" Delete book as "deleteRequest"
        Then "@deleteRequest" request return status 403
        Given "Admin" user loged in
        When "@createRequest" Get book as "getRequest"
        Then "@getRequest" request return status 200

    Scenario: Delete book with standard user
        Given "Admin" user loged in
        And Create a book with title "Random Title 5" and author "Random Author 5" as "createRequest"
        And "Standard" user loged in
        When "@createRequest" Delete book as "deleteRequest"
        Then "@deleteRequest" request return status 200
        Given "Admin" user loged in
        When "@createRequest" Get book as "getRequest"
        Then "@getRequest" request return status 404

    Scenario: Delete book with admin user
        Given "Admin" user loged in
        And Create a book with title "Random Title 6" and author "Random Author 6" as "createRequest"
        And "Admin" user loged in
        When "@createRequest" Delete book as "deleteRequest"
        Then "@deleteRequest" request return status 403
        Given "Admin" user loged in
        When "@createRequest" Get book as "getRequest"
        Then "@getRequest" request return status 200
