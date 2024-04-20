const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("myDropdown");

function toggleDropdown() {
  dropdownContent.classList.toggle("show");
}


dropdownBtn.addEventListener('click', toggleDropdown);