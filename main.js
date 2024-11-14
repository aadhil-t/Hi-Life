

document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('enquiryform');
    const responseMessage = document.getElementById('responseMessage');

    if (enquiryForm && responseMessage) {
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var formData = new FormData(this);

            fetch('submit_form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                
                responseMessage.style.display = 'block';
                responseMessage.innerText = 'We have received your enquiry, We will contact you soon.';
                
                setTimeout(() => {
                    responseMessage.style.display = 'none';
                }, 5000);
                
                enquiryForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                
                responseMessage.style.display = 'block';
                responseMessage.innerText = 'Oops! Something went wrong. Please try again later.';
            });
        });
    } else {
        console.error('Form or response message element not found');
    }
});
