document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error = document.getElementById("error");

  if (!name || !email || !message) {
    error.textContent = "Please fill all fields";
    error.style.color = "red";
  } else {
    alert("Message sent successfully!");
    error.textContent = "";
    this.reset();
  }
});
