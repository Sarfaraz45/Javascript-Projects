const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')




// All functions
// Functions to show error
function showError(input,message){
 const formControl = input.parentElement
 formControl.className = 'form-control error'
 const small = formControl.querySelector('small')
 small.innerText = message
}

//Function to check if email is valid

function isValidEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Function to show success

function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//Function to check if required fields have data
function checkRequired(inputArray){
inputArray.forEach(function(input)  {
    if(input.value === ''){
        console.log(input.id)
        showError(input, `${getfieldId(input)} is required`)
    } else{
        showSuccess(input)
    }
});
}

//Function to get the id of the input feild
function getfieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//THis is an event listener for the form on submit
form.addEventListener('submit', function(e){
    e.preventDefault()

    checkRequired([username,email,password,password2])
    
  })