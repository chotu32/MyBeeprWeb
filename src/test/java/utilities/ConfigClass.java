package utilities;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class ConfigClass {
	public File src;
	public FileInputStream fis;
	public static Properties prop;

	// Method for get the config property file
	public void loadPropertyFile() throws Exception {
		String filepath = System.getProperty("user.dir") + "/config/config.properties";
		src = new File(filepath);
		fis = new FileInputStream(src);
		prop = new Properties();
		prop.load(fis);
	}

	// Method for Getting the values from config property file
	public String getProperty(String propKey) {
		return prop.getProperty(propKey);
	}
	
	// Method for Getting the values from config property file
	//	public void setProperty(String propKey, String propValue) {
	//		prop.setProperty(propKey, propValue);
	//	}
}
