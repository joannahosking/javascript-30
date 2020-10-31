const image = document.querySelector('#image');
const input = [].slice.call(document.querySelectorAll('input'));

input.forEach(function(i) {
  i.addEventListener('change', function() {
    if (this.name == 'spacing') {
      image.style.setProperty('--spacing', this.value + this.dataset.sizing);
    } else if (this.name == 'color') {
      image.style.setProperty('--color', this.value);
    } else {
      image.style.setProperty('--blur', this.value + this.dataset.sizing);
    }
  });
});