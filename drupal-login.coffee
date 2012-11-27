Browser = require("zombie")
assert = require("assert")
user = "admin"
pass = "password"

# Load the page from localhost
browser = new Browser()
browser.site = "http://sandbox.d7"
browser.visit "/", ->

  # Fill email, password and submit form
  browser.fill("name", user).fill("pass", pass).pressButton "Log in", ->

    # Form submitted, new page loaded.
    assert.ok browser.success
    assert.equal browser.text(".admin-menu-account a"), "Hello " + user
    console.log "Logged In"
