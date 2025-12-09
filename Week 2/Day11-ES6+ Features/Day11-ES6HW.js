// ES6 Test Runner

// ✅ Arrow function to start and complete individual tests
const runTest = (testName) => {
  console.log(`🧪 Starting test: ${testName}`);
  console.log(`✅ Test Completed: ${testName}`);
};
runTest("Login Functionality");

// ✅ Arrow function to report pass/fail/unknown status
const reportStatus = (testName, status) => {
  if (status.toLowerCase() === "pass") {
    console.log(`🎉 ${testName} PASSED!`);
  } else if (status.toLowerCase() === "fail") {
    console.log(`❌ ${testName} FAILED!`);
  } else {
    console.log(`⚠️ ${testName} UNKNOWN status: ${status}`);
  }
};

// ✅ Test environment setup
let user = "John";
let env = "Staging";
let totalTests = 5;

console.log(`Running ${totalTests} tests for ${user} in the ${env} environment. (Chromium)`);
console.log(`Executing all ${totalTests} tests for user ${user} on ${env} environment. (Chromium)`);

// ✅ Configuration object (with enhanced method syntax)
const config = {
  baseURL: "https://qa-app.com",
  timeout: 3000,
  retries: 2,
  
  // 👇🏽 Enhanced method syntax — no need for "function" keyword
  login() {
    console.log("🔐 User logged in successfully!");
  }
};

// ✅ Call the login() method
config.login();

// ✅ Destructure values from config
const { baseURL, timeout } = config;

console.log(`Executing all ${totalTests} tests for user ${user} on ${env} environment. (Firefox)`);
console.log(`Base URL: ${baseURL}, Timeout: ${timeout}ms`);

// ✅ Test arrays
const uiTests = ["Login Test", "Profile Update Test"];
const apiTests = ["API Response Test", "Token Validation Test"];
const securityTests = ["Auth Bypass Test", "Data Encryption Test"];

// ✅ Merge all test arrays + custom item
const allTests = [...uiTests, ...apiTests, ...securityTests, "Final Report Generation"];

// ✅ Function with default parameters
const runAllTests = (tests = allTests, environment = "Staging", timeout = 5000) => {
  console.log(`🧪 Running ${tests.length} tests in ${environment} environment...`);
  console.log(`⏱ Default timeout: ${timeout}ms`);
  console.log("🧩 Test list:", tests);
};

// ✅ Execute the merged test suite
runAllTests();