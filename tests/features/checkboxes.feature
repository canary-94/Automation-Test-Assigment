Feature: Test2 Checkboxes

    Scenario: Verify user can check and uncheck checkboxes
        Given I am on the "checkboxes" page
        When I toggle the first checkbox
        Then the first checkbox should be checked
        When I uncheck the second checkbox
        Then the second checkbox should not be checked