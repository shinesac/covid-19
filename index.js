
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */

function onClickMenu(){
	document.querySelector(".menu").classList.toggle("change");
	document.getElementById("navigation").classList.toggle("change");
}


// create confirmation message for submit

function confirmSubmit(){
  var userChoice = confirm("Are you sure you want to submit?");
  if (userChoice == false) {event.preventDefault()
  } else {
    alert("Submission Successful!");
  }
  }


// create tracking counter

function trackReported(){
  var reportedNumber = getElementById(rNumber).innerHTML ="";
  var reportedIllness = 0;
  var reportClick = getElementbyId("isubmit").addEventListener("click");
  if (reportClick == true) {
    reportedIllness += 1;
    reportedNumber = "Reported:" + " " + reportedIllness;
    console.log(reportedIllness);
  }
}