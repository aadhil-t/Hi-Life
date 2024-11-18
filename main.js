document.addEventListener("DOMContentLoaded", function () {
  const enquiryBtn = document.querySelectorAll(".enquire-btn a");

  enquiryBtn.forEach((link) => {
    link.addEventListener("click", function (event) {
      const projecttitle = link.getAttribute("data-project-title");

      document.getElementById("projectTitle").value = projecttitle;
    });
  });

  const enquiryForm = document.getElementById("enquiryform");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(this);

      fetch("submit_form.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          const baseUrl = `${window.location.origin}`;
          const redirectUrl = `${baseUrl}/hilife/thankyou.php`;
          window.location.href = redirectUrl;
          enquiryForm.reset();
        })

        .catch((error) => {
          console.error("Error:", error);
          alert("Oops! Something went wrong. Please try again later.");
        });
    });
  } else {
    console.error("Form or response message element not found");
  }


  //    CAROUSEL    //
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const carousel = document.querySelector('.carousel');
  const offset = -currentIndex * 100; 
 carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-scroll every 3 seconds
setInterval(moveToNextSlide, 4000);

});

