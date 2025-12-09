// 1. Arrow Functions

// Traditional function
function traditionalLogin(username, password) {
    return `Logging in ${username} with password ${password}`;
}

const arrowLogin = (username, password) => {
    return `Logging in ${username} with password ${password}`;
};

const shortLogin = (username, password) => `Logging in ${username} with password ${password}`;


// 2. Template Literals
const testUser = 'John_Doe';
const testEnv = 'Staging';
const testCount = 5;

// Old Way
const oldWayMessage = 'Running ' + testCount + ' tests for user ' + testUser + ' in ' + testEnv + ' environment.';

// ES6 Way (Template Literals)
const newWayMessage = `Running ${testCount} tests for user ${testUser} in ${testEnv} environment.`;

console.log(oldWayMessage);
console.log(newWayMessage);

// 3. Destructuring
const testConfig = {
    baseURL: 'https://testapp.com',
    timeout: 3000,
    retries: 3,
    browser: 'chrome'
};

// const baseURL = testConfig.url;
// const timeout = testConfig.timeout;
// console.log(baseURL, timeout);

// const { baseURL, timeout } = testConfig;
// console.log(baseURL, timeout);

// 4. Spread Operator (Merging Arrays)
const basicTests = ['login', 'signup'];
const advancedTests = ['performanceTest', 'api_Test'];

const allTests = [...basicTests, ...advancedTests, 'securityTest'];
// console.log(allTests);


const defaultConfig = { retries: 3, timeout: 30000 };
const customConfig = { ...defaultConfig, browser: 'firefox' };
console.log(customConfig);

// 5. Default Parameters
const runTest = (testName, browser = 'chrome', timeout = 30000) => {
    return `Running ${testName} on ${browser} with ${timeout}ms timeout.`;
};

// console.log(runTest('loginTest'));
// console.log(runTest('loginTest', 'firefox'));
// console.log(runTest('loginTest', 'firefox', 60000));

// 6. Enhanced Object Literals
const username = 'test_user';
const password = 'test_pass';

// Old Way
const user1 = {
    username: username,
    password: password,
};

// New Way
const user2 = {
    username,
    password,
};

// console.log(user1);
// { username: 'test_user', password: 'test_pass' }

const user = {
    username: "admin",

    //Old Way
    login: function() {
        return `${this.username} logged in.`;
    },

    //New Way
    logout() {
        return `${this.username} logged out.`;
    }
};

console.log(user.login());
console.log(user.logout());
