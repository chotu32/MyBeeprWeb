Feature: MyBeepr Web-Login for user

  @user
  Scenario Outline: Verify MyBeepr login functionality by using user credentials
    Given I navigate to "<url>"
    When I enter user "<userName>"
    And I enter pswd "<passoword>"
    And I click on show label
    And I click on Sign in button
    Then I verify the user credentials
    Then I close browser instance

    Examples: 
      | url | userName        | passoword           |
      | url | validUserName   | invalidUserPassword |
      | url | invalidUserName | validUserPassword   |
      | url | invalidUserName | invalidUserPassword |
      | url | validUserName   | validUserPassword   |
