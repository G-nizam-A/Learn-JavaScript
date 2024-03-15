const form = document.getElementById('contactForm');
        
function sendEmail() {
    console.log('hiii');

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nizamcs10@gmail.com",
        Password : "54957379CD06F860457BEBD2EE609D060A41",
        To : "nizamcs10@gmail.com",
        From : "nizamcs10@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => console.log("Message sent successfully",message)
    );

}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})