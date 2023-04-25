// Smooth scrolling to anchor links
$('a[href^="#"]').click(function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

// Get form element
const form = document.querySelector('form');

// Add submit event listener
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent form submission

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create mailto URL
  const mailtoUrl = `mailto:cquiogue@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  // Open mailto URL in new window
  window.open(mailtoUrl, '_blank');
});
