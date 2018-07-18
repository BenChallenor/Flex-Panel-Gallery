const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// listens to click on each panel then runs toggleOpen function
