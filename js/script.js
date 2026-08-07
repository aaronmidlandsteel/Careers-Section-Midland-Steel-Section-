const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

  // mobile: tap "Careers" toggles the dropdown instead of navigating
  const careersDropdown = document.getElementById('careersDropdown');
  const careersToggle = document.getElementById('careersToggle');
  careersToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      careersDropdown.classList.toggle('open');
    }
  });

  document.querySelectorAll('.navlinks a:not(#careersToggle)').forEach(a=>{
    a.addEventListener('click', ()=> navLinks.classList.remove('open'));
  });
