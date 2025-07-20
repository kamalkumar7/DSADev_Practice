// LOCAL STORAGE Example
// Store a value
localStorage.setItem("username", "Alice");

// Retrieve the value
const storedName = localStorage.getItem("username");
console.log("LocalStorage Username:", storedName);

// Remove the item
localStorage.removeItem("username");

// Clear all local storage
localStorage.clear();


// SESSION STORAGE Example
// Store a value
sessionStorage.setItem("sessionID", "123456");

// Retrieve the value
const storedSession = sessionStorage.getItem("sessionID");
console.log("SessionStorage ID:", storedSession);

// Remove the item
sessionStorage.removeItem("sessionID");

// Clear all session storage
sessionStorage.clear();