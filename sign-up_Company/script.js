document.addEventListener("DOMContentLoaded", function () {
    var images = ["k1.jpg", "k2.jpg", "k3.jpg"]; // Add more image URLs as needed
    var index = 0;
    var imgElement = document.getElementById("slideshow-img");
  
    function changeImage() {
      imgElement.src = images[index];
      index = (index + 1) % images.length;
    }
  
    setInterval(changeImage, 8990); // Change image every 5 seconds
  });