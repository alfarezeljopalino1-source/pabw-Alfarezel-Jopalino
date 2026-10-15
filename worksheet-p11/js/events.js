
import { pilihKategori, state } from "./state.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");

  if (!barisFilter) {
    console.error('Elemen "#filter" tidak ditemukan.');
    return;
  }

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) return;

    pilihKategori(tombol.dataset.kategori);
  });
}
