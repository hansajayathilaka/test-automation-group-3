Feature: Get Book API

    Scenario: Get book with unauthorized user
        Given "Admin" user loged in
        And Create a book with title "Random Title 7" and author "Random Author 7" as "createRequest"
        And "Unauthorized" user loged in
        When "@createRequest" Get book as "getRequest"
        Then "@getRequest" request return status 200

    Scenario: Get book with standard user
        Given "Standard" user loged in
        And Create a book with title "Random Title 8" and author "Random Author 8" as "createRequest"
        And "Standard" user loged in
        When "@createRequest" Get book as "getRequest"
        # FIXME: This should return status 200
        Then "@getRequest" request return status 403

    Scenario: Get book with admin user
        Given "Admin" user loged in
        And Create a book with title "Random Title 9" and author "Random Author 9" as "createRequest"
        And "Admin" user loged in
        When "@createRequest" Get book as "getRequest"
        Then "@getRequest" request return status 200
        And "@getRequest" request return title "Random Title 9" and author "Random Author 9"
