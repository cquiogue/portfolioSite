function collapseNavbar() {
  // Get the navbar collapse element
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Collapse the navbar if it's not already collapsed
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }

  // Scroll to the target element
  var target = document.querySelector('#about');
  target.scrollIntoView({ behavior: 'smooth' });
}

// Listen for clicks on the document
document.addEventListener('click', event => {
  // Check if the click target is outside the navbar
  if (
    !navbarCollapse.contains(event.target) &&
    navbarCollapse.classList.contains('show')
  ) {
    // Collapse the navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.click();
  }
});
