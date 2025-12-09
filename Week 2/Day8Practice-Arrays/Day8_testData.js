// Step 1: Create arrays
let testUsers = ["qaUser1", "qaUser2", "adminUser"];
let browsers = ["chromium", "firefox", "webkit"];
let environments = ["staging", "uat", "production"];

// ✅ Add one more item to each using .push()
testUsers.push("guestUser");
browsers.push("edge");
environments.push("development");

// ✅ Log array lengths
console.log("Test Users Length:", testUsers.length);
console.log("Browsers Length:", browsers.length);
console.log("Environments Length:", environments.length);

// ✅ Print a specific value using index
console.log("Second Test User:", testUsers[1]);
console.log("Third Browser:", browsers[2]);
console.log("First Environment:", environments[0]);


// Step 2: Create test user objects
let user1 = {
  username: "qaUser1",
  password: "test123",
  role: "tester",
  isActive: true
};

let user2 = {
  username: "qaUser2",
  password: "test456",
  role: "analyst",
  isActive: false
};

let user3 = {
  username: "adminUser",
  password: "admin@123",
  role: "admin",
  isActive: true
};

// ✅ Log username and role
console.log(user1.username, "-", user1.role);
console.log(user2.username, "-", user2.role);
console.log(user3.username, "-", user3.role);

// ✅ Check active status
console.log(`${user1.username} Active?`, user1.isActive);
console.log(`${user2.username} Active?`, user2.isActive);
console.log(`${user3.username} Active?`, user3.isActive);

// Step 3: Combine arrays + objects
let testConfig = {
  baseUrl: "https://shopapp.test",
  browsers: ["chromium", "firefox", "webkit"],
  credentials: {
    admin: { username: "adminUser", password: "admin@123" },
    standardUsers: [user1, user2, user3]
  }
};

// ✅ Access and print nested values
console.log("Second Browser:", testConfig.browsers[1]);
console.log("Admin Username:", testConfig.credentials.admin.username);
console.log("First Standard User Username:", testConfig.credentials.standardUsers[0].username);
