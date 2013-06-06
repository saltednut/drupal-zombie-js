var Browser = require("zombie");
var assert = require("assert");

// Declare node id to test in Drupal.
var nid = 1;

browser = new Browser({debug: true});
browser.site = "http://localhost";
browser.visit("/node/" + nid).
  then(function() {
    var h1 = browser.text('h1');
    browser.visit("/entity_js_load_single_json/node/" + nid, function () {
      assert.equal(h1, JSON.parse(browser.text('body')).title);
    });
  }).
  fail(function(error) {
    console.log("Oops", error);
  });

