const nama = "Alfarezel Jopalino";
const peran = "Mahasiswa Informatika yang belajar front-end";
const jumlahProyek = 3;

let pilihanAktif = "semua";

console.log(typeof nama);
console.log(typeof jumlahProyek);
console.log(typeof pilihanAktif);

const profil = {
    nama: "Alfarezel Jopalino",
    peran: "Mahasiswa Informatika yang belajar front-end",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);

// C.1 Fungsi untuk menyusun kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
    return `Nama saya ${nama} — ${peran}`;
}

// C.2 Fungsi untuk merapikan daftar keahlian
function formatKeahlian(daftar) {
    return daftar.join(", ");
}

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// ===============================
// WORKSHEET D
// ===============================

// D.1 Data profil
const profilD = {
    nama: "Alfarezel Jopalino",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

// Array of object
const daftarProyek = [
  {
    judul: "Halaman Profil",
    tahun: 2026,
    kategori: "web",
    selesai: true
  },
  {
    judul: "Katalog Produk",
    tahun: 2026,
    kategori: "data",
    selesai: false
  },
  {
    judul: "Website Portfolio",
    tahun: 2026,
    kategori: "web",
    selesai: true
  }
];

console.log(profilD.nama);
console.log(daftarProyek[0]);
console.log(daftarProyek[0].judul);
console.log(profilD["nama"]);

// D.3 Array methods

// filter → mengambil semua proyek yang selesai
const selesai = daftarProyek.filter((proyek) => {
    return proyek.selesai;
});

// find → mencari satu proyek
const katalog = daftarProyek.find(
    (proyek) => proyek.judul === "Katalog Produk"
);

// map → membuat array baru dari setiap proyek
const judulProyek = daftarProyek.map(
    (proyek) => proyek.judul
);

// reduce → menghitung jumlah seluruh proyek
const jumlah = daftarProyek.reduce(
    (total) => total + 1,
    0
);

console.log("Proyek selesai:", selesai);
console.log("Katalog:", katalog);
console.log("Judul proyek:", judulProyek);
console.log("Jumlah proyek:", jumlah);

// ===============================
// WORKSHEET E
// ===============================

console.log("Worksheet E aktif");
console.table(daftarProyek);
console.log(profilD.alamat?.kota);

const elemen = document.querySelector("#judul-yang-tidak-ada");

if (elemen) {
    console.log(elemen.textContent);
}

const input = "10";

const angka = Number(input);

console.log(angka + 1);

export { profil, daftarProyek };