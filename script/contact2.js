// $('#form-contact').on('submit', function(event) {
//     event.preventDefault(); // prevent reload
    
//     var formData = new FormData(this);
//     formData.append('service_id', 'service_x0sqggi');
//     formData.append('template_id', 'template_u9ywnh5');
//     formData.append('user_id', 'user_kqRL6JF5N8VXvL0nfvVtm');
 
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// });

 (function () {
        emailjs.init("user_kqRL6JF5N8VXvL0nfvVtm");
      })();

emailjs.sendForm('service_x0sqggi', 'template_u9ywnh5', '#form-contact')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });