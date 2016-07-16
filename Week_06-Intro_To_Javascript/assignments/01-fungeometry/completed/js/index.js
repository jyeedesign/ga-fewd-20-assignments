"use strict";

function main () {

	var diamond1 = document.getElementById("diamond1");
	var diammond2 = document.getElementById("diamond2");
	var diamond3 = document.getElementById("diamond3");
	var diamond4 = document.getElementById("diamond4");

	diamond1.addEventListener("click", clickedDiamond1);
	diamond2.addEventListener("click", clickedDiamond2);
	diamond3.addEventListener("click", clickedDiamond3);
	diamond4.addEventListener("click", clickedDiamond4);
}

function clickedDiamond1 () {
	var diamond1 = document.getElementById("diamond1");
	var diammond2 = document.getElementById("diamond2");
	var diamond3 = document.getElementById("diamond3");
	var diamond4 = document.getElementById("diamond4");

	diamond1.style.transform = "rotate (45deg)";
	diamond2.style.transform = "rotate (67deg)";
	diamond3.style.transform = "rotate (22deg)";
	diamond4.style.transform = "rotate (45deg)";

}

function clickedDiamond2 () {
	var diamond1 = document.getElementById("diamond1");
	var diammond2 = document.getElementById("diamond2");
	var diamond3 = document.getElementById("diamond3");
	var diamond4 = document.getElementById("diamond4");

	diamond1.style.transform = "rotate (22deg)";
	diamond2.style.transform = "rotate (45deg)";
	diamond3.style.transform = "rotate (45deg)";
	diamond4.style.transform = "rotate (67deg)";

}

function clickedDiamond3 () {
	var diamond1 = document.getElementById("diamond1");
	var diammond2 = document.getElementById("diamond2");
	var diamond3 = document.getElementById("diamond3");
	var diamond4 = document.getElementById("diamond4");

	diamond1.style.transform = "rotate (67deg)";
	diamond2.style.transform = "rotate (45deg)";
	diamond3.style.transform = "rotate (45deg)";
	diamond4.style.transform = "rotate (22deg)";

}

function clickedDiamond4 () {
	var diamond1 = document.getElementById("diamond1");
	var diammond2 = document.getElementById("diamond2");
	var diamond3 = document.getElementById("diamond3");
	var diamond4 = document.getElementById("diamond4");

	diamond1.style.transform = "rotate (45deg)";
	diamond2.style.transform = "rotate (22deg)";
	diamond3.style.transform = "rotate (67deg)";
	diamond4.style.transform = "rotate (45deg)";

}

window.addEventListener("load", main);



