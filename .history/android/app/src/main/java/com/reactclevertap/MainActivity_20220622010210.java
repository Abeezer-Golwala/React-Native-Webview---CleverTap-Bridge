package com.reactclevertap;
import com.clevertap.react.CleverTapModule;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
  @Override
	protected void onCreate() {
    	super.onCreate();
    	CleverTapModule.setInitialUri(getIntent().getData());
	}
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactCleverTap";
  }
}
