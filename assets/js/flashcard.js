const flashcards = [
  {
    emoji: "🐘",
    nama: "Gajah",
    info: `<strong>Gajah 🐘</strong>
      Tempat hidup: Darat 🌿<br/>
      Makanan: Rumput, daun, buah<br/>
      Suara: "Preet!"<br/>
      Fakta: Hewan darat terbesar di dunia!`
  },
  {
    emoji: "🐟",
    nama: "Ikan",
    info: `<strong>Ikan 🐟</strong>
      Tempat hidup: Air 💧<br/>
      Makanan: Ganggang, serangga kecil<br/>
      Bernapas dengan: Insang<br/>
      Fakta: Ada lebih dari 30.000 jenis ikan!`
  },
  {
    emoji: "🦅",
    nama: "Elang",
    info: `<strong>Elang 🦅</strong>
      Tempat hidup: Udara ☁️ & Darat<br/>
      Makanan: Ikan, tikus, kelinci<br/>
      Kemampuan: Terbang sangat tinggi<br/>
      Fakta: Penglihatannya sangat tajam!`
  },
  {
    emoji: "🐄",
    nama: "Sapi",
    info: `<strong>Sapi 🐄</strong>
      Tempat hidup: Darat 🌿<br/>
      Makanan: Rumput dan jerami<br/>
      Suara: "Mooo!"<br/>
      Fakta: Sapi menghasilkan susu untuk kita!`
  },
  {
    emoji: "🦈",
    nama: "Hiu",
    info: `<strong>Hiu 🦈</strong>
      Tempat hidup: Laut 🌊<br/>
      Makanan: Ikan, cumi-cumi<br/>
      Kemampuan: Berenang sangat cepat<br/>
      Fakta: Hiu sudah ada sejak jutaan tahun lalu!`
  },
  {
    emoji: "🐸",
    nama: "Katak",
    info: `<strong>Katak 🐸</strong>
      Tempat hidup: Darat & Air 🌿💧<br/>
      Makanan: Serangga, nyamuk<br/>
      Suara: "Kwek kwek!"<br/>
      Fakta: Katak bisa melompat jauh!`
  },
  {
    emoji: "🦋",
    nama: "Kupu-kupu",
    info: `<strong>Kupu-kupu 🦋</strong>
      Tempat hidup: Udara & Darat ☁️🌿<br/>
      Makanan: Nektar bunga<br/>
      Kemampuan: Terbang dan hinggap di bunga<br/>
      Fakta: Berasal dari ulat yang berubah!`
  },
  {
    emoji: "🐬",
    nama: "Lumba-lumba",
    info: `<strong>Lumba-lumba 🐬</strong>
      Tempat hidup: Laut 🌊<br/>
      Makanan: Ikan dan cumi<br/>
      Kemampuan: Berenang sangat cepat<br/>
      Fakta: Lumba-lumba adalah hewan yang sangat cerdas!`
  },
  {
    emoji: "🐓",
    nama: "Ayam",
    info: `<strong>Ayam 🐓</strong>
      Tempat hidup: Darat 🌿<br/>
      Makanan: Biji-bijian, cacing<br/>
      Suara: "Kukuruyuk!"<br/>
      Fakta: Ayam bertelur setiap hari!`
  },
  {
    emoji: "🐊",
    nama: "Buaya",
    info: `<strong>Buaya 🐊</strong>
      Tempat hidup: Air & Darat 💧🌿<br/>
      Makanan: Ikan, hewan kecil<br/>
      Kemampuan: Berenang dan merangkak<br/>
      Fakta: Buaya adalah reptil terbesar!`
  }
];

let currentCard = 0;
let isFlipped = false;

function updateCard() {
  const card = flashcards[currentCard];
  const fc = document.getElementById('flashcard');

  // Reset flip
  fc.classList.remove('flipped');
  isFlipped = false;

  setTimeout(() => {
    document.getElementById('cardEmoji').textContent = card.emoji;
    document.getElementById('cardName').textContent = card.nama;
    document.getElementById('cardInfo').innerHTML = card.info;
    document.getElementById('cardCounter').textContent = `${currentCard + 1} / ${flashcards.length}`;
  }, 300);
}

function flipCard() {
  const fc = document.getElementById('flashcard');
  isFlipped = !isFlipped;
  fc.classList.toggle('flipped', isFlipped);
}

function nextCard() {
  currentCard = (currentCard + 1) % flashcards.length;
  updateCard();
}

function prevCard() {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextCard();
  if (e.key === 'ArrowLeft') prevCard();
  if (e.key === ' ') { e.preventDefault(); flipCard(); }
});

updateCard();
