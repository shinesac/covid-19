# covid-19
covid-19 employee resource website for code louisville project


Description: 
This website acts as a model website for businesses to help manage their firm during the COVID-19 crisis. The website is ment to act as a "one-stop" for 
company information regarding COVID-19.  Additionally, it is designed to keep transparency high and to enable dynamic communication.

On the main page (index.html), a message is displayed from the CEO.  The expectations and company policy are clearly listed.

In the navigation bar, there are 3 links: one to report illness, one to confirm covid-19 illness, and one that takes you to the CDC website for more information. 
Navigation links are responsive to the user when they hover and click as the text color changes).


The website has a mobile and tablet view (see media queries) as well as a desktop view. Flexbox is used throughout the design. Float is used for the picture.

On the smaller screens, the navigation links hide inside of a hamburger menu that appears. Additionally, the "ceo" picture disappears and there is a one column view. 

The Report Illness link and Confirm Absence links take you to their respective forms. 

All three forms on this website (suggestion form on main page, report form on illness.html page, and confirm form on absence.html page) are validated for completion 
before the user is able to submit.  The forms also have a reset button to easily clear the form.

If the user tries to submit before required fields are filled out, an alert displays stating "please fill out all required fields."
If the user submits, they have a choice to confirm their submission. If the user presses cancel, the form will not refresh and the user can go back and easily edit. 
An alert will also display that states, "no data submitted."

If the user presses "ok" in the confirmation box (instead of cancel), the page will refresh and an alert will tell the user "submission successful!"

The forms on the illness.html and absence.html pages refresh to the main page (index.html) when submission is successful.  

Additionally, once the report form and/or confirm form is submitted successfully, the submission count will be stored in the local storage. 
The report form submission count is stored under the key "reported" and the confirm form is stored under the key "confirmed"

Once either of these forms are submitted and the page refreshes to the main page, the main page displays the current reported and confirmed count which it retrieves from local storage.  
In other words, each new submission will add to the count which will display on the main page. 

The forms are labled with focus to their respective fields.


Features included:
-A navigation menu that collapses into a responsive mobile-friendly menu (such as a “hamburger” menu) 
-Use Flexbox or CSS Grid to rearrange 2 or more content areas on your page as the screen changes sizes
-Use media queries to switch from a one-column mobile layout to a two or more column desktop layout 
-Create a form that takes in at least two fields of information and validates input (for example, it checks to ensure email is the a@b.com format
-Create a JavaScript function whose return value is used in your site. The function must be triggered by user action (ex: clicking a button).
-Use JavaScript to perform math operations and display the result on your site

Instructions:

-Try to submit any form without filling out required field to see alert and function
-Fill out form properly and press submit. Then press cancel on the confirmation alert box to see the "no data submitted" message and that entered values remain in the form
-Fill out form properly and press submit.  See reported/confirmed count increase with each submission.  
- Repeat filling out form successfully for both reported and confirmed forms to see each count increase on the main page. 

- to see media query functionality, resize browser. Check in google developer tools.
- toggle hamburger menu in mobile view.

*if needed, you can clear your local storage by entering the console and passing localStorage.clear()*

Thank you!






 
 
