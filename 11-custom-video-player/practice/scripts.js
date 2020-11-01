const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggleButton = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skips = player.querySelectorAll("[data-skip]");

function scrup(e) {
  const playbackTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = playbackTime;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateProgress(e) {
  const percent = (e.offsetX / progress.offsetWidth) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateToggle() {
  toggleButton.innerHTML = video.paused ? "▶" : "⏸";
}

function playVideo() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateRange() {
  video[this.name] = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener("click", playVideo);
video.addEventListener("play", updateToggle);
video.addEventListener("pause", updateToggle);
video.addEventListener("timeupdate", handleProgress);

toggleButton.addEventListener("click", playVideo);
ranges.forEach((range) => {
  range.addEventListener("click", updateRange);
  range.addEventListener("mousemove", updateRange);
});
skips.forEach((button) => button.addEventListener("click", skip));

let mousedown = false;
progress.addEventListener("click", scrup);
progress.addEventListener("mousemove", (e) => mousedown && scrup(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
