// From http://webdriver.io/guide/testrunner/pageobjects.html
'use strict';
class Page {
	open( path ) {
		browser.url( '/' + path );
	}
}
module.exports = Page;
