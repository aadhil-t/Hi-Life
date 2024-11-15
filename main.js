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
});
