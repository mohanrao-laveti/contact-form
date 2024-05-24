document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("response").textContent = "Message sent successfully!";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        } else {
            document.getElementById("response").textContent = "There was a problem sending your message. Please try again later.";
        }
    };

    xhr.send(JSON.stringify({ name: name, email: email, message: message }));
});
