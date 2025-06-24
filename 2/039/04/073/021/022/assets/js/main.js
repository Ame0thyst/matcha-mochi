document.addEventListener("DOMContentLoaded", function () {
        // Create confetti elements
        for (let i = 0; i < 50; i++) {
          createConfetti();
        }

        // Button click event
        document
          .getElementById("enterBtn")
          .addEventListener("click", function () {
            const hiddenBook = document.getElementById("hiddenBook");
            hiddenBook.style.transform = "scale(1)";
            hiddenBook.style.opacity = "1";

            // Trigger confetti animation
            const confetti = document.querySelectorAll(".confetti");
            confetti.forEach((c) => {
              c.style.animation = `fall ${
                Math.random() * 3 + 2
              }s linear forwards`;
              c.style.animationDelay = `${Math.random() * 2}s`;
            });
          });
      });

      function createConfetti() {
        const colors = ["#E5A4B3", "#BDA8D2", "#9CBFD9", "#A6D5A8", "#EFD9A1"];
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Random position
        confetti.style.left = `${Math.random() * 100}%`;

        // Random color
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        // Random rotation
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);
      }