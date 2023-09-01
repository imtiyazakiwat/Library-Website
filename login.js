// login.js
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Additional login logic (if needed)
    // ...

    alert(`Welcome back, ${user.email}!`);
  } catch (error) {
    document.getElementById("error-message").textContent = `Login failed. Error: ${error.message}`;
  }
});
