const firstName = document.querySelector('div[value="firstName"]')
const lastName = document.querySelector('div[value="lastName"]')
const email = document.querySelector('div[value="email"]')
const password = document.querySelector('div[value="password"]')
const confirmPass = document.querySelector('div[value="confirmPass"]')
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirmPassword')

    let fNameErr = document.createElement('div');
    fNameErr.style.display = 'none';
    let lNameErr = document.createElement('div');
    lNameErr.style.display = 'none';
    let emailErr = document.createElement('div');
    emailErr.style.display = 'none';
    let passErr = document.createElement('div');
    passErr.style.display = 'none';
    let conPassErr = document.createElement('div');
    conPassErr.style.display = 'none'

 firstNameInput.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!event.target.valueMissing) {
          fNameErr.textContent   = '*Please enter your first name';
          fNameErr.className     = 'error';
          fNameErr.style.display = 'inline';
          firstName.appendChild(fNameErr);
      }
    }
);

firstNameInput.addEventListener('input', function(event){
    if ("inline" == fNameErr.style.display) {
        fNameErr.style.display = 'none';
    }
});

 lastNameInput.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!event.target.valueMissing) {
          lNameErr.textContent   = '*Please enter your last name';
          lNameErr.className     = 'error';
          lNameErr.style.display = 'inline';
          lastName.appendChild(lNameErr);
      }
    }
);

lastNameInput.addEventListener('input', function(event){
    if ("inline" == lNameErr.style.display) {
        lNameErr.style.display = 'none';
    }
});

 emailInput.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!event.target.valueMissing) {
          emailErr.textContent   = '*Please insert your email address. The email address must contain an @ and end with .com';
          emailErr.className     = 'error';
          emailErr.style.display = 'inline';
          email.appendChild(emailErr);
      }
    }
);

emailInput.addEventListener('input', function(event){
    if ("inline" == emailErr.style.display) {
        emailErr.style.display = 'none';
    }
});

 passwordInput.addEventListener('invalid', function(event){
    event.preventDefault();
    if (!event.target.valueMissing) {
          passErr.textContent   = '*Please enter a password with an amount of between 7 and 13 characters';
          passErr.className     = 'error';
          passErr.style.display = 'inline';
          password.appendChild(passErr);
      }
    }
);
passwordInput.addEventListener('input', function(event){
    if(passErr.style.display == "inline") {
        passErr.style.display = 'none';
    } else if(passwordInput.value !== confirmPassInput.value){
    conPassErr.textContent = "*Passwords do not match"
    conPassErr.style.display = 'inline'
  } else if(confirmPassInput.value == passwordInput.value){
   conPassErr.style.display = 'none';
  } 
});

confirmPassInput.addEventListener('input', function(event){
  confirmPass.appendChild(conPassErr)
  conPassErr.className = 'error';
  conPassErr.textContent = ""
  if(confirmPassInput.value == passwordInput.value){
   conPassErr.style.display = 'none';
  } else if(confirmPassInput.value !== passwordInput.value){
    conPassErr.textContent = "*Passwords do not match"
    conPassErr.style.display = 'inline'
  }
});

confirmPassInput.addEventListener('invalid', function(event){
  event.preventDefault();
  confirmPass.appendChild(conPassErr)
  conPassErr.className = 'error';
  conPassErr.textContent = ""
  if(passwordInput.value == confirmPassInput.value){
   conPassErr.style.display = 'none';
  } else if(passwordInput.value !== confirmPassInput.value){
    conPassErr.textContent = "*Passwords do not match"
    conPassErr.style.display = 'inline';
  }
})