const clickableImages = document.getElementsByClassName("clickableImage");
const fullscreenModal = document.getElementById("fullscreenModal");
const fullscreenImage = document.getElementById("fullscreenImage");

for (let i = 0; i < clickableImages.length; i++) {
  clickableImages[i].onclick = function () {
    fullscreenImage.src = this.src;
    fullscreenModal.style.display = "flex";

    fullscreenImage.style.animation = "none";
    void fullscreenImage.offsetWidth;
    fullscreenImage.style.animation = "zoomIn 0.4s forwards";
  };
}

function closeModal() {
    fullscreenModal.style.display = "none";
}
