const usernamefull = document.querySelector('#username');
const emailfull = document.querySelector('#email');
const passwordfull = document.querySelector('#password');
const confirmPasswordfull = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3;
        

    const username = usernamefull.value.trim();

    if (!isRequired(username)) {
        showError(usernamefull, 'Enter Username.');
    } else if (!isBetween(username.length, min)) {
        showError(usernamefull, `Username must be minimum ${min} characters.`)
    } else {
        showSuccess(usernamefull);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailfull.value.trim();
    if (!isRequired(email)) {
        showError(emailfull, 'Enter Northeastern Email');
    } else if (!isEmailValid(email)) {
        showError(emailfull, 'Use Northeastern Credentials only')
    } else {
        showSuccess(emailfull);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordfull.value.trim();

    if (!isRequired(password)) {
        showError(passwordfull, 'Enter Password');
    } else if (!isPasswordSecure(password)) {
        showError(passwordfull, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordfull);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordfull.value.trim();
    const password = passwordfull.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordfull, 'Please enter the password');
    } else if (password != confirmPassword) {
        showError(confirmPasswordfull, 'The password does not match');
    } else {
        showSuccess(confirmPasswordfull);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /([\w\.]+)@northeastern\.edu/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min) => length < min  ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        
            window.location.href="calculator.html";  
            passvalue()
          

    }
});


const debounce = (fn, delay = 10) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));

function passvalue(){
    var firstname=document.getElementById("username").value;
    localStorage.setItem("textvalue",firstname);
    return false;
}

