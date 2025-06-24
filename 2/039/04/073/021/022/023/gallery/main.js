"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 20000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();

document.querySelectorAll('#gallery img').forEach(img => {
  img.addEventListener('click', function() {
    const overlay = document.getElementById('popup-overlay');
    const popupImage = document.getElementById('popup-image');
    const caption = document.getElementById('popup-caption');
    
    popupImage.src = this.src;
    popupImage.alt = this.alt;
    caption.textContent = this.parentElement.querySelector('figcaption').textContent;
    overlay.style.display = 'flex';
  });
});

// Fungsi untuk menutup popup
function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
}

// Event listener untuk tombol close dan overlay
document.getElementById('popup-close').addEventListener('click', closePopup);
document.getElementById('popup-overlay').addEventListener('click', function(e) {
  if(e.target === this) closePopup();
});