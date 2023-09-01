// admin.js
const userTable = document.getElementById("user-list");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in (admin).
    displayUsers();
  } else {
    // No user is signed in.
    window.location.href = "login.html"; // Redirect to login if not authenticated.
  }
});

function displayUsers() {
  const usersRef = firebase.database().ref("users");

  usersRef.once("value")
    .then((snapshot) => {
      userTable.innerHTML = ""; // Clear previous data.

      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        const userRow = document.createElement("tr");

        userRow.innerHTML = `
          <td>${userData.username}</td>
          <td>${userData.email}</td>
          <td>${new Date(userData.registrationDate).toLocaleDateString()}</td>
        `;

        userTable.appendChild(userRow);
      });
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}
