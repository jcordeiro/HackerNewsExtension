// Import the page-mod API
var pageMod = require("sdk/page-mod");

//Import the self API
var self = require("sdk/self");
 
// Create a page mod
// This will run the script whenever a "https://news.ycombinator.com/*" URL is loaded

pageMod.PageMod({
  include: "https://news.ycombinator.com/*",
  contentScriptFile: self.data.url("contentscript.js")
});