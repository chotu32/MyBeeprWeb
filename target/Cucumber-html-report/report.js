$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminLogin.feature");
formatter.feature({
  "line": 1,
  "name": "MyBeepr Web-Login for admin",
  "description": "",
  "id": "mybeepr-web-login-for-admin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify MyBeepr login functionality by using user credentials",
  "description": "",
  "id": "mybeepr-web-login-for-admin;verify-mybeepr-login-functionality-by-using-user-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@admin"
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
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close browser instance",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "mybeepr-web-login-for-admin;verify-mybeepr-login-functionality-by-using-user-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "userName",
        "passoword"
      ],
      "line": 13,
      "id": "mybeepr-web-login-for-admin;verify-mybeepr-login-functionality-by-using-user-credentials;;1"
    },
    {
      "cells": [
        "url",
        "validAdminName",
        "validAdminPassword"
      ],
      "line": 14,
      "id": "mybeepr-web-login-for-admin;verify-mybeepr-login-functionality-by-using-user-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24280300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify MyBeepr login functionality by using user credentials",
  "description": "",
  "id": "mybeepr-web-login-for-admin;verify-mybeepr-login-functionality-by-using-user-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@admin"
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
  "name": "I enter user \"validAdminName\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter pswd \"validAdminPassword\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
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
  "duration": 9572290700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validAdminName",
      "offset": 14
    }
  ],
  "location": "MyBeeprWebStepDef.i_enter_user(String)"
});
formatter.result({
  "duration": 2376681500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validAdminPassword",
      "offset": 14
    }
  ],
  "location": "MyBeeprWebStepDef.i_enter_pswd(String)"
});
formatter.result({
  "duration": 2180876000,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Sign_in_button()"
});
formatter.result({
  "duration": 2133151100,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_navigate_to_dashboard_page()"
});
formatter.result({
  "duration": 10175058700,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_close_browser_instance()"
});
formatter.result({
  "duration": 393434000,
  "status": "passed"
});
formatter.uri("UserLogin.feature");
formatter.feature({
  "line": 1,
  "name": "MyBeepr Web-Login for user",
  "description": "",
  "id": "mybeepr-web-login-for-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify MyBeepr login functionality by using admin credentials",
  "description": "",
  "id": "mybeepr-web-login-for-user;verify-mybeepr-login-functionality-by-using-admin-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@user"
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
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close browser instance",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "mybeepr-web-login-for-user;verify-mybeepr-login-functionality-by-using-admin-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "userName",
        "passoword"
      ],
      "line": 13,
      "id": "mybeepr-web-login-for-user;verify-mybeepr-login-functionality-by-using-admin-credentials;;1"
    },
    {
      "cells": [
        "url",
        "validUserName",
        "validUserPassword"
      ],
      "line": 14,
      "id": "mybeepr-web-login-for-user;verify-mybeepr-login-functionality-by-using-admin-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 297300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify MyBeepr login functionality by using admin credentials",
  "description": "",
  "id": "mybeepr-web-login-for-user;verify-mybeepr-login-functionality-by-using-admin-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@user"
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
  "name": "I click on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
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
  "duration": 9253299400,
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
  "duration": 2192299600,
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
  "duration": 2188983200,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Sign_in_button()"
});
formatter.result({
  "duration": 2136759700,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_navigate_to_dashboard_page()"
});
formatter.result({
  "duration": 10176552300,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_close_browser_instance()"
});
formatter.result({
  "duration": 187755200,
  "status": "passed"
});
});