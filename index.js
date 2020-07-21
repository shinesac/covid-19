
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */

function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
}


// create confirmation message for submit and prevent submission if required fields are blank
//need to fix alert bug ...submitting if not all required fields completed 


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
// need to fix bug....counts, but does not keep counting once submission successful..need to show on main page

var aCountButton = 0;
var bCountButton = 0;

function aButtonClick() {
  aCountButton++;
	document.getElementById("rNumber").innerHTML = "Reported:" + " " + aCountButton;
	return console.log(aCountButton);
}

function bButtonClick() {
  bCountButton++;
  document.getElementById("cNumber").innerHTML = "Confirmed:" + " " + bCountButton;
	return console.log(bCountButton);
}

// handle submit button submission

function reportClickHandler() {
  aButtonClick();
  confirmSubmit();
}

function confirmClickHandler() {
  bButtonClick();
  confirmSubmit();
}