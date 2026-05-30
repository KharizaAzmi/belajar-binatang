function playSound(id, card) {
  // Reset semua card
  document.querySelectorAll('.suara-card').forEach(c => c.classList.remove('playing'));
  card.classList.add('playing');

  // Coba putar audio jika file ada
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {
      // File audio belum ada, tampilkan teks saja
    });
    audio.onended = () => card.classList.remove('playing');
  } else {
    // Jika file audio belum ada, efek visual saja
    setTimeout(() => card.classList.remove('playing'), 1500);
  }
}
