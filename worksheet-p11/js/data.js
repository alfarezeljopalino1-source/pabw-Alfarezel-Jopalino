
export const profil = {
    nama: "Alfarezel Jopalino",
    peran: "Mahasiswa Informatika yang belajar front-end",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export const profilD = {
    nama: "Alfarezel Jopalino",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        kategori: "web",
        selesai: true
    },
    {
        judul: "Katalog Produk",
        tahun: 2026,
        kategori: "data",
        selesai: false
    },
    {
        judul: "Website Portfolio",
        tahun: 2026,
        kategori: "web",
        selesai: true
    }
];

// Fungsi murni untuk membuat perkenalan
export function buatPerkenalan({ nama, peran }) {
    return `Nama saya ${nama} — ${peran}`;
}

// Fungsi murni untuk merapikan keahlian
export function formatKeahlian(daftar) {
    return daftar.join(", ");
}
