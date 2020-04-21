const form = document.querySelector('.signup-form');
const namePattern = /^[a-z A-Z]{6,20}$/;
const addressPattern = /^[a-z A-Z 0-9 \-/]{15,50}$/;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



form.name.addEventListener('keyup', e => {

    if (namePattern.test(e.target.value)) {

        form.name.setAttribute('class', 'success');

    } else {
        form.name.setAttribute('class', 'error');
    }
});

//email testing
form.email.addEventListener('keyup', e => {

    if (emailPattern.test(e.target.value)) {

        form.email.setAttribute('class', 'success');
    } else {
        form.email.setAttribute('class', 'error');
    }
});




//Address

form.address.addEventListener('keyup', e => {
    if (addressPattern.test(e.target.value)) {
        form.address.setAttribute('class', 'success');
        c++;

    } else {
        form.address.setAttribute('class', 'error');
    }
});



