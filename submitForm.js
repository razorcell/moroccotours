function submitForm(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get form data
  const formData = new FormData(document.getElementById("bookingForm"));

  // Make an asynchronous POST request to your server
  fetch("https://aivideoeditor.toolhubpro.online:4000/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);
      // Optionally, update the UI or perform other actions based on the server response
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors as needed
    });
}
