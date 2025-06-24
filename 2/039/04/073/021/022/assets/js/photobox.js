document.addEventListener("DOMContentLoaded", function () {
        // Animation for photo cards with staggered delay
        const photoCards = document.querySelectorAll(".photo-card");

        photoCards.forEach((card, index) => {
          // Set initial state
          card.style.transitionDelay = `${index * 0.15}s`;

          // Animate cards when they come into view
          setTimeout(() => {
            card.classList.add("animate");
          }, 500 + index * 150);
        });

        // Animation for special note section - fade in when scrolled to
        const specialNote = document.getElementById("specialNote");
        const createButton = document.getElementById("createButton");

        // Function to check if an element is in viewport
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
          );
        }

        // Function to handle scroll animations
        function handleScrollAnimations() {
          if (isInViewport(specialNote) && specialNote.style.opacity !== "1") {
            specialNote.style.transition = "opacity 1s ease, transform 1s ease";
            specialNote.style.opacity = "1";
            specialNote.style.transform = "translateY(0)";
          }

          if (
            isInViewport(createButton) &&
            createButton.style.opacity !== "1"
          ) {
            createButton.style.transition =
              "opacity 1s ease, transform 1s ease";
            createButton.style.opacity = "1";
            createButton.style.transform = "translateY(0)";
          }
        }

        // Initial check and set up scroll listener
        handleScrollAnimations();
        window.addEventListener("scroll", handleScrollAnimations);

        // Set initial positions for animated elements
        specialNote.style.transform = "translateY(30px)";
        createButton.style.transform = "translateY(30px)";

        // Photo popup functionality
        const photoPopup = document.getElementById("photoPopup");
        const popupImage = document.getElementById("popupImage");
        const popupClose = document.getElementById("popupClose");
        const popupCaption = document.getElementById("popupCaption");
        const allPolaroids = document.querySelectorAll(".polaroid");

        // Open popup when clicking on a polaroid
        allPolaroids.forEach((polaroid) => {
          polaroid.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").src;
            const cardTitle =
              this.closest(".photo-card").querySelector("h3").textContent;
            const cardDesc =
              this.closest(".photo-card").querySelector("p").textContent;

            popupImage.src = imgSrc;
            popupCaption.textContent = cardTitle + " - " + cardDesc;
            photoPopup.classList.add("active");

            // Prevent body scrolling when popup is open
            document.body.style.overflow = "hidden";
          });
        });

        // Close popup when clicking the close button
        popupClose.addEventListener("click", function () {
          photoPopup.classList.remove("active");

          // Re-enable body scrolling
          document.body.style.overflow = "";
        });

        // Close popup when clicking outside the image
        photoPopup.addEventListener("click", function (e) {
          if (e.target === photoPopup) {
            photoPopup.classList.remove("active");

            // Re-enable body scrolling
            document.body.style.overflow = "";
          }
        });

        // Close popup with Escape key
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && photoPopup.classList.contains("active")) {
            photoPopup.classList.remove("active");

            // Re-enable body scrolling
            document.body.style.overflow = "";
          }
        });
      });