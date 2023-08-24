Feature: MyBeepr Web Login and Logout for user

  @user001
  Scenario Outline: Verify MyBeepr login and logout functionality by using user credentials
    Given I navigate to "<url>"
    When I enter user "<userName>"
    And I enter pswd "<passoword>"
    And I click on show label
    And I click on Sign in button
    Then I verify the user credentials
    When I click on user profile
    And I click on Sign Out button
    And I click on Cancel button
    Then I verify the current page
    When I click on user profile
    And I click on Sign Out button
    And I click on Current Organisation button
    Then I close browser instance

    Examples: 
      | url | userName        | passoword           |
      | url | validUserName   | validUserPassword   |
