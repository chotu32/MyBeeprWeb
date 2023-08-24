package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import utilities.BaseClass;

public class LoginPage extends BaseClass {

	WebDriver driver;

	// Intializing constructor
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	public static final By USER_NAME = By.id("email");
	public static final By PASSWORD = By.id("password");
	public static final By SIGN_IN_BTN = By.xpath("//button[@type='submit']");
	public static final By SHOW_LABEL = By.xpath("//div[@class='showHidePass']");
	public static final By INVALID_CRED_STATEMENT = By.xpath("//h5[@class='modal-header-title']");
	public static final By OK_BTN_OF_INCRT_PSWD_POPUP = By.xpath("//button[@class='mb-btn-admin mb-btn-red']");
	public static final By LOGIN_PGE_SIGN_IN_LABLE = By.xpath("//div[normalize-space(text())='Sign into myBeepr']");

	// To get home page title
	public String getHomePageTitle(WebDriver driver) {
		return driver.getTitle();
	}

	// To enter user name in user name text field
	public void enterName(WebDriver driver, String email) {
		WebElement name = driver.findElement(USER_NAME);
		waitForExpectedElement(driver, USER_NAME); // this method called from base class
		highlightWebElement(driver, name); // this method called from base class
		name.sendKeys(email);
		// String searchItemData = userName.getAttribute("value");
	}

	// To enter password in password text field
	public void enterPassword(WebDriver driver, String pswd) {
		WebElement password = driver.findElement(PASSWORD);
		waitForExpectedElement(driver, PASSWORD);
		highlightWebElement(driver, password);
		password.sendKeys(pswd);
		// String searchItemData = userName.getAttribute("value");
	}

	// To click on SHOW label
	public void clickOnShowLabel(WebDriver driver) {
		WebElement showLabel = driver.findElement(SHOW_LABEL);
		waitForExpectedElement(driver, SHOW_LABEL);
		highlightWebElement(driver, showLabel);
		showLabel.click();
	}

	// To click on SignIn Button
	public void clickSignInBtn(WebDriver driver) {
		WebElement signinBtn = driver.findElement(SIGN_IN_BTN);
		waitForExpectedElement(driver, SIGN_IN_BTN);
		highlightWebElement(driver, signinBtn);
		signinBtn.click();
	}

	public String getPopupInfoForInvalidUserCredentials(WebDriver driver) {
		WebElement invalidStmt = driver.findElement(INVALID_CRED_STATEMENT);
		waitForExpectedElement(driver, INVALID_CRED_STATEMENT);
		highlightWebElement(driver, invalidStmt);
		String popupStatement = invalidStmt.getText();
		System.out.println("popup statement = " + popupStatement);
		return popupStatement;
	}

	public void clickOnOkbtnForIncorrPaswPopup(WebDriver driver) {
		WebElement okBtnOFIncrtPswd = driver.findElement(OK_BTN_OF_INCRT_PSWD_POPUP);
		waitForExpectedElement(driver, OK_BTN_OF_INCRT_PSWD_POPUP);
		highlightWebElement(driver, okBtnOFIncrtPswd);
		okBtnOFIncrtPswd.click();
	}
	
	public String getLoginPgeSignInLabeText(WebDriver driver) {
		WebElement loginPageSignInLable = driver.findElement(LOGIN_PGE_SIGN_IN_LABLE);
		waitForExpectedElement(driver, LOGIN_PGE_SIGN_IN_LABLE);
		highlightWebElement(driver, loginPageSignInLable);
		String loginPageSignInLableText = loginPageSignInLable.getText();
		System.out.println("popup statement = " + loginPageSignInLableText);
		return loginPageSignInLableText;
	}

	// To close Current Browser Instance
	public void closeBrowserInstance(WebDriver driver) {
		driver.close();
	}

}
