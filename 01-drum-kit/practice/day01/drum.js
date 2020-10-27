const keys = document.querySelectorAll(".drum__key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playAudio(e) {
  const currentKey = e.keyCode;
  const audio = document.querySelector(`audio[data-key-code="${currentKey}"]`);
  const key = document.querySelector(
    `.drum__key[data-key-code="${currentKey}"]`
  );
  if (audio === null) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function init() {
  window.addEventListener("keydown", playAudio);
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
}

init();
