
import { profil, profilD, daftarProyek, buatPerkenalan, formatKeahlian } from "./data.js";
import { render } from "./dom.js";
import { pasangEvents } from "./events.js";
import { ambilNotisia } from "./api.js";

console.log(typeof profil.nama);
console.log(typeof daftarProyek.length);

console.log(
    `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`
);

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.log(profilD.nama);
console.log(daftarProyek[0]);
console.log(daftarProyek[0].judul);
console.log(profilD["nama"]);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
const katalog = daftarProyek.find(
    (proyek) => proyek.judul === "Katalog Produk"
);
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const jumlah = daftarProyek.reduce((total) => total + 1, 0);

console.log("Proyek selesai:", selesai);
console.log("Katalog:", katalog);
console.log("Judul proyek:", judulProyek);
console.log("Jumlah proyek:", jumlah);

console.log("Worksheet E aktif");
console.table(daftarProyek);
console.log(profilD.alamat?.kota);

const elemen = document.querySelector("#judul-yang-tidak-ada");

if (elemen) {
    console.log(elemen.textContent);
}

const angka = Number("10");
console.log(angka + 1);

render(daftarProyek);
pasangEvents();

ambilNotisia()
    .then((data) => {
        console.log("Data API:", data);
    })
    .catch((galat) => {
        console.error("Gagal mengambil data API:", galat.message);
    });
