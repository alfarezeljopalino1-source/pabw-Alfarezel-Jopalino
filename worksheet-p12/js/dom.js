const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif
  );
}

export function render(state) {
  wadah.textContent = "";

  const tampil = saring(state);

  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  tampil.forEach((item) => {
    wadah.append(buatKartu(item));
  });

  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle(
      "aktif",
      tombol.dataset.kategori === state.kategoriAktif
    );
  });
}
