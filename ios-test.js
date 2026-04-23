const wdio = require('webdriverio');

(async () => {
  try {
    console.log('🚀 Starting test...');

    const driver = await wdio.remote({
      hostname: '127.0.0.1',
      port: 4723,
      path: '/',
      logLevel: 'info',
      capabilities: {
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        "appium:showXcodeLog": true,
"appium:printPageSourceOnFindFailure": true,
        "xcodeOrgId": "BZ7CNQ54UK",
"xcodeSigningId": "iPhone Developer",
"updatedWDABundleId": "com.deliverehub.wda2",
        'appium:deviceName': 'Rafa', // your iPhone name
        'appium:udid': '00008140-001479A102EB001C',
        'appium:bundleId': 'com.deliverehub.app',
        'appium:noReset': true
      }
    });

    console.log('✅ Connected to iPhone app');

    await driver.pause(5000);
    await driver.deleteSession();

  } catch (error) {
    console.error('❌ ERROR:', error);
  }
})();