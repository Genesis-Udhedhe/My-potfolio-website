function changeBackground() {
  const colors = [ '#ffe4e1', '#d3f9d8', '#fff8dc', '#ffffff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

let images = [
  "Images/Udhedhe.jpg",
  "Images/Queen.jpg",
  "Images/Ufoma.png",
  "Images/Mum 2.jpg",
  "Images/Segun.jpg"
];
let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("profileImage").src = images[index];
}

function previousImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("profileImage").src = images[index];
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


