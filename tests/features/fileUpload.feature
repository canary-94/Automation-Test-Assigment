Feature: File Upload

  Scenario: Verify a file can be uploaded
    Given I am on the "file upload" page
    When I upload a file named "sample.txt"
    Then I should see the uploaded file name "sample.txt"