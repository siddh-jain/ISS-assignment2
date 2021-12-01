window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}




function respFunction() {
	var x = document.getElementById("navbar");
	if (x.className === "navigationBar") {
		x.className += " responsive";
	} else {
		x.className = "navigationBar	";
	}
}



count = 0;
function changeimage() {
	var imgelement = document.getElementById("imageclicker")
	if (count % 5 == 0) {
		imgelement.src = "../img/img2.jpg";
		imgelement.alt = "Second image";
	}
	else if (count % 5 == 1) {
		imgelement.src = "../img/img3.jpg";
		imgelement.alt = "Third image";
	}
	else if (count % 5 == 2) {
		imgelement.src = "../img/img4.jpg";
		imgelement.alt = "Fourth image";
	}
	else if (count % 5 == 3) {
		imgelement.src = "../img/img5.jpg";
		imgelement.alt = "Fifth image";
	}
	else if (count % 5 == 4) {
		imgelement.src = "../img/img1.jpg";
		imgelement.alt = "First image";
	}
	count++;
}




var final_array = JSON.parse(localStorage.getItem("Data"));
//
//	For not Storing data after refresh uncomment-
//final_array = [];

if (final_array == null) {
	final_array = [];
}

function AddRow(form) {
	text = "";

	var proficiency = document.getElementById("dropDown");
	var level = proficiency.options[proficiency.selectedIndex].text;

	var name = form.input.value;
	if (name == "") {
		alert("fill the name!");
		return;
	}

	var skill = form.inputl.value;
	if (skill == "") {
		alert("fill the skill!");
		return;
	}

	var Dictionary = { NAME: name, SKILL: skill, LEVEL: level };
	final_array[final_array.length] = Dictionary;

	final_array.forEach(Func);

	document.getElementById("skillTable").innerHTML = text;
	localStorage.setItem("Data", JSON.stringify(final_array));


	document.getElementById("inp1").value = "";
	document.getElementById("inp2").value = "";
}


function Func(value) {
	text = text + "<tr>";
	text = text + "<td >" + value.NAME + "</td>";
	text = text + "<td>" + value.SKILL + "</td>";
	text = text + "<td>" + value.LEVEL + "</td>";
	text = text + "</tr>";
}

$(document).ready(function () {
	$(".active").hover(function () {
		$(this).css("background-color", "#cccccc");
		$(this).css("color", "#1a1a1a");
		$(this).css("font-weight", "bold")

	}, function () {
		$(this).css("background-color", "#333333");
		$(this).css("color", "#f2f2f2");
		$(this).css("font-weight", "normal")
	});

});
