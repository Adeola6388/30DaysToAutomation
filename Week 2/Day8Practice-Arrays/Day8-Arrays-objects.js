// let groceryList = ["eggs", "milk", "bread", "cake"];

// console.log(groceryList [1]);
// console.log(groceryList.length);

// let testUsers = ['john doe', 'jane smith', 'admin user'];
// console.log(testUsers);
// let testPasswords = ['password123', 'securepass456', 'admin2023'];

// Push() method adds new items to the end of an array
// Unshift() method adds new items to the beginning of an array
// Slice() method extracts a section of an array and returns it as a new array
// Includes() method checks if an array contains a certain element and returns true or false
// testUsers.push('new user');
// console.log(testUsers);

// Objects
// let card = 
// {
//  fname: "Adeola",
//  phone: "4076072328",
//  email: "adeola.adefala@gmail.com"
// }
// console.log(card.fname);
// console.log(card.phone);
// onsole.log(card.email);

// let testUser = {
  //  username: "Adeola",
  //  password: "password123",
  //  email: "adeola.adefala@gmail.com",
  //  role: "user",
   // isActive: true
 // };

  //  console.log(testUser.username);
  //  console.log(testUser.isActive);

  let testConfig = {
  baseURL: "https://api.example.com", // String
  browsers: ["chrome", "firefox", "safari"], // Array
  credentials: {
    admin: { username: "admin", password: "admin123" }, // Nested Object
  },
};

console.log(testConfig.browsers[1]);
console.log(testConfig.credentials.admin.username);
