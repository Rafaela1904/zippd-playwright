const { remote } = require('webdriverio');

async function driverRegistrationTest() {
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

    console.log("🚀 Driver Registration Started");

    // Continue
    await driver.$('~Continue').click();

    // Register as Driver
    await driver.$('~Register as a driver').click();

    // 👇 Get all visible text fields
    const fields = await driver.$$('//XCUIElementTypeTextField');

    // 0 = Full Name
    await fields[0].click();
    await fields[0].setValue('Test Driver Automation');

    // 1 = Phone Number
    await fields[1].click();
    await fields[1].setValue('77854367233');

    // 2 = Email
    await fields[2].click();
    await fields[2].setValue('driver@test.com');

    // 🔐 Password (NOT accessible → workaround)
   const password = await driver.$('~password');

await password.waitForDisplayed({ timeout: 10000 });
await password.click();
await password.setValue('Testtest@1');

console.log("✅ Password entered using Semantics");

    // -----------------------------
    // RADIO BUTTONS (default = No)
    // -----------------------------
    // If already "No", you can skip.
    // If needed, explicitly tap "No":

    // Example (adjust if needed):
    // await driver.$('~No').click();

    console.log("✅ Radio buttons default handled");

    // -----------------------------
    // Home Postcode
    // -----------------------------
    await fields[3].click();
    await fields[3].setValue('M130GH');

    // Find Address
    await driver.$('~Find address').click();

    console.log("✅ Address search triggered");

    // -----------------------------
    // Select Vehicle
    // -----------------------------
    await driver.$('~Select your vehicle').click();

    // pick first vehicle option (adjust selector if needed)
    const vehicle = await driver.$('//XCUIElementTypeCell[1]');
    await vehicle.click();

    console.log("✅ Vehicle selected");

    // -----------------------------
    // Dropdown: How did you hear about us
    // -----------------------------
    await driver.$('~How did you hear about us?').click();

    // select first option
    const option = await driver.$('//XCUIElementTypeCell[1]');
    await option.click();

    console.log("✅ Dropdown selected");

    // -----------------------------
    // Checkbox (Privacy + signup)
    // -----------------------------
    // Privacy Policy checkbox
const privacy = await driver.$('~Privacy Policy');
await privacy.waitForDisplayed({ timeout: 5000 });
await privacy.click();

// Sign me up checkbox
const signup = await driver.$('~Sign me up for zippd offers and services');
await signup.waitForDisplayed({ timeout: 5000 });
await signup.click();

    console.log("✅ Checkbox selected");

    // -----------------------------
    // Submit Registration
    // -----------------------------
    const registerBtn = await driver.$('~Register as driver');
    await registerBtn.waitForDisplayed({ timeout: 10000 });
    await registerBtn.click();

    console.log("🎉 Driver Registration Submitted");

    await driver.pause(5000);
    await driver.deleteSession();
}

driverRegistrationTest();