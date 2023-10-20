const form = document.getElementById("form")
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const subject2 = document.getElementById("subject2");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function validateInputs() {
    //Get form values
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const subject2Value = subject2.value;

    if(firstNameValue === '') {
        setError(firstNameValue, 'First Name is required');
    } else if (!firstName.match(/^[a-zA-z\s]+$/)) {
        setError(firstName, 'First name can only contain letters and spaces')
    } else if  (firstNameValue.length > 15) {
        setError(firstName,'First name must be 15 characters or less')
    } else if (firstNameValue.length < 2) {
        setError(firstName, 'First name must be at least 2 characters long')
    } else {
        setSuccess(firstName)
    }

    if(!lastNameValue.match(/^[a-zA-z\s]+$/)) {
        setError(lastName, 'Last name can only contain letters and spaces')
    } else if  (lastNameValue.length > 15) {
        setError(lastName,'Last name must be 15 characters or less')
    } else {
        setSuccess(lastName)
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!email.match(/^[^@]+@[^@.]+\.[^@]*\w\w$/)) {
        setError(email, 'Invalid email address');
    } else if (email.indexOf("@") == 0) {
        setError(email, 'Invalid email address');
    } else if (email.match(/\s/)) {
        setError(email, 'Email cannot contain spaces');
    } else if (email.length > 100) {
        setError(email, 'Email must be less that 100 characters');
    } else {
        setSuccess(email)
    }

    if (subjectValue === '') {
        setError(subject, 'Subject is required')
    } else {
        setSuccess(subject)
    }

    if (subject2Value === '') {
        setError(subject2, 'Text is required')
    } else if (textarea.length > 1000) {
        setError(subject2, 'Textarea must be 1000 characters or fewer');
    } else {
        setSuccess(subject2)
    }

}

//Button mouseover/mouse out
const mySubmitBtn = document.getElementById("my-submit")


mySubmitBtn.addEventListener("mouseover", function () {
  mySubmitBtn.style.backgroundColor = "blue"
})

mySubmitBtn.addEventListener("mouseout", function () {
    mySubmitBtn.style.backgroundColor = "#caf5fa"
  })