var nameError = document.getElementById('name-error');
var numError = document.getElementById('no-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName(){
     var name = document.getElementById('contact-name').value;

     if(name.length == 0){
         
        nameError.innerHTML =  'name is required';
        return false;
     }
     if(!name.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/))
     {
        nameError.innerHTML = 'name is required';
        return false;

     }
     nameError.innerHTML =  'valid';
     return true;

}
function validateNum(){
    var num = document.getElementById('contact-num').value;
if(num.length==0){
    numError.innerHTML = 'Enter number'
    return false;

}
if(num.length!==10){
    numError.innerHTML = 'Number should be  10 digits'
    return false;

}
if(!num.match(/^[0-9]{10}$/))
{
    numError.innerHTML= 'Only digits';
    return false;

}
numError.innerHTML='valid';
return true;


}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

if(!email.match( /^[a-zA-Z\._\-[0-9]*[@][a-zA-Z]*[[\.][a-zA-Z]{2,4}$/ )){
    emailError.innerHTML = 'Invalid Email';
    return false;

}
 emailError.innerHTML='valid';
 return true;

}
function validateMsg(){
var message = document.getElementById('contact-msg').value;
 if(message.length==0){
    msgError.innerHTML = 'Enter mesage';
    return false;

 }

msgError.innerHTML='valid'
return true;

}
 function validateSubmit(){
    if(!validateName()||!validateNum()||! validateEmail()||!validateMsg()){
        submitError.style.display='block';

        submitError.innerHTML='Fill all blocks';
        setTimeout(function(){submitError.style.display='none';}, 3000);
        return false;
    }

 }
 