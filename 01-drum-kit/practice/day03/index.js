const keys = document.querySelectorAll(".drum-kit__key");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key-code="${e.keyCode}"]`);
  const key = document.querySelector(
    `.drum-kit__key[data-key-code="${e.keyCode}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
