// For global variables.
// The global scope in React Native is variable global.
// For ex: as global.foo = foo, then you can use global.foo anywhere as a global variable.
// Make sure you import './global.js' in your files to use global variables!
global.AIRTABLE_KEY = "keyd6qkfF0Q6csT9G"; 
global.APPLICATIONS_URL = "https://api.airtable.com/v0/appm1EwjHL56mOmPx/All%20Applications"; // Applications airtable link
global.DECISIONS_URL = "https://api.airtable.com/v0/appm1EwjHL56mOmPx/Decisions"; // Decisions airtable link
global.OFFICERS = ["sai", "maggie", "joy"];
global.NUM_YES = 30;
global.IGNORED_FIELDS = [
    "Name",
    "Email",
    "Year",
    "Phone Number",
];
/** Custom ordering of questions */
global.QUESTION_ORDER = [
    6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,0,1,2,3,4,5,
]