# lab08andy
Day 8 Lab
LAB -
Project Name: Lab 08
Author: Andy Fiedler
Links and Resources
submission PR: https://github.com/AndyFiedler-401d4-Advanced-Javascript/lab08andy/pull/1
travis: https://travis-ci.com/search/lab08andy
back-end (when applicable)
front-end (when applicable)
Documentation
api docs (API servers)
jsdoc (Server assignments)
styleguide (React assignments)
Modules
modulename.js
Exported Values and Methods
foo(thing) -> string
Usage Notes or examples

bar(array) -> array
Usage Notes or examples

Setup
.env requirements
PORT - Port Number
MONGODB_URI - URL to the running mongo instance/db
Running the app
npm start
Endpoint: /foo/bar/
Returns a JSON object with abc in it.
Endpoint: /bing/zing/
Returns a JSON object with xyz in it.
Tests
How do you run tests?
What assertions were made?
What assertions need to be / should be made?
UML
Link to an image of the UML for your application and response to events

Requirements:
Assignment 1: Integrate "Real" Data Models
Import your mongo data models from your earlier data modeling lab.
Put them in a models folder in your source tree
Import them into your server.js
Wire them into the routes, replacing the in-memory "database"
So long as your models obey the interface contract, your API routes should begin working
Verify this manually by visiting each of the routes with httpie or postman
get, post, put, delete on /categories and /categories/:id
get, post, put, delete on /products and /products/:id
Write supergoose tests to verify that your routes are functioning
/post saves a new record
/get gets all records
...etc
Assignment 2: Modularizing with External Routes
Move the 2 sets of routes and rout handler functions into separate, external routers
They should go into a routes folder as separate files
One for categories
One for products
They will need to export an express router instance
The app will now need to import and use these routes
Once you've moved the routes out, the tests that you wrote should still work.
Engineering Note This is a main benefit of testing -- asserting that major changes don't effect functionality!