function validateFname(fname) {
    //make sure not empty
    if (fname.length=0) {
        return "First name cannot be empty";
    };

    //Check that the name only contains letters and spaces
    if (!fname.match(/^[a-zA-z\s]+$/)) {
        return "First name can only contain letters and spaces";
    };

    //Check length of fname
    if (fname.length > 15) {
        return "First name must be 15 characters or less";
    };
    if (fname.length < 2) {
        return "First name must be at least 2 characters long";
    };

    //name is valid
    return "";
};

function validateLname(lname) {
    //make sure not empty
    if (lname.length=0) {
        return "Last name cannot be empty";
    };

    //Check that the name only contains letters and spaces
    if (!lname.match(/^[a-zA-z\s]+$/)) {
        return "Last name can only contain letters and spaces";
    };

    //Check length of fname
    if (lname.length > 15) {
        return "Last name must be 15 characters or less";
    };
    if (lname.length < 2) {
        return "Last name must be at least 2 characters long";
    };

    //name is valid
    return "";
};

function validateEmail(email) {
    //Make sure the email is not empty
    if (email.length == 0) {
        return "Email cannot be empty";
    }

    //Check that the email contains an @ symbol and a .
    if (!email.match(/^[^@]+@[^@.]+\.[^@]*\w\w$/)) {
        return "Invalid email address";
    }

    //Make sure the @ symbol is not the first character
    if (email.indexOf("@") == 0) {
        return "Invalid email address";
    }

    //Make sure the email is not too long
    if (email.match(/\s/)) {
        return "Email cannot contain spaces";
    }

    if (email.length > 100) {
        return "Email must be less that 100 characters";
    }

    //Email valid
    return "";
};

function validateTextarea(textarea) {
    //Make sure not empty
    if (textarea.length == 0) {
        return "Textarea cannot be empty";
    }

    //Check the length of the textarea
    if (textarea.length > 1000) {
        return "Textarea must be 1000 characters or fewer";
    }

    //Textarea is valid
    return "";
}

function validateForm() {
    //Get form values
    var firstName = document.getElementById("fname"),value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

    //Validate fname
    var fnameError = validateFname(fname);
    if (fnameError) {
        alert(fnameError);
        return false;
    }

    //Validate lname
    var lnameError = validateLname(lname);
    if (lnameError) {
        alert(lnameError);
        return false;
    }

    //Validate email
    var emailError = validateEmail(email);
    if (emailError) {
        alert(emailError);
        return false;
    }

    //Validate textarea
    var subjectError = validateSubject();
    if (subjectError) {
        alert(subjectError);
        return false;
    }

    //Form is valid
    alert("Form submitted successfully!");
    return true
}

//Button mouseover/mouse out
const mySubmitBtn = document.getElementById("my-submit")


mySubmitBtn.addEventListener("mouseover", function () {
  mySubmitBtn.style.backgroundColor = "blue"
})

mySubmitBtn.addEventListener("mouseout", function () {
    mySubmitBtn.style.backgroundColor = "#caf5fa"
  })
