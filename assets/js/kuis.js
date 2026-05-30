const soalKuis = [
  {
    pertanyaan: "Binatang apa yang ada di gambar ini?",
    emoji: "🐱",
    pilihan: ["Kucing", "Anjing", "Kelinci", "Harimau"],
    jawaban: 0
  },
  {
    pertanyaan: "Binatang mana yang hidup di air?",
    emoji: "🌊",
    pilihan: ["🐔 Ayam", "🐟 Ikan", "🐈 Kucing", "🐄 Sapi"],
    jawaban: 1
  },
  {
    pertanyaan: "Coba tebak — binatang apa yang bisa terbang?",
    emoji: "☁️",
    pilihan: ["🐘 Gajah", "🐊 Buaya", "🦅 Elang", "🐟 Ikan"],
    jawaban: 2
  },
  {
    pertanyaan: "Binatang ini hidup di mana?",
    emoji: "🐘",
    pilihan: ["Di laut", "Di darat", "Di udara", "Di sungai"],
    jawaban: 1
  },
  {
    pertanyaan: "Bagaimana cara kita menyayangi binatang?",
    emoji: "❤️",
    pilihan: ["Memukulnya", "Memberi makan", "Mengurungnya", "Menakutinya"],
    jawaban: 1
  }
];

let soalSaatIni = 0;
let skorBenar = 0;

function tampilkanSoal() {
  const soal = soalKuis[soalSaatIni];
  const progress = ((soalSaatIni) / soalKuis.length) * 100;

  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('progressText').textContent = `Soal ${soalSaatIni + 1} / ${soalKuis.length}`;

  document.getElementById('questionText').innerHTML =
    `<span class="emoji">${soal.emoji}</span>${soal.pertanyaan}`;

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';

  soal.pilihan.forEach((pilihan, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = pilihan;
    btn.onclick = () => pilihJawaban(index);
    grid.appendChild(btn);
  });

  document.getElementById('feedbackBox').style.display = 'none';
  document.getElementById('btnNext').style.display = 'none';
}

function pilihJawaban(indexDipilih) {
  const soal = soalKuis[soalSaatIni];
  const buttons = document.querySelectorAll('.option-btn');
  const feedback = document.getElementById('feedbackBox');

  buttons.forEach(btn => btn.disabled = true);

  if (indexDipilih === soal.jawaban) {
    buttons[indexDipilih].classList.add('correct');
    feedback.textContent = '✅ Benar! Hebat sekali!';
    feedback.className = 'kuis-feedback feedback-correct';
    skorBenar++;
  } else {
    buttons[indexDipilih].classList.add('wrong');
    buttons[soal.jawaban].classList.add('correct');
    feedback.textContent = `❌ Belum tepat. Jawabannya: ${soal.pilihan[soal.jawaban]}`;
    feedback.className = 'kuis-feedback feedback-wrong';
  }

  feedback.style.display = 'block';

  const btnNext = document.getElementById('btnNext');
  btnNext.style.display = 'block';

  if (soalSaatIni === soalKuis.length - 1) {
    btnNext.textContent = 'Lihat Hasil 🎉';
  } else {
    btnNext.textContent = 'Soal Berikutnya →';
  }
}

function nextQuestion() {
  soalSaatIni++;

  if (soalSaatIni >= soalKuis.length) {
    tampilkanHasil();
  } else {
    tampilkanSoal();
  }
}

function tampilkanHasil() {
  document.getElementById('quizArea').style.display = 'none';
  document.getElementById('progressFill').style.width = '100%';
  document.getElementById('progressText').textContent = 'Selesai!';

  const hasil = document.getElementById('hasilBox');
  hasil.style.display = 'block';

  const nilai = Math.round((skorBenar / soalKuis.length) * 100);
  document.getElementById('hasilNilai').textContent = nilai + '/100';

  let emoji, label;
  if (nilai === 100) {
    emoji = '🏆'; label = 'Sempurna! Kamu bintang hari ini!';
  } else if (nilai >= 80) {
    emoji = '⭐'; label = 'Bagus sekali! Hampir sempurna!';
  } else if (nilai >= 60) {
    emoji = '😊'; label = 'Bagus! Terus belajar ya!';
  } else {
    emoji = '💪'; label = 'Semangat! Coba lagi yuk!';
  }

  document.getElementById('hasilEmoji').textContent = emoji;
  document.getElementById('hasilLabel').textContent = label;
}

function resetKuis() {
  soalSaatIni = 0;
  skorBenar = 0;
  document.getElementById('quizArea').style.display = 'block';
  document.getElementById('hasilBox').style.display = 'none';
  tampilkanSoal();
}

// Mulai kuis
tampilkanSoal();
