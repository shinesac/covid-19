
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */

function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
}


// create confirmation message for submit and prevent submission if required fields are blank
//need to fix alert bug ...submitting if not all required fields completed 

// var reqFirstName = document.getElementById("firstName").value;
// var reqLastName = document.getElementById("lastName").value;
// var reqLocation = document.getElementById("location").value;
// var reqStartDate = document.getElementById("startdate").value;
// var reqEndDate = document.getElementById("enddate").value;
// var reqIllnessDate = document.getElementById("illnessdate").value;
// var reqIllnessFirstName = document.getElementById("illnessfirstName").value;
// var reqIllnessLastName = document.getElementById("illnesslastName").value;

function confirmSubmit() {
  var reqUserInput = document.querySelector(".required").value;
   if (reqUserInput == "") {
    event.preventDefault();
    console.log("no data enterd");
    return false;
  } else {
      var userChoice = confirm("Are you sure you want to submit?");
      if (userChoice === false) {
      alert("No Data Submitted");
      console.log("user pressed cancel");
      event.preventDefault(); 
        } else {
    alert("Submission Successful!");
    console.log("user pressed submit");
    return true;
    };
  };
}


//create counter
// need to fix bug....counts, but does not keep counting once submission successful..need to show on main page

var reportCountButton = 0;
var confirmCountButton = 0;

function reportButtonClick() {
  reportCountButton++;
	document.getElementById("rNumber").innerHTML = "Reported:" + " " + reportCountButton;
  return console.log(reportCountButton);
}

function confirmButtonClick() {
  confirmCountButton++;
  document.getElementById("cNumber").innerHTML = "Confirmed:" + " " + confirmCountButton;
	return console.log(confirmCountButton);
}

// handle submit button submission

function reportClickHandler() {
  if (confirmSubmit() === true) {
    reportButtonClick();  
}; 
}


function confirmClickHandler() {
  if (confirmSubmit() === true) {
    confirmButtonClick();  
}; 
}