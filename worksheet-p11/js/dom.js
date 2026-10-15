export function render(state) {
  const wadah = document.querySelector("#daftar");
  const kosong = document.querySelector("#pesan-kosong");

  if (!wadah || !kosong) {
    console.error("Elemen daftar proyek tidak ditemukan.");
    return;
  }

  wadah.textContent = "";

  const terpilih =
    state.kategoriAktif === "semua"
      ? state.daftarProyek
      : state.daftarProyek.filter(
          (proyek) =>
            proyek.kategori === state.kategoriAktif
        );

  if (terpilih.length === 0) {
    kosong.hidden = false;
  } else {
    kosong.hidden = true;

    terpilih.forEach((proyek) => {
      const li = document.createElement("li");
      li.className = "kartu";
      li.textContent = proyek.judul;
      wadah.append(li);
    });
  }

  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle(
      "aktif",
      tombol.dataset.kategori === state.kategoriAktif
    );
  });
}
