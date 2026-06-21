// Welcome message
function showWelcome() {
  let h = new Date().getHours();
  let msg = "Hello";

  if (h < 12) msg = "Good morning";
  else if (h < 18) msg = "Good afternoon";
  else msg = "Good evening";

  let el = document.getElementById("welcome-msg");
  if (el) el.textContent = msg + "!";
}

// Form validation
function validateForm(e) {
  e.preventDefault();

  let name = document.getElementById("f-name").value;
  let email = document.getElementById("f-email").value;
  let msg = document.getElementById("f-message").value;

  if (name === "" || email === "" || msg === "") {
    alert("Fill all fields!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email!");
    return false;
  }

  alert("Form submitted successfully!");
  document.getElementById("contact-form").reset();
  return false;
}