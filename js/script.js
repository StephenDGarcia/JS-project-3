
let name = document.getElementById('name')
//let name = document.querySelector('[name="user-name"]');
console.log(name);
name.focus()

let jobRole = document.getElementById('title');
console.log(jobRole)

let otherJobRole = document.getElementById('other-job-role');
console.log(otherJobRole);
otherJobRole.style.visibility = 'hidden';

let selectOther = document.querySelector('[value=other]');
console.log(selectOther);

// $('otherJobRole').on('click keypress', function() {

selectOther.addEventListener('change', (e) => {
   otherJobRole.style.visibility = 'visible';
});
// })