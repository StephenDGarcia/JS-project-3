
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

const email = document.getElementById('email');
const ccNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.getElementsByTagName('form');

// Use the "form" variable to listen for the submit event.

    

function isValidName(named) {
    return /[a-z]+/.test(named)
}

function createListener(validator) {
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const tooltip = e.target.nextElementSibling;
        showOrHideTip(showTip, tooltip)
    };
}

name.addEventListener("input", createListener(isValidName))