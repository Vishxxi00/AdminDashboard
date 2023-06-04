const form =document.getElementById("form");
const cmpName=document.getElementById("cmpName");
const cmpEmail =document.getElementById("cmpEmail");
const cmpPhone =document.getElementById("cmpPhone");
const cmpPosition =document.getElementById("Position");


form.addEventListener("submit", (e) => {
    // e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const cmpNameValue = cmpName.value.trim();
    const cmpEmail = cmpEmail.value.trim();
    const cmpPhoneValue = cmpPhone.value.trim();
    const cmpPositinValue = cmpPosition.value.trim();

    if(cmpNameValue === '') {
        setError(cmpName, 'full name is required');
    } else {
        setSuccess(cmpName);
    }

    if(cmpEmail === '') {
        setError(cmpEmail, 'Email is required');
    } else if (!isValidEmail(cmpEmail)) {
        setError(cmpEmail, 'Provide a valid email address');
    } else {
        setSuccess(cmpEmail);
    }

    if(cmpPhoneValue === '') {
        setError(cmpPhone, 'phone number is required');
    } else {
        setSuccess(cmpPhone);
    }

    if(cmpPositinValue === '') {
        setError(cmpPosition, 'location is required');
    } else {
        setSuccess(cmpPosition);
    }

};
   
