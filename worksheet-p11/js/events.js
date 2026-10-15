import { pilihKategori, resetPilihan } from "./state.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  const tombolReset = document.querySelector("#reset-pilihan");

  barisFilter?.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol || !barisFilter.contains(tombol)) return;

    pilihKategori(tombol.dataset.kategori);
  });

  tombolReset?.addEventListener("click", resetPilihan);
}
