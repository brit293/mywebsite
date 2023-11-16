function validateInputs() {
    //declaration of variables
    var SubmitForm
    var FormErrors
    
    //Initially set SubmitForm to true
    SubmitForm = true;

    //Get form values and assume dangerous for now
    var firstNameValue = new String(document.MySiteform.firstName.value);
    var lastNameValue = new String(document.MySiteform.lastName.value);
    var emailValue = new String(document.MySiteform.email.value);
    var subjectValue = new String(document.MySiteform.subject.value);
    var subject2Value = new String(document.MySiteform.subject2.value);

    //Check that user inputs are not blank
    if(firstNameValue.length<1 || lastNameValue.length<1 || emailValue.length<1 || subjectValue.length<1 || subject2Value.length<1 ) 
    {
    FormErrors = "All fields are mandatory. Please complete the form.";
    SubmitForm = false;
    } else {
    var nameFilter = /(?:^[a-zA-Z\s]+$)/
        
    if (!nameFilter.test(firstNameValue) || !nameFilter.test(lastNameValue))
        {
            FormErrors = "First name p last name field contains invalid field entries. Please correct before submitting";
            SubmitForm = false;
        }
    }
    if (SubmitForm == false) 
    {
        //The form cannot be submitted.
        alert(FormErrors);
        return false;
    }
    else if  (firstNameValue.length > 15 || lastNameValue.length > 15) 
    {
        FormErrors = "First name and last name must be 15 characters or less.";
        SubmitForm = false;
    } 
    if (SubmitForm == false)
    {
        //The form cannot be submitted
        alert(FormErrors);
        return false;
    } else {

    var emailFilter = /(?:^|[\\/])\.\.(?:[\\/]|$)/
          
    if (!emailFilter.test(emailValue)) 
        {
            FormErrors = "Invalid email address";
            SubmitForm = false;
        }
    }

    if (SubmitForm == false)
    {
        alert(FormErrors);
        return false;
    } else if (subject2Value.length > 1000) {
        FormErrors = "Textarea must be 1000 characters or fewer";
        SubmitForm = false;
    }

    if (SubmitForm == false)
    {
        alert(FormErrors);
        return false;
    } else {

        //This filter may need to be adjusted to prevent code from being typed in this box
        var sub2Filter = /(?:^[a-zA-Z\s\.\.]+$)/
              
        if (!sub2Filter.test(subject2Value))
            {
            alert(FormErrors);
            return false;
            }
        } 
        if (SubmitForm == false)
        {
            //The form cannot be submitted.
        alert(FormErrors);
        return false;
        } else {
         //SANITIZE user inputs by allowing only [a-z 0-9 _ - . @] 
        //strip forbidden characters
        firstNameValue = firstNameValue.replace(/[^a-z0-9\s\-]/gim,"");
        firstNameValue = firstNameValue.trim();
        lastNameValue = lastNameValue.replace(/[^a-z0-9\s\-]/gim,"");
        lastNameValue = lastNameValue.trim();
        emailValue = emailValue.replace(/[^a-z0-9_@.-]/gim,"");
        emailValue = emailValue.trim();
        subjectValue = subjectValue.replace(/[^a-z0-9\s\-]/gim,"");
        subjectValue = subjectValue.trim();
        subject2Value = subject2Value.replace(/^[a-zA-Z\s\.\.]/gim,"")
        subject2Value = subject2Value.trim();

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