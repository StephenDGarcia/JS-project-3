
const name = document.getElementById('name')
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const color = document.getElementById('shirt-colors');
const shirtDesign = document.querySelector('.shirt-designs');
const jsPuns = document.querySelectorAll('[data-theme = "js puns"]');
const heartJs = document.querySelectorAll('[data-theme = "heart js"]');

//Set the focus property to true on the <input type="text"> 
name.focus()

//Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.
otherJobRole.hidden = true;

//Program the "Job Role" <select> element to listen for user changes.
//When a change is detected, display/hide the "text field" based on the user’s selection in the drop down menu.
jobRole.addEventListener('change', (e) => {
    if ( e.target.value == 'other' ) {
       otherJobRole.hidden = false;
   } else {
       otherJobRole.hidden = true;
   }
});


// Disable the "Color" <select> element.
color.hidden = true;


// Program the "Design" <select> element to listen for user changes. When a change is detected:
 shirtDesign.addEventListener('change', (e) => {
     // The "Color" <select> element should be enabled.
     color.hidden = false;
     if (e.target.value == "js puns") {
        // If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey." 
        heartJs.hidden = true;
     } else if (e.target.value == "heart js") {
        // If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
        jsPuns.hidden = true;
     } else {
         color.hidden = true;
     }
 });


// The "Color" <select> element should display an available color.
// The "Color" dropdown menu should display only the color options associated with the selected design. For example:

