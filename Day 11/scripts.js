// elements
const   player = document.querySelector('.player'),
        video = player.querySelector('.viewer'),
        progress = player.querySelector('.progress'),
        progressBar = player.querySelector('.progress__filled'),
        toggle = player.querySelector('.toggle'),
        skipButtons = player.querySelectorAll('[data-skip'),
        ranges = player.querySelectorAll('.player__slider');

// functions
function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value;
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    video.currentTime = video.duration * (e.offsetX / progress.offsetWidth);
}

// event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', rangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', e => e.target.addEventListener('mousemove', rangeUpdate)));
ranges.forEach(range => range.addEventListener('mouseup', e => e.target.removeEventListener('mousemove', rangeUpdate)));
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', e => e.target.addEventListener('mousemove', scrub));
progress.addEventListener('mouseup', e => e.target.removeEventListener('mousemove', scrub));