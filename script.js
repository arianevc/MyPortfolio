document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Validate Email
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById("emailError");
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validate Subject
    let subject = document.getElementById("subject").value.trim();
    let subjectError = document.getElementById("subjectError");
    if (subject === "" || /^\d+$/.test(subject) ) {
        subjectError.style.display = "block";
        isValid = false;
    } else {
        subjectError.style.display = "none";
    }

    // Validate Message
    let message = document.getElementById("message").value.trim();
    let messageError = document.getElementById("messageError");
    if (message.length < 10) {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    if (isValid) {

        sendMail();
        document.getElementById("email").value=""
        document.getElementById("subject").value=""
        document.getElementById("message").value=""

        // You can add form submission logic here (e.g., sending data to backend)
    }
});

function sendMail()
{
    let parms={
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_47xtp4r","template_xm1qt1n",parms)
    .then(() => {
        alert("Email Sent!!!");
    })
    .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send email. Please try again.");
    });
}
