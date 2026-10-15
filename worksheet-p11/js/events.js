
import { daftarProyek } from "./data.js";
import { state, ubahPilihanAktif } from "./state.js";
import { render, tandaiTombolAktif, periksaForm } from "./dom.js";

const barisFilter = document.querySelector("#filter");
const form = document.querySelector("#bagian-2 form");

export function pasangEvents() {
    if (barisFilter) {
        barisFilter.addEventListener("click", (event) => {
            const tombol = event.target.closest("button");

            if (!tombol) return;

            const kategori = tombol.dataset.kategori;
            ubahPilihanAktif(kategori);

            const terpilih = daftarProyek.filter(
                (proyek) =>
                    state.pilihanAktif === "semua" ||
                    proyek.kategori === state.pilihanAktif
            );

            tandaiTombolAktif(tombol);
            render(terpilih);
        });
    }

    if (form) {
        const namaGame = form.querySelector("#nama-game");
        const tahunRilis = form.querySelector("#tahun-rilis");
        const tanggalMain = form.querySelector("#tanggal-main");

        namaGame?.addEventListener("input", periksaForm);
        tahunRilis?.addEventListener("input", periksaForm);
        tanggalMain?.addEventListener("input", periksaForm);

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!periksaForm()) {
                form.querySelector('[aria-invalid="true"]')?.focus();
                return;
            }

            console.log("Form valid dan siap disimpan.");
        });
    }
}
