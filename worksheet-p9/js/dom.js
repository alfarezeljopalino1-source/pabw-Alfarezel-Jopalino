import { daftarProyek } from "./app.js";

console.log(
  "Kategori proyek:",
  daftarProyek.map((proyek) => proyek.kategori)
);

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");

  li.className = "kartu";
  li.textContent = proyek.judul;

  return li;
}

function render(daftar) {
  wadah.textContent = "";

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });

  kosong.hidden = daftar.length !== 0;
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol) return;

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter(
    (proyek) =>
      kategori === "semua" ||
      proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(daftarProyek);