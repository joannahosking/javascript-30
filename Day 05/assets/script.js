const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('mouseover', function() {
    panels.forEach(panel => panel.classList.remove('open'));
    this.classList.add('open');
}));