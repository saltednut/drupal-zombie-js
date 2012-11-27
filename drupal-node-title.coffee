Browser = require("zombie")
assert = require("assert")

# Declare node id to test in Drupal.
nid = 1
browser = new Browser(debug: true)
browser.site = "http://sandbox.d7"
browser.visit("/node/" + nid).then(->
  h1 = browser.text("h1")
  browser.visit "/entity_js_load_single_json/node/" + nid, ->
    assert.equal h1, JSON.parse(browser.text("body")).title

).fail (error) ->
  console.log "Oops", error
