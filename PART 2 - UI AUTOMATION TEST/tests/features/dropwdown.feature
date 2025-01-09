Feature: Dropdown

  Scenario: Verify dropdown options can be selected
    Given I am on the "dropdown" page
    When I select "Option 1" from the dropdown
    Then "Option 1" should be selected
    When I select "Option 2" from the dropdown
    Then "Option 2" should be selected