const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  // console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// listens to click on each panel then runs toggleOpen function
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// once CSS has transitionend runs toggleActive
