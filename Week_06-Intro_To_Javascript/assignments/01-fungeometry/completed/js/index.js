"use strict";

var today = new Date();
var hourNow = today.getHours();
var greetings;

if (hourNow > 18) {
	greeting = 'Good afternoon!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');