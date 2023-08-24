package runner;


import org.junit.runner.RunWith;
import org.testng.annotations.BeforeTest;
// import org.junit.runner.RunWith;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import cucumber.api.testng.AbstractTestNGCucumberTests;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)
@CucumberOptions(
			features = "./Features", 
			//tags = {"@001, @002, @003"},
			// tags = {"@admin, @user"},
			//tags = {"@user002"},
			tags = {"@user001"},
			glue = {"stepdef"}, 
			// monochrome = true, // display the console output in much readable way
			// dryRun = true, // checks if all the steps have the step definition
			// strict = true, // will fail execution if there are undefined or pending steps
			plugin = { "pretty", 
					"html:test-output", 
					"html:target/Cucumber-html-report", 
					"usage:target/cucumber-usage.json",
					"junit:target/" + "Testing.xml",
					"com.avenstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
					}
		)
public class TestRunner{

	
	
	
}
