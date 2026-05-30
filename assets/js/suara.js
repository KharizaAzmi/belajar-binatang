let currentAudio = null;

function playSound(id, card) {
  const audio = document.getElementById(id);

  document
    .querySelectorAll(".suara-card")
    .forEach((c) => c.classList.remove("playing"));

  card.classList.add("playing");

  if (!audio) {
    setTimeout(() => card.classList.remove("playing"), 1500);
    return;
  }

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = audio;

  audio.currentTime = 0;
  audio.play();
}

document.querySelectorAll("audio").forEach((audio) => {
  audio.addEventListener("ended", () => {
    document
      .querySelectorAll(".suara-card")
      .forEach((c) => c.classList.remove("playing"));

    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});
