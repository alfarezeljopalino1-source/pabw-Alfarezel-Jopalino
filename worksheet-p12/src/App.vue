<script setup>
import { ref } from "vue";
import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";

const identitas = {
  nama: "Nama Anda",
  peran: "Mahasiswa Informatika",
};

const kategoriAktif = ref("semua");

function pilihKategori(kategori) {
  kategoriAktif.value = kategori;
}
</script>

<template>
  <KepalaProfil :profil="identitas" />

  <TombolFilter :kategori-aktif="kategoriAktif" @pilih="pilihKategori" />
</template>
