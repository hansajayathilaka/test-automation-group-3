Feature: Get Books API

    Scenario: Get books with unauthorized user
        Given "Unauthorized" user loged in
        When Get books as "getAllRequest"
        Then "@getAllRequest" request return status 401
    
    Scenario: Get books with standard user
        Given "Standard" user loged in
        When Get books as "getAllRequest"
        Then "@getAllRequest" request return status 200
        And "@getAllRequest" request return a list of books

    Scenario: Get books with admin user
        Given "Admin" user loged in
        When Get books as "getAllRequest"
        Then "@getAllRequest" request return status 200
        And "@getAllRequest" request return a list of books
