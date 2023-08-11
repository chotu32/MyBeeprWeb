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
  "name": "Verify login functionality of MyBeepr",
  "description": "",
  "id": "mybeepr-web-login-for-admin;verify-login-functionality-of-mybeepr",
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
  "id": "mybeepr-web-login-for-admin;verify-login-functionality-of-mybeepr;",
  "rows": [
    {
      "cells": [
        "url",
        "userName",
        "passoword"
      ],
      "line": 13,
      "id": "mybeepr-web-login-for-admin;verify-login-functionality-of-mybeepr;;1"
    },
    {
      "cells": [
        "url",
        "validAdminName",
        "validPassword"
      ],
      "line": 14,
      "id": "mybeepr-web-login-for-admin;verify-login-functionality-of-mybeepr;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25650400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify login functionality of MyBeepr",
  "description": "",
  "id": "mybeepr-web-login-for-admin;verify-login-functionality-of-mybeepr;;2",
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
  "name": "I enter pswd \"validPassword\"",
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
  "duration": 28498149400,
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
  "duration": 2174043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validPassword",
      "offset": 14
    }
  ],
  "location": "MyBeeprWebStepDef.i_enter_pswd(String)"
});
formatter.result({
  "duration": 2137839200,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Sign_in_button()"
});
formatter.result({
  "duration": 3179403300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton _ngcontent-asc-c161\u003d\"\" type\u003d\"submit\" class\u003d\"btn btn-outline-secondary mybeepr-btn-default-login\" disabled\u003d\"\" style\u003d\"border: 2px solid white;\"\u003e...\u003c/button\u003e is not clickable at point (165, 367). Other element would receive the click: \u003cdiv _ngcontent-asc-c161\u003d\"\" class\u003d\"col-md-12\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d115.0.5790.171)\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027LAPTOP-60BNE173\u0027, ip: \u0027192.168.55.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d115.0.5790.170 (cc0d30c2ca5577520c8646671513241faa0bc105-refs/branch-heads/5790@{#1923}), userDataDir\u003dC:\\Users\\lenovo\\AppData\\Local\\Temp\\scoped_dir13300_409151955}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), webauthn:extension:minPinLength\u003dtrue, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61087}, webauthn:extension:credBlob\u003dtrue, webauthn:extension:prf\u003dtrue, acceptInsecureCerts\u003dfalse, browserVersion\u003d115.0.5790.171, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: a4b95003b130d1b248cf7d502cf6c896\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pages.LoginPage.clickSignInBtn(LoginPage.java:50)\r\n\tat stepdef.MyBeeprWebStepDef.i_click_on_Sign_in_button(MyBeeprWebStepDef.java:66)\r\n\tat ✽.And I click on Sign in button(AdminLogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_navigate_to_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_close_browser_instance()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Verify login functionality of MyBeepr",
  "description": "",
  "id": "mybeepr-web-login-for-user;verify-login-functionality-of-mybeepr",
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
  "id": "mybeepr-web-login-for-user;verify-login-functionality-of-mybeepr;",
  "rows": [
    {
      "cells": [
        "url",
        "userName",
        "passoword"
      ],
      "line": 13,
      "id": "mybeepr-web-login-for-user;verify-login-functionality-of-mybeepr;;1"
    },
    {
      "cells": [
        "url",
        "validUserName",
        "validPassword"
      ],
      "line": 14,
      "id": "mybeepr-web-login-for-user;verify-login-functionality-of-mybeepr;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 341800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify login functionality of MyBeepr",
  "description": "",
  "id": "mybeepr-web-login-for-user;verify-login-functionality-of-mybeepr;;2",
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
  "name": "I enter pswd \"validPassword\"",
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
  "duration": 12987134800,
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
  "duration": 2166124400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validPassword",
      "offset": 14
    }
  ],
  "location": "MyBeeprWebStepDef.i_enter_pswd(String)"
});
formatter.result({
  "duration": 2143388100,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_click_on_Sign_in_button()"
});
formatter.result({
  "duration": 2118799400,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_navigate_to_dashboard_page()"
});
formatter.result({
  "duration": 10175308700,
  "status": "passed"
});
formatter.match({
  "location": "MyBeeprWebStepDef.i_close_browser_instance()"
});
formatter.result({
  "duration": 219954700,
  "status": "passed"
});
});