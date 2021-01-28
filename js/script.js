
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
jobRole.addEventListener('change', e => {
    if ( e.target.value == 'other' ) {
       otherJobRole.hidden = false;
   } else {
       otherJobRole.hidden = true;
   }
});


// Disable the "Color" <select> element.
color.hidden = true;


// Program the "Design" <select> element to listen for user changes. When a change is detected:
 shirtDesign.addEventListener('change', e => {
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


// Create variables to reference the "Register for Activities" <fieldset> element and the "Total: $" <p> element. Log the variables out to the console to ensure the correct elements are being referenced.
const activities = document.getElementById('activities');
console.log(activities);

const totalCost = document.getElementById('activities-cost'); 
console.log(totalCost);

// Create another variable to store the total cost of the activities and give it an initial value of 0.
let costSum = 0;

// Use the variable for the "Register for Activities" section to listen for the change event on this element.
activities.addEventListener('change', e => {
// Inside the event listener, create a variable to store a reference to the "data-cost" attribute of the event.target. The getAttribute method will be helpful here. This will provide the cost of the activity that was just clicked. But this value needs to be a number rather than a string, so you’ll need to perform a type conversion on this value before working with it. The unary plus operator, +, will be helpful here. To test this value and its type, log out the variable, and log it out a second time with the typeof operator to ensure it is a number and the value you expect it to be. You’ll have to make a selection in the "Register for Activities" section to print those log statements to the console.
    let dataCost = +e.target.getAttribute('data-cost');
    console.log(dataCost);
    console.log(typeof dataCost);
// Still inside the event listener, create a conditional to determine if the event.target was just checked or unchecked. The checked property will be helpful here. If the event.target was checked, then add the "data-cost" of the event.target to the total variable that was created earlier. If the event.target was unchecked, then subtract the “data-cost”. To test this, you can log out the total cost variable as well as the checked property of the event.target. You’ll have to select activities to see this log statement as well.
    const isChecked = e.target.checked;
    if(isChecked) {
        costSum += dataCost; 
        console.log(costSum);
    } else {
        costSum -= dataCost;
        console.log(costSum);
    }   
    totalCost.innerHTML = `Total: $${costSum}`;
});
// Lastly, update the innerHTML of the “Total:” <p> element with the new total cost, but mind the formatting so that the end result still resembles the initial text: "Total: $0".

// Now save and refresh the page, and when an activity is checked/unchecked, the total cost text below the activity section should update in real time.
