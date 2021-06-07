$("#confirmCode").hide();

const registrationCode = Math.floor(Math.random() * 9999) + 1000;

$("#myBtn").click(function(){
    const userEmail = $("#userEmail").val();
    sendEmail(userEmail);
    $("#emailBlock").hide();
    $("#confirmCode").show();
});

$("#registerButton").click(function(){
    const userCode = Number($("#code").val());
    if(userCode === registrationCode){
        alert("VSE OKAY");
    }else{
        alert("NE PRAVILNO!");
    }
});

function sendEmail(userEmail){
    (function() {
        emailjs.init("user_ff1FMAT2kdXu57dcA5kiB");
    })();

    var templateParams = {
        from_name: 'ITSTEP',
        to_name: userEmail,
        message: 'Your registration code: ' + registrationCode,
        to_email: userEmail,
        reply_to: ''
    };
    
    emailjs.send('service_rh2qval', 'template_9ytb7ap', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}