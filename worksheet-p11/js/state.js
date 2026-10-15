
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";
import { simpan, muat, aturUlang } from "./storage.js";

const simpanan = muat();

export const state = {
  daftarProyek,
  kategoriAktif:
    simpanan?.kategoriAktif === "web" ||
    simpanan?.kategoriAktif === "data"
      ? simpanan.kategoriAktif
      : "semua"
};

export function pilihKategori(nilai) {
  if (!["semua", "web", "data"].includes(nilai)) return;

  state.kategoriAktif = nilai;
  simpan(state);
  render(state);
}

export function resetPilihan() {
  aturUlang();
  state.kategoriAktif = "semua";
  render(state);
}
