Feature: Update Book API

    Scenario: Update book with unauthorized user
        Given "Admin" user loged in
        And Create a book with title "Random Title 10" and author "Random Author 10" as "createRequest"
        And "Unauthorized" user loged in
        When "@createRequest" Update book with title "Random Title 10 Updated" and author "Random Author 10 Updated" as "updateRequest"
        # FIXME: Actual status 200
        Then "@updateRequest" request return status 403
        Given "Admin" user loged in
        When "@createRequest" Get book as "getRequest"
        # FIXME: Actual title "Random Title 10 Updated"
        # FIXME: Actual author "Random Author 10 Updated"
        Then "@getRequest" request return title "Random Title 10" and author "Random Author 10"

    Scenario: Update book with standard user
        Given "Admin" user loged in
        And Create a book with title "Random Title 11" and author "Random Author 11" as "createRequest"
        And "Standard" user loged in
        When "@createRequest" Update book with title "Random Title 11 Updated" and author "Random Author 11 Updated" as "updateRequest"
        # FIXME: Actual status 403
        Then "@updateRequest" request return status 200
        Given "Admin" user loged in
        When "@createRequest" Get book as "getRequest"
        Then "@getRequest" request return title "Random Title 11" and author "Random Author 11"

    Scenario: Update book with admin user
        Given "Admin" user loged in
        And Create a book with title "Random Title 12" and author "Random Author 12" as "createRequest"
        When "@createRequest" Update book with title "Random Title 12 Updated" and author "Random Author 12 Updated" as "updateRequest"
        Then "@updateRequest" request return status 200
        And "@createRequest" Get book as "getRequest"
        Then "@getRequest" request return title "Random Title 12 Updated" and author "Random Author 12 Updated"
