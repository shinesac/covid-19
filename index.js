
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */

function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
}

// create confirmation message for submit and prevent submission if required fields are blank

//function for confirming and validating suggestion form
function suggestionSubmit() {
  if (document.getElementById("comments").value == "") {
    event.preventDefault();
    console.log("no data enterd");
    alert("Please fill out all required fields");
 } else {
     var userChoice = confirm("Are you sure you want to submit?");
     if (userChoice === false) {
     alert("No Data Submitted");
     console.log("user pressed cancel");
     event.preventDefault(); 
 } else {
     alert("Submission Successful!");
     console.log("user pressed submit");
   };
 };
}

//function for confirming and validating report form
function reportSubmit() {

	if (document.getElementById("illnessfirstName").value == "" || 
      document.getElementById("illnesslastName").value == "" || 
      document.getElementById("illnessdate").value == "") {
      event.preventDefault();
        console.log("no data entered");
        alert("Please fill out all required fields");
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

//function for confirming and validating confirm form
function confirmSubmit() {
   if (document.getElementById("firstName").value == "" ||
      document.getElementById("lastName").value == ""||
      document.getElementById("startdate").value ==""||
      document.getElementById("enddate").value =="") {
        event.preventDefault();
        console.log("no data enterd");
        alert("Please fill out all required fields");
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

var confirmCountButton = 0;
var reportCountButton = 0;

//counter for report form
function reportButtonClick() {
  reportCountButton++;
  localStorage.setItem("reported", reportCountButton); //stores count on local storage for reported value
  return console.log(reportCountButton);
}

reportCountButton = localStorage.getItem("reported");  //resets value of counter for reported value to value of counter data on local storage 


//counter for confirm form
function confirmButtonClick() {
  confirmCountButton++;
  localStorage.setItem("confirmed", confirmCountButton); //stores count on local storage for confirmed value
	return console.log(confirmCountButton);
}

confirmCountButton = localStorage.getItem("confirmed"); //resets value of counter for confirmed value to value of counter data on local storage 

// handle submit button submission

//for report form
function reportClickHandler() {
  if (reportSubmit() === true) {
    reportButtonClick();  
  }; 
}

//fpr confirm form
function confirmClickHandler() {
  if (confirmSubmit() === true) {
    confirmButtonClick();  
  }; 
}