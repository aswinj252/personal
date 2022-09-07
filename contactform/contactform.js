// jQuery(document).ready(function($) {
//   "use strict";

//   //Contact
//   $('form.contactForm').submit(function() {
//     var f = $(this).find('.form-group'),
//       ferror = false,
//       emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//     f.children('input').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'email':
//             if (!emailExp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'checked':
//             if (! i.is(':checked')) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'regexp':
//             exp = new RegExp(exp);
//             if (!exp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     f.children('textarea').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     if (ferror) return false;
//     else var str = $(this).serialize();
//     var action = $(this).attr('action');
//     if( ! action ) {
//       action = 'contactform/contactform.php';
//     }
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: str,
//       success: function(msg) {
//         // alert(msg);
//         if (msg == 'OK') {
//           $("#sendmessage").addClass("show");
//           $("#errormessage").removeClass("show");
//           $('.contactForm').find("input, textarea").val("");
//         } else {
//           $("#sendmessage").removeClass("show");
//           $("#errormessage").addClass("show");
//           $('#errormessage').html(msg);
//         }

//       }
//     });
//     return false;
//   });

// });
// var nameError = document.getElementById('name-error');
// var numError = document.getElementById('no-error');
// var emailError = document.getElementById('email-error');
// var msgError = document.getElementById('msg-error');
// var submitError = document.getElementById('submit-error');

// function validateName(){
//      var name = document.getElementById('contact-name').value;

//      if(name.length == 0){
         
//         nameError.innerHTML =  'name is required';
//         return false;
//      }
//      if(!name.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/))
//      {
//         nameError.innerHTML = 'name is required';
//         return false;

//      }
//      nameError.innerHTML =  'valid';
//      return true;

// }
// function validateNum(){
//     var num = document.getElementById('contact-num').value;
// if(num.length==0){
//     numError.innerHTML = 'Enter number'
//     return false;

// }
// if(num.length!==10){
//     numError.innerHTML = 'Number should be  10 digits'
//     return false;

// }
// if(!num.match(/^[0-9]{10}$/))
// {
//     numError.innerHTML= 'Only digits';
//     return false;

// }
// numError.innerHTML='valid';
// return true;


// }
// function validateEmail(){
//     var email = document.getElementById('contact-email').value;

// if(!email.match( /^[a-zA-Z\._\-[0-9]*[@][a-zA-Z]*[[\.][a-zA-Z]{2,4}$/ )){
//     emailError.innerHTML = 'Invalid Email';
//     return false;

// }
//  emailError.innerHTML='valid';
//  return true;

// }
// function validateMsg(){
// var message = document.getElementById('contact-msg').value;
//  if(message.length==0){
//     msgError.innerHTML = 'Enter mesage';
//     return false;

//  }

// msgError.innerHTML='valid'
// return true;

// }
//  function validateSubmit(){
//     if(!validateName()||!validateNum()||! validateEmail()||!validateMsg()){
//         submitError.style.display='block';

//         submitError.innerHTML='Fill all blocks';
//         setTimeout(function(){submitError.style.display='none';}, 3000);
//         return false;
//     }

//  }
