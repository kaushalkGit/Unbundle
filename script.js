// Dropdown toggle for Why Choose and FAQ
function toggleDropdown(item) {
  item.classList.toggle('open');
  // Accordion behavior for FAQ
  if (item.classList.contains('faq-item')) {
    document.querySelectorAll('.faq-item').forEach(function(el) {
      if (el !== item) el.classList.remove('open');
    });
  }
}

// Modal functions
function openModal(formId) {
  document.getElementById('consultModal').style.display = 'flex';
  setTimeout(function() {
    document.getElementById('consultModal').scrollIntoView({behavior: "smooth"});
  }, 100);
}
function closeModal() {
  document.getElementById('consultModal').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'none';
  document.getElementById('consultForm').reset();
}

// Form submit
function submitForm(e, formId) {
  e.preventDefault();
  if(formId === 'consultForm') {
    document.getElementById('formSuccess').style.display = 'block';
    setTimeout(closeModal, 1500);
  } else {
    alert("Thank you! We'll contact you soon.");
    document.getElementById(formId).reset();
  }
  return false;
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('consultModal');
  if (event.target === modal) closeModal();
}
