// Test user credentials- strings
let username = 'testUser123';
let password = 'correctPass123';
let loginAttempts = 0;
let maxAttempts = 3;

loginAttempts= loginAttempts + 1; // Addition
let remainingAttempts = maxAttempts - loginAttempts; // Subtraction
let totalTests = 5 * 3; // Multiplication
let averageTime = 150 / 5; // Division

console.log('Login Attempts:', loginAttempts);
console.log('Remaining Attempts:', remainingAttempts);
console.log('Total Tests:', totalTests);
console.log('Average Time:', averageTime);

// Comparison operators
let expectedTitle = 'Dashboard';
let actualTitle = 'Dashboard';
let expectedCount = 5;
let actualCount = 5;

// Equality Check
console.log('Title Match:', actualTitle === expectedTitle); // true
console.log('Counts Match:', actualCount === expectedCount); // true

//Other comparisons
console.log('Attempts Less Than Max:', loginAttempts < maxAttempts); // true
console.log('Attempts Greater Than 0:', loginAttempts > 0); // true
console.log('Password Not Empty:', password !== ''); // true

// The Difference between == and ===
console.log('5 == \"5\":', 5 == '5'); // true
console.log('5 === \"5\":', 5 === '5'); // false

// Conditional Logic -making decisions (if this, then that)
// Conditional Logic
if (username === 'testUser123' && password === 'correctPass123') {
    console.log('✅ Login Successful - proceeding to dashboard');
let isLoggedIn = true;
} else if (loginAttempts <= maxAttempts) {
    console.log('❌ Too many Failed Attempts - account locked');
} else {
    console.log('⚠️ Invalid credentials - please try again');
}

// Switch Statement for test status
let testResult = 'passed';

switch (testResult) {
    case 'passed':
        console.log('✅ Test Passed - continuing test suite');
        break;
    case 'failed':
        console.log('❌ Test Failed - taking screenshot');
        break;
    case 'skipped':
        console.log('⚠️ Test Skipped - moving to next test');
        break;
    default:
        console.log('ℹ️ Unknown Test Result');
        {

// Logical Operators - combining conditions
        let pageLoaded = true;
        let elementVisible = true;
        let dataReady = false;

        // AND operator- all conditions must be true
        if (pageLoaded && elementVisible && dataReady) {
            console.log('✅ Ready to run tests');
        } else {
            console.log('⚠️ Waiting for conditions to be met');
        }

        // OR operator- at least one condition must be true
        if (username === 'admin' || username === 'testUser123') {
            console.log('✅ Authorized User');


            // NOT operator- reverses the condition
            if (!dataReady) {
                console.log('⚠️ Still loading data...');
            }
