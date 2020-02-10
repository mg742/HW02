
function form()
{

    var firstName=document.getElementById("FirstName").value;

    var lastName=document.getElementById("LastName").value;

    var email=document.getElementById("Email").value;

    var nameExpression= /^[A-Za-z]+$/;

    var emailExpresson=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstName=="" || lastName=="" || email=="")
    {

        alert("Enter all fields");
        return false;//not allow to submit form
    }

    else if(!nameExpression.test(firstName))
    {
        alert("First name should have letters only");
        return false;
    }
    else if(!nameExpression.test(lastName))
    {

        alert("Last name should have letters only");
        return false;
    }
    else if(!emailExpresson.test(email))
    {

        alert("Enter valid email");
        return false;
    }
    else{

        alert("Form submitted successfully");
    }
}

