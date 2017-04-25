//Hints are shown even when form is valid
//Solution: hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

//Hide hints
$("form span").hide();

//Logic helpers
function isUsernameValid() {
    return $username.val().length > 8;
}

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordsMatching() && isUsernameValid();
}

function usernameEvent () {
    if(isUsernameValid()) {
        $username.next().hide();
    } else {
        $username.next().show();
    }
}

//passwordEvent is an event handler
function passwordEvent () {
       //find out if password is valid
        if(isPasswordValid()) {
        //hide it if valid
        $password.next().hide(); //targets the span after the input
     
    } else {
           //else show hint
        $password.next().show();
    }  
}

function confirmPasswordEvent () {
     //find out if password and confirmation match
    if(arePasswordsMatching()) {
         //hide hint if matched
        $confirmPassword.next().hide();
    
    } else {
        //else show hint
        $confirmPassword.next().show();
    }
   
}

/*//keyup works when you finish pressing on keyboard (when key on board is literally released), 
//having both focus and keyup provides a better experience because you want to tell the user to make it 8 characters as soon as they click on the input field this is where focus comes handy. Focus isn't enough because even if you type 9 characters, for example, it won't hide the span element. That's because you would have to click somewhere else and then click on the same input again to hide it. Basically, you would have to "focus" in on the text box again to execute the code. That's why we need keyup as well. Each time a user is d-nhnhn one pressing a key or finished typing, the passwordEvent will be executed and the span will be either hidden or shown according to the number of characters. You don't have to necessarily chain these together!*/

//enable or disable submit button
function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//For the previous line of code, we want to call the confirmation events as soon as we're working with our password, that wa

//When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//this needs to be executed when the page loads
enableSubmitEvent();














//when event happens on password input
//focus targets the focus event which is when the user clicks on the input
//following code doesn't work because when you type in 9 characters, the hint doesn't disappear. that's because you only deal with this focus event.
/*
$("#password").focus(function () {
       //find out if password is valid
    if($(this).val().length > 8) {
        //hide it if valid
        $(this).next().hide(); //targets the span after the input
     
    } else {
           //else show hint
        $(this).next().show();
    }
        
});
 */

