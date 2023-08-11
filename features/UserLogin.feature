Feature: MyBeepr Web-Login for user

  @user
  Scenario Outline: Verify MyBeepr login functionality by using admin credentials
    Given I navigate to "<url>"
    When I enter user "<userName>"
    And I enter pswd "<passoword>"
    And I click on Sign in button
    Then I navigate to dashboard page
    Then I close browser instance

    Examples: 
      | url | userName      | passoword         |
      | url | validUserName | validUserPassword |
