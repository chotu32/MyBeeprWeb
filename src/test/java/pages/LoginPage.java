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
		//String searchItemData = userName.getAttribute("value");
	}
	
	// To enter password in password text field
	public void enterPassword(WebDriver driver, String pswd) {
		WebElement password = driver.findElement(PASSWORD);
		waitForExpectedElement(driver, PASSWORD);
		highlightWebElement(driver, password);
		password.sendKeys(pswd);
		//String searchItemData = userName.getAttribute("value");
	}
	
	// To click on SignIn Button
	public void clickSignInBtn(WebDriver driver) {
		WebElement signinBtn = driver.findElement(SIGN_IN_BTN);
		waitForExpectedElement(driver, SIGN_IN_BTN);
		highlightWebElement(driver, signinBtn);
		signinBtn.click();
	}
	
	// To close Current Browser Instance
	public void closeBrowserInstance(WebDriver driver) {
		driver.close();
	}
	
	
}
