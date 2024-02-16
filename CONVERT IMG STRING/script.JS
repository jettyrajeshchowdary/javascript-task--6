   // Make a request to the server to convert the image


function convertImageToString() {
    fetch('/convertImageToString') 
      .then(response => response.text())
      .then(data => {
        document.getElementById('imageString').innerText = data; // Display the converted string
      });
  }
  