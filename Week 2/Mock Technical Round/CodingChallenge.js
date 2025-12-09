// Filter active test users, validate environments, and display test configuration.

// Step 1: Create an array of test users with properties: username, role, isActive.
const testUsers = [
  { username: "qaUser1", role: "tester", isActive: true },
  { username: "qaUser2", role: "tester", isActive: false },
  { username: "adminUser", role: "admin", isActive: true },
];

// Step 2: Create an object to hold environment details.
const testConfig = {
  baseUrl: "https://join.roadtoqa.com",
  browsers: ["chromium", "firefox", "webkit"],
  environments: ["staging", "uat", "production"],
  defaultEnv: "staging",

  // Bonus Step 6: Summary method.
  summary() {
    const activeCount = testUsers.filter((u) => u.isActive).length;
    console.log(`Base URL: ${this.baseUrl}`);
    console.log(`Environments Available: ${this.environments.join(", ")}`);
    console.log(`Selected Environment: ${this.defaultEnv}`);
    console.log(`Total Active Users: ${activeCount}`);
  },
};

// Step 3: Loop through the test users and display only active users.
testUsers.forEach((user) => {
  if (user.isActive) {
    console.log(`Active User: ${user.username} (Role: ${user.role})`);
  }
});

// Step 4: Check if the default environment is production and display a warning if so.
if (testConfig.defaultEnv === "production") {
  console.log("Warning: You are running tests in production!");
} else {
  console.log("Safe to run tests in staging or UAT environment.");
}

// Step 5: Loop through the browsers and display which browsers will be used for testing.
testConfig.browsers.forEach((browser) => {
  console.log(`Running test on: ${browser}`);
});

// Step 7: Run the summary method to display the final output.
console.log("\n--- Test Configuration Summary ---");
testConfig.summary();
