const form = document.querySelector('.signup-form');
const namePattern = /^[a-z A-Z]{6,20}$/;
const addressPattern = /^[a-z A-Z 0-9 \-/]{15,50}$/;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const input = document.querySelector('input');


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
form.name.addEventListener('keyup', e => {
    if (namePattern.test(e.target.value)) {
        form.name.setAttribute('class', 'success');
    } else {
        form.name.setAttribute('class', 'error');
    }
});

//Address

form.address.addEventListener('keyup', e => {
    if (addressPattern.test(e.target.value)) {
        form.address.setAttribute('class', 'success');
    } else {
        form.address.setAttribute('class', 'error');
    }
});


/*function ValidateEmail(mail) {
    if (.test(form.email.value)) {
        form.name.setAttribute('class', 'success');
    } else {
        form.name.setAttribute('class', 'error');
    }
}*/