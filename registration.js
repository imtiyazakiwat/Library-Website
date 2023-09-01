// registration.js
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = registrationForm.name.value;
  const username = registrationForm.username.value;
  const email = registrationForm.email.value;
  const mobile = registrationForm.mobile.value;
  const village = registrationForm.village.value;
  const age = parseInt(registrationForm.age.value);
  const password = registrationForm.password.value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Save additional user information to Firestore
    await firebase.firestore().collection("users").doc(user.uid).set({
      name,
      username,
      email,
      mobile,
      village,
      age,
    });

    alert(`Registration successful! Welcome, ${username}!`);
  } catch (error) {
    alert(`Registration failed. Error: ${error.message}`);
  }
});
