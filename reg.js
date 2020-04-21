const form = document.querySelector('.signup-form');
const namePattern = /^[a-z A-Z]{6,20}$/;
const addressPattern = /^[a-z A-Z 0-9 \-/]{15,50}$/;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//let c = 0;
//const input = document.querySelector('input');


/*const feedback = document.querySelector('.feedback');
form.addEventListener('submit', e => {
    e.preventDefault();
    //Validation
    const name = form.name.value;
    const namePattern = /^[a-zA-Z]{6,12}$/;
    if (namePattern.test(name)) {
        //good info
        feedback.textContent = 'Valid'
    } else {
        feedback.textContent = 'Not Valid'
    }
});*/
//live feedback
//Name
/*function validateForm() {
    var x = document.forms["signup-form"]["name"].value;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        return false;
    }
}*/

form.name.addEventListener('keyup', e => {

    if (namePattern.test(e.target.value)) {
        c++;
        form.name.setAttribute('class', 'success');

    } else {
        form.name.setAttribute('class', 'error');
    }
});

//email testing
form.email.addEventListener('keyup', e => {

    if (emailPattern.test(e.target.value)) {
        c++;
        form.email.setAttribute('class', 'success');
    } else {
        form.email.setAttribute('class', 'error');
    }
});

//Gender


//Address

form.address.addEventListener('keyup', e => {
    if (addressPattern.test(e.target.value)) {
        form.address.setAttribute('class', 'success');
        c++;

    } else {
        form.address.setAttribute('class', 'error');
    }
});

form.birthday.addEventListener('input', e => {
    console.log(e.target.value);

});

/*
function myFunction() {
    if ((document.getElementById("gender").value) == 'select') {
        form.address.setAttribute('class', 'error');

    }
    if ((document.getElementById("birthday").value) == "")
        alert("fuku")
    if {
        var x = document.forms["signup-form"]["name"].value;
        if (x == "" || x == null) {
            alert("Name must be filled out");

        }
    }
    return false;
}

/*

/*function ValidateEmail(mail) {
    if (.test(form.email.value)) {
        form.name.setAttribute('class', 'success');
    } else {
        form.name.setAttribute('class', 'error');
    }
}*/

//email testing
form.email.addEventListener('keyup', e => {
    if (emailPattern.test(e.target.value)) {
        form.email.setAttribute('class', 'success');
    } else {
        form.email.setAttribute('class', 'error');
    }
});
/*submit button
function validation() {
    let name = document.getElementById('user').value;
}*/