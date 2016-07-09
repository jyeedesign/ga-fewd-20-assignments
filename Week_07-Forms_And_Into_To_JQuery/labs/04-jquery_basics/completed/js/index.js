
"use strict";

var start=function (){
	var question = $("#question");
	var answer = $("#answer");

question.on("click", function () {
	answer.fadeIn(5000, function (){
	question.addClass("coolblue");
	});
});

answer.on("click", function () {
	answer.fadeOut(1000, function() {
	    question.removeClass("coolblue");
});
});

};


//Call the 'main' function when document is ready
$(document).ready(start);
