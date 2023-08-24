package stepdef;

// import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;
import org.testng.Assert;
import org.testng.annotations.Test;
// import org.testng.Assert;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.HomePage;
import pages.LoginPage;
import utilities.BaseClass;
import utilities.ConfigClass;
import utilities.Utilities;

public class MyBeeprWebStepDef extends BaseClass {

	// Create Instance of Utilities Class
	Utilities utilities = new Utilities();
	// store current working directory path
	public static String pth = System.getProperty("user.dir");
	// Create Reports Folder In Current Working Directory Path
	public static String reportFilePath = pth + "/Reports/";
	// Create Instance for ExtentReports Class
	public ExtentReports reports;
	// create variable for extent test
	ExtentTest test;

	ConfigClass config = new ConfigClass();
	Utilities objUtil = new Utilities();
	LoginPage objLP = new LoginPage(driver);
	HomePage objHP = new HomePage(driver);
	Scenario scenario;
	SoftAssert sa = new SoftAssert();

	@Before
	public void start(Scenario scenario) throws Exception {
		this.scenario = scenario;
		config.loadPropertyFile();
	}

	@Given("^I navigate to \"([^\"]*)\"$")
	public void i_navigate_to(String url) throws Throwable {
		
//		try {
//			sa.assertEquals("one", "two");
//			System.out.println("After AssertEqual");
//			sa.assertAll();
//			System.out.println("Comment After AssertAll");
//
//		} catch (Throwable t) {
//			// code to report the error in testng
//			System.out.println("Response Details Message Not Matching");
//			// report the error in xls file
//		}
//		
//		// sa.assertEquals("one", "two");
//		// System.out.println("After AssertEqual");
//		// sa.assertAll();
//		// System.out.println("Comment After AssertAll");
//		System.out.println("after try and catch block");
//		System.exit(0);

		
		launchBrowser(config.getProperty(url));
		Thread.sleep(3000);
		utilities.captureScreenshot(driver, "UrlNavigation");
	}

	@When("^I enter user \"([^\"]*)\"$")
	public void i_enter_user(String userName) throws Throwable {
		System.out.println("User Name: " + userName);
		if (userName.contains("validUser"))
			test = utilities.reportsFile("Verify Mybeepr-web user functionality");
		else {
			test = utilities.reportsFile("Verify Mybeepr-web admin functionality");
		}
		objLP.enterName(driver, config.getProperty(userName));
		test.log(LogStatus.INFO, "Entered name: " + config.getProperty(userName));
		System.out.println("User Name: " + config.getProperty(userName));
	}

	@When("^I enter pswd \"([^\"]*)\"$")
	public void i_enter_pswd(String password) throws Throwable {
		System.out.println("User Password: " + password);
		objLP.enterPassword(driver, config.getProperty(password));
		test.log(LogStatus.INFO, "Entered password: " + config.getProperty(password));
		System.out.println("User Password: " + config.getProperty(password));
	}

	@When("^I click on show label$")
	public void i_click_on_show_label() throws Throwable {
		objLP.clickOnShowLabel(driver);
		test.log(LogStatus.INFO, "Clicked on SHOW label");
	}

	@When("^I click on Sign in button$")
	public void i_click_on_Sign_in_button() throws Throwable {
		objLP.clickSignInBtn(driver);
		test.log(LogStatus.INFO, "Clicked on SignInButton");
	}

	@Then("^I verify the user credentials$")
	public void i_verify_the_user_credentials() throws Throwable {
		try {
			String popupStatement = objLP.getPopupInfoForInvalidUserCredentials(driver);
			test.log(LogStatus.INFO, "Popup Statement in Login Page : " + popupStatement);
			objLP.clickOnOkbtnForIncorrPaswPopup(driver);
			if (popupStatement.contains(config.getProperty("verifyInvalidCredentials").toString())) {
				test.log(LogStatus.FAIL, "Entered invalid credentials & User is in Login_Page");
			}
			
		} catch (Exception e) {

		}

		try {
			String homePageValidationText = objHP.homePageVerificationText(driver);
			test.log(LogStatus.INFO, "Home Page label text: " + homePageValidationText);
			if (homePageValidationText.contains(config.getProperty("homePageText").toString())) {
				test.log(LogStatus.PASS, "Entered valid credentials & User is in Home Page");
			}
		} catch (Exception e) {

		}
	}

