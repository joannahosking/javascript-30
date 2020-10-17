window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  // check if audio exists
  if(!audio) return;
  // play audio
  audio.play();
  
  // add playing css effect
  key.parentElement.className = 'keys playing';
  window.setTimeout(function() {
    document.querySelector('div[class="keys playing"]').className = 'keys';
  }, 100);
});