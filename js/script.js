
const name = document.getElementById('name')
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const color = document.getElementById('shirt-colors');
const shirtDesign = document.querySelector('.shirt-designs');
const jsPuns = document.querySelectorAll('[data-theme = "js puns"]');
const heartJs = document.querySelectorAll('[data-theme = "heart js"]');
const activities = document.getElementById('activities');
const totalCost = document.getElementById('activities-cost');
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const selectMethod = document.querySelector('[value="select method"]');
 // If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
let costSum = 0;

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
      // If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
     for (let i = 0; i < jsPuns.length; i++) {
        const targetValue = e.target.value;
        if ( targetValue == "js puns" ) {
            jsPuns[i].hidden = false;
        } else {
           jsPuns[i].hidden = true;
        }
        }
         // If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey." 
        for (let i = 0; i < heartJs.length; i++) {
            const targetValue = e.target.value;
            if ( targetValue == "heart js" ) {
                heartJs[i].hidden = false;
            } else {
                heartJs[i].hidden = true;
            }
        }
});


// Use the variable for the "Register for Activities" section to listen for the change event on this element.
activities.addEventListener('change', e => {
// Inside the event listener, create a variable to store a reference to the "data-cost" attribute of the event.target. The getAttribute method will be helpful here. This will provide the cost of the activity that was just clicked. But this value needs to be a number rather than a string, so you’ll need to perform a type conversion on this value before working with it. The unary plus operator, +, will be helpful here. To test this value and its type, log out the variable, and log it out a second time with the typeof operator to ensure it is a number and the value you expect it to be. You’ll have to make a selection in the "Register for Activities" section to print those log statements to the console.
    let dataCost = +e.target.getAttribute('data-cost');
// Still inside the event listener, create a conditional to determine if the event.target was just checked or unchecked. The checked property will be helpful here. If the event.target was checked, then add the "data-cost" of the event.target to the total variable that was created earlier. If the event.target was unchecked, then subtract the “data-cost”. To test this, you can log out the total cost variable as well as the checked property of the event.target. You’ll have to select activities to see this log statement as well.
    const isChecked = e.target.checked;
    if(isChecked) {
        costSum += dataCost; 
    } else {
        costSum -= dataCost;
    }   
    totalCost.innerHTML = `Total: $${costSum}`;
});

// Use the "paypal" and "bitcoin" variables above to hide these elements initially.
paypal.hidden = 'true';
bitcoin.hidden = 'true';


// Use the payment variable above to target the element’s second child element and give it the selected property. The .children property and the setAttribute method will be helpful here.

payment.children[1].setAttribute('selected', 'true');
// Use the payment variable above to listen for the change event on this element. When a change is detected, display the <div> element with the id that matches the value of the event.target element. And hide the other two <div> elements.
payment.addEventListener('change', e => {
    if( e.target.value = 'paypal' ) {
        paypal.hidden = 'false';
        creditCard.hidden = 'true';
        bitcoin.hidden = 'true';
    } else if ( e.target.value = 'bitcoin' ) {
        bitcoin.hidden = 'false';
        paypal.hidden = 'true';
        creditCard.hidden = 'true'
    } else {
        creditCard.hidden = 'false';
        paypal.hidden = 'true';
        bitcoin.hidden = 'false';
    }
})
// Now save and refresh the page, and when the payment method option is updated in the drop-down menu, the payment sections in the form will update accordingly.

// The "Name" <input type="text"> element (should already have a variable)
// The "Email Address" <input type="text"> element
// The "Register for Activities" <fieldset> element (should already have a variable)
// The "Card number" <input type="text"> element
// The "Zip code" <input type="text"> element
// The "CVV" <input type="text"> element
// The <form> element
// Create variables for the above elements that haven’t already had variables created for them, and log them out to ensure they are what you expect them to be.
// Use the "form" variable to listen for the submit event.
// Inside the event listener, use the name variable, dot notation and the value property to create a new variable that references the value of the “Name” field.
// Create another variable to store the results of testing the name value variable that was just created. Regex will be helpful, and the regex course from this unit will demonstrate how to do this. This variable will equal true if the test passes, and false otherwise.
// Log these variables out to the console to check the "Name" field’s value and if it passes the custom validation test. To see this log statement printed to the console, you’ll have to do three things:
// Enter something into the “Name” field
// Add a temporary event.preventDefault() statement to prevent the form from refreshing when the submit button is clicked.
// Click the submit button
// Still in the event listener, use the name validation test variable and an if statement to check if the name value is valid. If false, prevent the form from submitting with an event.preventDefault() statement. Otherwise, do nothing and allow the form to submit.
// Repeat steps 3 through 6 above for each of the required fields. Review the project instructions for the list of required fields or sections and the validation requirements of each. And remember that the credit card fields should only be validated if "credit card" is the selected payment method.

// Note: Inside the event listener is ultimately where the required fields or sections will be tested. But rather than creating all the tests there, it can be helpful to create helper functions for each required field that can then be called in the event listener to do the testing and return true or false depending on whether the field is valid or not.

// If you added an extra `event.preventDefault()` statement for testing purposes, it should be removed. Here, the form should only be prevented from submitting if one or more of the required form fields is invalid.

// Now save and refresh the page, and when the submit button is clicked, the form should only submit and refresh if all the required fields are valid.