# 🐾 Belajar Binatang – Web Edukasi TK A

Mata Kuliah: SPTP4401 Produksi Bahan Pembelajaran Berbasis Online  
Pengembang: Ina Ria Fitriani | NIM: 860322911  
Prodi: PG-PAUD | UPBJJ UT-Malang | 2026

---

## 📁 Struktur File

```
belajar-binatang/
├── index.html          ← Beranda utama
├── video.html          ← Halaman video YouTube
├── kuis.html           ← Kuis 5 soal interaktif
├── permainan.html      ← Drag & drop cocokkan gambar
├── flashcard.html      ← Flashcard 10 binatang
├── suara.html          ← Tombol suara binatang
├── penilaian.html      ← Rekap asesmen formatif/sumatif
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   ├── kuis.js
    │   ├── permainan.js
    │   ├── flashcard.js
    │   └── suara.js
    └── audio/          ← Taruh file MP3 di sini
```

---

## 🚀 Cara Deploy ke GitHub Pages (GRATIS)

1. Buat akun di https://github.com
2. Klik "New Repository" → beri nama: `belajar-binatang`
3. Upload semua file (drag & drop ke browser GitHub)
4. Buka Settings → Pages → Source: pilih `main` branch
5. Klik Save → tunggu 1-2 menit
6. Web online di: `https://USERNAME.github.io/belajar-binatang`

---

## 🔊 Cara Menambahkan File Audio Suara Binatang

Download MP3 gratis dari:
- https://freesound.org (cari "cat meow", "cow moo", dll)
- https://www.zapsplat.com

Simpan file dengan nama persis seperti ini di folder `assets/audio/`:
- kucing.mp3
- anjing.mp3
- sapi.mp3
- ayam.mp3
- katak.mp3
- gajah.mp3
- bebek.mp3
- kambing.mp3

Lalu di file `suara.html`, hapus tanda `<!--` dan `-->` pada tag audio:
```html
<!-- SEBELUM (dikomentari): -->
<!-- <audio id="kucing" src="assets/audio/kucing.mp3"></audio> -->

<!-- SESUDAH (aktif): -->
<audio id="kucing" src="assets/audio/kucing.mp3"></audio>
```

---

## 🎥 Link YouTube yang Digunakan

| Video | Link | Keterangan |
|-------|------|------------|
| Hewan Darat, Udara, Air | https://www.youtube.com/watch?v=a1O3iUDO16s | Video utama – ada lagu & animasi |
| 100 Macam Binatang | https://www.youtube.com/watch?v=IeotK8LUd5k | Lengkap darat+laut+udara |
| Belajar Nama Hewan TK | https://www.youtube.com/watch?v=6YJyme8plJU | Sesi edukasi children universe |

---

## 🤖 Prompt GitHub Copilot yang Bisa Dipakai

Kalau ingin modifikasi cepat, gunakan prompt ini di Copilot:

**Tambah soal kuis:**
> "Add 5 more quiz questions about animals to the soalKuis array in kuis.js. Questions should be suitable for kindergarten children aged 4-6. Use emoji in the questions."

**Tambah flashcard:**
> "Add 5 more animal flashcards to the flashcards array in flashcard.js. Include emoji, name, habitat, food, sound, and one fun fact in Indonesian."

**Tambah binatang di drag-drop:**
> "Add 3 more draggable animal items to permainan.html. Include one for darat (Kuda), one for air (Penyu), one for udara (Merpati). Follow the same HTML pattern."

**Ubah warna tema:**
> "Change the primary color from #2d6a2d (dark green) to #1565c0 (dark blue) throughout style.css. Update all green-related color variables accordingly."

**Buat halaman baru:**
> "Create a new HTML page called mewarnai.html for a digital coloring activity. Use the same navbar and footer from index.html. Add simple SVG animal outlines that change color when clicked."

---

## 📱 Responsif

Web ini sudah responsif untuk HP dan tablet. Ditest di:
- Chrome (desktop & mobile)
- Firefox
- Safari (iOS)

---

## 📌 Catatan Revisi untuk Klien

Harga sudah include:
- 6 halaman HTML lengkap
- Kuis 5 soal interaktif
- Drag & drop permainan
- Flashcard 10 binatang
- 3 video YouTube terembed
- Deploy ke GitHub Pages

**Tidak include** (perlu biaya tambahan):
- File audio MP3 suara binatang (guru bisa download sendiri gratis)
- Domain custom (.com)
- Login/akun guru
- Manajemen konten (tambah materi sendiri)
