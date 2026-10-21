
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

export function formatTanggal(nilai) {
  return new Date(nilai).toLocaleDateString("id-ID");
}
