let name, email, gender, address, birthday, graduation, tech
let forms = [];
//Event Listener for all Form Fields
$(document).on('keyup change','#name,#email,#address,#gender, #birthday, #graduation, .check', function () { 
    validateFormFields()
});

function validateFormFields() {
    forms[0] = $("#name").val();
    forms[1] = $("#email").val();
    forms[2] = $("#gender option:selected").val();
    forms[3] = $("#address").val()
    forms[4] = $('#birthday').val()
    forms[5] = $("#graduation option:selected").val();
    forms[6] = $('.check').is(":checked") ? $('.check:checked').val() : "";

    //Check The NUmber of Empty Fields
    const lengthOfEmptyFields = forms.filter(e => e == "").length;
    if(lengthOfEmptyFields == 0) {
        $('.submit-btn').removeAttr("disabled").css("backgroundColor", "#33d239a8");
    } else {
        $('.submit-btn').removeAttr("disabled").css("backgroundColor", "#6bc56ea8");
    }
}