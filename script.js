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