	@When("^I click on Select Organisation dropdown$")
	public void i_click_on_Select_Organisation_dropdown() throws Throwable {
		try {
			objHP.clickOnSelectOrganisationBtn(driver);
			test.log(LogStatus.INFO, "Clicked on Select Organisation dropdown button");
		} catch (Exception e) {
			test.log(LogStatus.ERROR, "Unable to click on Select Organisation dropdown button");
			utilities.endReport();
			System.exit(0);
		}
	}

	@When("^I select Princeton-Plainsboro Testing Hospital organisation$")
	public void i_select_princeton_plainsboro_Testing_hospital_organisation() throws Throwable {
		try {
			objHP.clickOnPrincetonPlainsborTestingHospital(driver);
			test.log(LogStatus.INFO, "Clicked on Priceton Plainsbor Testing Hospital");
		} catch (Exception e) {
			test.log(LogStatus.ERROR, "Unable to click on Priceton Plainsbor Testing Hospital");
			utilities.endReport();
			System.exit(0);
		}
	}

	@Then("^I verify admin rights$")
	public void i_verify_admin_rights() throws Throwable {
		boolean flag = objHP.verifyAdminRights(driver, config.getProperty("adminRights").toString());
		if (flag)
			test.log(LogStatus.PASS, "User having admin rights");
		else {
			test.log(LogStatus.PASS, "User don't have admin rights");
		}
	}

	@When("^I click on user profile$")
	public void i_click_on_user_profile() throws Throwable {
		try {
			objHP.clickOnUserProfile(driver);
			test.log(LogStatus.INFO, "Clicked on User Profile");
		} catch (Exception e) {
			test.log(LogStatus.ERROR, "Unable to click on User Profile");
			utilities.endReport();
			System.exit(0);
		}
	}

	@When("^I click on Sign Out button$")
	public void i_click_on_Sign_Out_button() throws Throwable {
		try {
			objHP.clickOnSignOutBtn(driver);
			test.log(LogStatus.INFO, "Clicked on Sign Out button");
		} catch (Exception e) {
			test.log(LogStatus.ERROR, "Unable to click on Sign Out button");
			utilities.endReport();
			System.exit(0);
		}
	}

	@When("^I click on Cancel button$")
	public void i_click_on_Cancel_button() throws Throwable {
		try {
			objHP.clickOnCancelBtn(driver);
			test.log(LogStatus.INFO, "Clicked on Cancel button");
		} catch (Exception e) {
			test.log(LogStatus.ERROR, "Unable to click on Cancel button");
			utilities.endReport();
			System.exit(0);
		}
	}

	@Then("^I verify the current page$")
	public void i_verify_the_current_page() throws Throwable {
		try {
			String homePageValidationText = objHP.homePageVerificationText(driver);
			test.log(LogStatus.INFO, "Home Page label text: " + homePageValidationText);
			if (homePageValidationText.contains(config.getProperty("homePageText").toString())) {
				test.log(LogStatus.PASS, "User is in Home Page");
			}
		} catch (Exception e) {
			test.log(LogStatus.ERROR, "Home Page validation failed due to : " + e);
			utilities.endReport();
			System.exit(0);
		}
	}

	@When("^I click on Current Organisation button$")
	public void i_click_on_Current_Organisation_button() throws Throwable {
		try {
			objHP.clickOnCurrentOrgBtn(driver);
			String loginPageLabelTextString = objLP.getLoginPgeSignInLabeText(driver);
			if (loginPageLabelTextString.contains(config.getProperty("loginPageSignInLabelText").toString()))
				test.log(LogStatus.PASS, "Clicked on Current Orgnisation button");
		} catch (Exception e) {
			test.log(LogStatus.ERROR, "Home Page validation failed due to : " + e);
			utilities.endReport();
			System.exit(0);
		}

	}

	@Then("^I close browser instance$")
	public void i_close_browser_instance() throws Throwable {
		objLP.closeBrowserInstance(driver);
		test.log(LogStatus.INFO, "Current browser closed");
		utilities.endReport();
	}

}
