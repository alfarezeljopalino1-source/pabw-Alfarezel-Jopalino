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