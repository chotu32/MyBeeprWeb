$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserLoginAndLogout.feature");
formatter.feature({
  "line": 1,
  "name": "MyBeepr Web Login and Logout for user",
  "description": "",
  "id": "mybeepr-web-login-and-logout-for-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify MyBeepr login and logout functionality by using user credentials",
  "description": "",
  "id": "mybeepr-web-login-and-logout-for-user;verify-mybeepr-login-and-logout-functionality-by-using-user-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@user001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter user \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter pswd \"\u003cpassoword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on show label",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the user credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on user profile",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on user profile",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Current Organisation button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close browser instance",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "mybeepr-web-login-and-logout-for-user;verify-mybeepr-login-and-logout-functionality-by-using-user-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "userName",
        "passoword"
      ],
      "line": 21,
      "id": "mybeepr-web-login-and-logout-for-user;verify-mybeepr-login-and-logout-functionality-by-using-user-credentials;;1"
    },
    {
      "cells": [
        "url",
        "validUserName",
        "validUserPassword"
      ],
      "line": 22,
      "id": "mybeepr-web-login-and-logout-for-user;verify-mybeepr-login-and-logout-functionality-by-using-user-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31840800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify MyBeepr login and logout functionality by using user credentials",
  "description": "",
  "id": "mybeepr-web-login-and-logout-for-user;verify-mybeepr-login-and-logout-functionality-by-using-user-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@user001"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"url\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter user \"validUserName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter pswd \"validUserPassword\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on show label",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the user credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on user profile",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Cancel button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on user profile",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Sign Out button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Current Organisation button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I close browser instance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 15
    }
  ],
  "location": "MyBeeprWebStepDef.i_navigate_to(String)"
});
formatter.result({
  "duration": 17408965200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validUserName",
      "offset": 14
    }
  ],
  "location": "MyBeeprWebStepDef.i_enter_user(String)"
});
formatter.result({
  "duration": 3761342400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validUserPassword",
      "offset": 14
    }
  ],
  "location": "MyBeeprWebStepDef.i_enter_pswd(String)"
});
formatter.result({
  "duration": 2866264600,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_show_label()"
});
formatter.result({
  "duration": 2629994500,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Sign_in_button()"
});
formatter.result({
  "duration": 3034494200,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_verify_the_user_credentials()"
});
formatter.result({
  "duration": 34898975100,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_user_profile()"
});
formatter.result({
  "duration": 4568018300,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Sign_Out_button()"
});
formatter.result({
  "duration": 2569342900,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Cancel_button()"
});
formatter.result({
  "duration": 2678126600,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_verify_the_current_page()"
});
formatter.result({
  "duration": 2360438900,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_user_profile()"
});
formatter.result({
  "duration": 4570705700,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Sign_Out_button()"
});
formatter.result({
  "duration": 2631235000,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Current_Organisation_button()"
});
formatter.result({
  "duration": 6813482300,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_close_browser_instance()"
});
formatter.result({
  "duration": 468213100,
  "status": "passed"
});
});