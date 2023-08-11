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
			tags = {"@user"},
			glue={"stepdef"}, 
			monochrome=true, 
			plugin = { "pretty", "html:target/Cucumber-html-report", "usage:target/cucumber-usage.json", "junit:target/" + "Testing.xml" }
		)
public class TestRunner{

	
	
	
}
