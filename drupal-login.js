var Browser = require("zombie");
var assert = require("assert");

var user = "admin";
var pass = "password";

// Load the page from localhost
browser = new Browser();
browser.site = "http://localhost";
browser.visit("/", function () {
  // Fill email, password and submit form
  browser.
    fill("name", user).
    fill("pass", pass).
    pressButton("Log in", function() {

      // Form submitted, new page loaded.
      assert.ok(browser.success);
      assert.equal(browser.text(".admin-menu-account a"), "Hello " + user);
      console.log('Logged In');
    })

});
