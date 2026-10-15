
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

export function buatKartu(proyek) {
    const li = document.createElement("li");

    li.className = "kartu";
    li.textContent = proyek.judul;

    return li;
}

export function render(daftar) {
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

export function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

const form = document.querySelector("#bagian-2 form");

export function periksaForm() {
    if (!form) return false;

    const namaGame = form.querySelector("#nama-game");
    const tahunRilis = form.querySelector("#tahun-rilis");
    const tanggalMain = form.querySelector("#tanggal-main");
    const tombolSimpan = form.querySelector('button[type="submit"]');

    let sah = true;

    if (namaGame.value.trim() === "") {
        namaGame.setAttribute("aria-invalid", "true");
        sah = false;
    } else {
        namaGame.setAttribute("aria-invalid", "false");
    }

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

    if (tanggalMain.value.trim() === "") {
        tanggalMain.setAttribute("aria-invalid", "true");
        sah = false;
    } else {
        tanggalMain.setAttribute("aria-invalid", "false");
    }

    tombolSimpan.disabled = !sah;

    return sah;
}
