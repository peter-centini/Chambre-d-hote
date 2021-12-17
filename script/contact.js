// const formElement = document.getElementById("form-contact");

// formElement.addEventListener("submit", function (event) {
//   event.preventDefault();
//   Swal.fire("Nous vous contacterons bientôt, stay tuned!");
// });



// window.onload = function () {
//   document.getElementById('form-contact').addEventListener('submit', function (event) {
//     event.preventDefault();
//     // generate a five digit number for the contact_number variable
//     this.contact_number.value = Math.random() * 100000 | 0;
//     // these IDs from the previous steps
//     emailjs.sendForm('service_x0sqggi', 'template_u9ywnh5', 'form-contact', this)
//       .then(function () {
//         console.log('SUCCESS!');
//       }, function (error) {
//         console.log('FAILED...', error);
//       });
//   });
// }
 (function () {
        emailjs.init("user_kqRL6JF5N8VXvL0nfvVtm");
      })();

function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  var templateParams = {
    from_name: 'fullName',
    from_email: 'userEmail',
    message: 'usermessage'
};
  
  emailjs.send('service_x0sqggi','template_u9ywnh5', templateParams)
   .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
}