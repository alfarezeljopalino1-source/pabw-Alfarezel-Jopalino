# PABW - Alfarezel Jopalino

Repository ini memuat pekerjaan mata kuliah Pengembangan
Aplikasi Berbasis Web.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: daftar game yang pernah saya mainkan.

- Judul halaman: Daftar Game yang Pernah Saya Mainkan
- Deskripsi: Daftar game yang pernah saya mainkan beserta platform dan statusnya.
- Tautan navigasi: Daftar Game, Tambah Game, Tentang Saya
- Dua bagian utama: Daftar Game, Tambah Game
- Kolom tabel: judul game, genre, platform, status
- Kolom form: nama game, platform, status bermain
- Gambar: koleksi-game.webp

## Catatan penggunaan AI

Saya menggunakan AI untuk membantu menyusun ide topik, struktur halaman, dan merapikan rencana isi worksheet.
1.  Tulis satu bagian halaman Anda yang menurut Anda paling benar, dan jelaskan mengapa.
Bagian tabel data paling benar karena sudah menggunakan <caption>, <thead>, <tbody>, dan <th scope> serta memiliki tiga data game.
2. Tulis satu bagian yang belum berhasil Anda perbaiki, dan apa dugaan penyebabnya.
Lighthouse sangat susah dikerjakan dan lumayan ribet
3. Apa bedanya <label for="x"> dengan tulisan biasa di atas kolom isian? Jawab satu kalimat.
<label for="x"> terhubung dengan input yang memiliki id="x", sehingga label dapat digunakan untuk memindahkan fokus ke kolom isian.
4. Mengapa <main> hanya boleh satu dalam satu halaman?
Karena <main> menandai satu bagian utama dari isi halaman sehingga pembaca layar dapat mengenali konten utama dengan jelas.


## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #1D3A8C (biru tua), dipilih karena memberikan
  kesan profesional dan sesuai dengan halaman daftar game.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --color-surface | #FFFFFF | latar kartu dan panel |
| --color-border | #D1D5DB | garis dan border |
| --color-danger | #B00020 | peringatan dan input tidak valid |
| --color-focus | #2563EB | garis fokus papan ketik |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya adalah mengubah --color-primary
di satu baris dan memastikan tombol, tautan, judul,
dan garis fokus menggunakan perubahan tersebut.

# CATATAN PENGGUNAAN AI
- memahami instruksi dan materi CSS Fundamental dan Design Token;
- membantu menjelaskan penggunaan CSS Variables (design token);
- membantu menyusun dan memperbaiki aturan CSS pada `base.css`, `layout.css`, dan `komponen.css`