document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add code to handle form submission, like sending an email or saving data.
    // For now, let's just log the form data.
    const formData = new FormData(this);
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  });
  