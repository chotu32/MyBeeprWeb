package utilities;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

public class Utilities {
	
	public ExtentTest test;
	public ExtentReports reports;
	// store current working directory path with "user.dir"
	public static String projectPath = System.getProperty("user.dir");
	public String reportFilePath;
	public String ipaPath;
	public String testDataFilePath = projectPath + "/TestData/";
	public Date date;
	static Date dte = new Date();
	static String dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss").format(dte);
	static String reportFileName = "Testing_" + dateFormat;
	public static String screenShotFilePath = projectPath + "/ScreenShots/";
	public String driverPath = projectPath + "/Drivers/";
	
	public ExtentTest reportsFile(String testCaseName) {
		reportFilePath = projectPath + "/Reports/MyBeeprWeb.html";
		// "false" parameter is for generate newly .html file
		reports = new ExtentReports(reportFilePath, false); // "true" parameter is for override on same .html file
		test = reports.startTest(testCaseName);
		return test;
	}
	
	// to end the report
	public void endReport() {
		reports.endTest(test);
		//flush() - to write or update test information to your report.
		reports.flush();
	}

	// Capture Screen Shot and save in the location
	public static String captureScreenshot(WebDriver driver, String screenshotname) {
		try {
			// Set the Current Date and Time
			DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH-mm-ss");
			Date dt = new Date();
			System.out.println(dateFormat.format(dt));
			TakesScreenshot ts = (TakesScreenshot) driver;
			File source = ts.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source,
					new File(projectPath + "/ScreenShots/" + dateFormat.format(dt) + "_" + screenshotname + ".png"));
			System.out.println("screenshot has taken");
		} catch (Exception e) {
			System.out.println("exception while taking screenshot" + e.getMessage());
		}
		return screenshotname;
	}
}