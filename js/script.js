
let name = document.getElementById('name')
//let name = document.querySelector('[name="user-name"]');
console.log(name);
name.focus()

let jobRole = document.getElementById('title');
console.log(jobRole)

let otherJobRole = document.getElementById('other-job-role');
console.log(otherJobRole);
otherJobRole.hidden = true;

 let selectOther = document.querySelector('[value=other]');
 console.log(selectOther);

jobRole.addEventListener('change', (e) => {
    if ( e.target.value == 'other' ) {
       otherJobRole.hidden = false;
   } else {
       otherJobRole.hidden = true;
   }
});
