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

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
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

const form = document.querySelector("#bagian-2 form");

const namaGame = document.querySelector("#nama-game");
const tahunRilis = document.querySelector("#tahun-rilis");
const tanggalMain = document.querySelector("#tanggal-main");

const tombolSimpan = form.querySelector('button[type="submit"]');

function periksaForm() {
  let sah = true;

  // Nama Game
  if (namaGame.value.trim() === "") {
    namaGame.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    namaGame.setAttribute("aria-invalid", "false");
  }

  // Tahun Rilis
  const tahun = Number(tahunRilis.value);

  if (
    tahunRilis.value.trim() === "" ||
    tahun < 2000 ||
    tahun > 2030
  ) {
    tahunRilis.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    tahunRilis.setAttribute("aria-invalid", "false");
  }

  // Tanggal Mulai Dimainkan
  if (tanggalMain.value.trim() === "") {
    tanggalMain.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    tanggalMain.setAttribute("aria-invalid", "false");
  }

  tombolSimpan.disabled = !sah;

  return sah;
}

namaGame.addEventListener("input", periksaForm);
tahunRilis.addEventListener("input", periksaForm);
tanggalMain.addEventListener("input", periksaForm);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!periksaForm()) {
    const kolomSalah = form.querySelector(
      '[aria-invalid="true"]'
    );

    kolomSalah?.focus();

    return;
  }

  console.log("Form valid dan siap disimpan.");
});