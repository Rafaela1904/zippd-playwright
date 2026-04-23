const { remote } = require('webdriverio');

async function driverLoginTest() {
    const driver = await remote({
        hostname: '127.0.0.1',
        port: 4723,
        path: '/',
        capabilities: {
           platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        "appium:showXcodeLog": true,
"appium:printPageSourceOnFindFailure": true,
        "appium:xcodeOrgId": "BZ7CNQ54UK",
"appium:xcodeSigningId": "iPhone Developer",
"appium:updatedWDABundleId": "com.deliverehub.wda2",
        'appium:deviceName': 'Rafa', // your iPhone name
        'appium:udid': '00008140-001479A102EB001C',
        'appium:bundleId': 'com.deliverehub.app',
        'appium:noReset': true
      }
    });

    console.log("🚀 App launched");

    // 🌐 STEP 1: Language Screen → Tap Continue
    const btn = await driver.$('~Continue');
await btn.click();

    console.log("👉 Language selected");

    // 🧭 STEP 1: Tap "Sign in as Driver"
    const signInDriverBtn = await driver.$('~Sign in to my driver account');
await signInDriverBtn.waitForDisplayed({ timeout: 10000 });
await signInDriverBtn.click();

console.log("👉 Tapped Sign in as Driver");

    console.log("👉 On Driver Login Screen");

// 📧 Email
const fields = await driver.$$('//XCUIElementTypeTextField');

// EMAIL
await fields[0].click();
await fields[0].setValue('driver@test.com');

// PASSWORD (DO NOT reuse email field)
const password = await driver.$('//XCUIElementTypeSecureTextField');

if (await password.isExisting()) {
    await password.click();
    await password.setValue('123456');
} else {
    throw new Error("Password field not found in UI tree");
}

// 🔐 Login button
const loginBtn = await driver.$('~Sign in to my account');
await loginBtn.waitForDisplayed({ timeout: 10000 });
await loginBtn.click();

console.log("🔄 Login submitted");

    await driver.deleteSession();
}

driverLoginTest();