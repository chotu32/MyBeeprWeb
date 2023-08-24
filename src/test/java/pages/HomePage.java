package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import utilities.BaseClass;

public class HomePage extends BaseClass {
	
	WebDriver driver;

	// Intializing constructor
	public HomePage(WebDriver driver) {
		this.driver = driver;
	}
	
	public static final By HOME_PGE_VERIFY_TEXT = By.xpath("//div[normalize-space(text())='Select an organisation to begin chatting.']");
	public static final By USER_PROFILE = By.xpath("//span[@class='account-name']");
	public static final By SIGN_OUT_BTN = By.xpath("//button[@class='dropdown-item sign-out']");
	public static final By CANCEL_BTN = By.xpath("(//div[@class='col text-center'])[2]");
	public static final By CURRENT_ORG_BTN = By.xpath("(//div[@class='col text-center'])[1]");
	public static final By SELECT_ORG_DROPDOWN = By.id("orgSelectButton");
	public static final By PRINCE_PLNSBORO_TESTNG_HSPTL = By.xpath("(//button[@class='dropdown-item'])[2]");
	public static final By PROFILE_TAG = By.xpath("//small[@class='access-type']");
	public static final By ADMIN_ICON_LABEL = By.xpath("(//div[@class='menu-icon']/following::span)[3]");
	
	
	public String homePageVerificationText(WebDriver driver) {
		WebElement homePageVerifyText = driver.findElement(HOME_PGE_VERIFY_TEXT);
		waitForExpectedElement(driver, HOME_PGE_VERIFY_TEXT);
		highlightWebElement(driver, homePageVerifyText);
		String homePageValidationText = homePageVerifyText.getText();
		System.out.println("Home Page text = " + homePageValidationText);
		return homePageValidationText;
	}
	
	
	public void clickOnSelectOrganisationBtn(WebDriver driver) {
		WebElement selectOrganisationDropdownBtn = driver.findElement(SELECT_ORG_DROPDOWN);
		waitForExpectedElement(driver, SELECT_ORG_DROPDOWN);
		highlightWebElement(driver, selectOrganisationDropdownBtn);
		selectOrganisationDropdownBtn.click();
	}
	
	public void clickOnPrincetonPlainsborTestingHospital(WebDriver driver) {
		WebElement selectPrincePlnsborTestngHsptl = driver.findElement(PRINCE_PLNSBORO_TESTNG_HSPTL);
		waitForExpectedElement(driver, PRINCE_PLNSBORO_TESTNG_HSPTL);
		highlightWebElement(driver, selectPrincePlnsborTestngHsptl);
		selectPrincePlnsborTestngHsptl.click();
	}
	
	public Boolean verifyAdminRights(WebDriver driver, String adminRights) {
		boolean flag = false;
		WebElement userProfileTag = driver.findElement(PROFILE_TAG);
		waitForExpectedElement(driver, PROFILE_TAG);
		highlightWebElement(driver, userProfileTag);
		String userProfileTagText = userProfileTag.getText();
		System.out.println("User profile tag  = " + userProfileTagText);
		if(userProfileTagText.contains(adminRights)) {
			WebElement adminIconLabel = driver.findElement(ADMIN_ICON_LABEL);
			waitForExpectedElement(driver, PROFILE_TAG);
			highlightWebElement(driver, adminIconLabel);
			String adminIconLabelTex = adminIconLabel.getText();
			if(adminIconLabelTex.contains(adminRights))
				flag = true;
		}
		
		driver.navigate().back();
		driver.navigate().back();
			
		return flag;
	}
	
	public void clickOnUserProfile(WebDriver driver) throws InterruptedException {
		WebElement userProfile = driver.findElement(USER_PROFILE);
		waitForExpectedElement(driver, USER_PROFILE);
		highlightWebElement(driver, userProfile);
		Thread.sleep(2000);
		userProfile.click();
	}
	
	public void clickOnSignOutBtn(WebDriver driver) {
		WebElement signOutBtn = driver.findElement(SIGN_OUT_BTN);
		waitForExpectedElement(driver, SIGN_OUT_BTN);
		highlightWebElement(driver, signOutBtn);
		signOutBtn.click();
	}
	
	public void clickOnCancelBtn(WebDriver driver) {
		WebElement cancelBtn = driver.findElement(CANCEL_BTN);
		waitForExpectedElement(driver, CANCEL_BTN);
		highlightWebElement(driver, cancelBtn);
		cancelBtn.click();
	}
	
	public void clickOnCurrentOrgBtn(WebDriver driver) {
		WebElement currentOrgBtn = driver.findElement(CURRENT_ORG_BTN);
		waitForExpectedElement(driver, CURRENT_ORG_BTN);
		highlightWebElement(driver, currentOrgBtn);
		currentOrgBtn.click();
	}

}
