package utilities;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.cucumber.listener.Reporter;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	private String frameworkDir = System.getProperty("user.dir");
	private String webDriverPath = frameworkDir + File.separator + "resources" + File.separator + "chromedriver.exe";

	// create instance for webdriver
	public WebDriver driver;
	
	@Parameters("browser")
	@Test
	public void test(String browser) {
		System.out.println("Browser: " + browser);
	}

	// to launch chrome browser
	public void launchBrowser(String url) {
		System.setProperty("webdriver.chrome.driver", webDriverPath);
		// WebDriverManager.chromedriver().setup();
		// create the new instance of Chrome drive
		driver = new ChromeDriver();
		// maximize the window
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		// launch chrome and direct it to the Base URL
		driver.get(url);
	}

	// Explicit wait method for element clickable
	public WebElement waitForExpectedElement(WebDriver driver, final By locator) {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
	}

	// To highlight web element upto 2 seconds
	public void highlightWebElement(WebDriver driver, WebElement element) {
		try {
			JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;
			jsExecutor.executeScript("arguments[0].style.border='2px solid red'", element);
			Thread.sleep(2000);
			jsExecutor.executeScript("arguments[0].style.border='2px solid white'", element);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
