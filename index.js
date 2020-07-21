
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */

function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
}


// create confirmation message for submit and prevent submission if required fields are blank
//need to fix alert bug


function confirmSubmit() {
  var userChoice = confirm("Are you sure you want to submit?");
  var reqUserInput = document.querySelector(".required").value;
  if (userChoice == false || reqUserInput == "") {
    event.preventDefault();
    alert("No Data Submitted");
  } else {
    alert("Submission Successful!");
  };
}

//create counter

var aCountButton = 0;
var bCountButton = 0;

function aButtonClick() {
	aCountButton++;
	document.getElementById("rNumber").innerHTML = "Reported:" + " " + aCountButton;
	return console.log(aCountButton);
}

function bButtonCLick() {
  bCountButton++;
	document.getElementById("cNumber").innerHTML = "Confirmed:" + " " + bCountButton;
	return console.log(bCountButton);
}