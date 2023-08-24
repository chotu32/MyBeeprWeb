Feature: MyBeepr Web in home page, verify organisation list for user

  @user002
  Scenario Outline: In Mybeepr web, verifying organisation lists for user home page
    Given I navigate to "<url>"
    When I enter user "<userName>"
    And I enter pswd "<passoword>"
    And I click on show label
    And I click on Sign in button
    Then I verify the user credentials
    When I click on Select Organisation dropdown
    When I select Princeton-Plainsboro Testing Hospital organisation
    Then I verify admin rights
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