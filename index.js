
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */

function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
}


//function for confirming and validating form. Prevents submission if required fields are blank. 
function confirmSubmit() {
  var invalidFields =[];
  var requiredFields = document.querySelectorAll(".required");

  requiredFields.forEach(field => {
      if (field.value === '') {
        invalidFields.push(field.name)
      }
    });

    if (invalidFields.length > 0) {
      alert(`Please finish the form. There are required fields left.`);
      console.log("no data entered");
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
  if (confirmSubmit() === true) {
    reportButtonClick();  
  }; 
}

//for confirm form
function confirmClickHandler() {
  if (confirmSubmit() === true) {
    confirmButtonClick();  
    event.preventDefault();
    window.location.replace("index.html");
  }; 
}