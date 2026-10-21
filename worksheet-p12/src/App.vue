<script setup>
import { onMounted, watch } from "vue";
import { state } from "./state.js";
import { muat, simpan, aturUlang } from "./simpanan.js";

import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";
import FormKontak from "./components/FormKontak.vue";

const identitas = {
  nama: "Nama Anda",
  peran: "Mahasiswa Informatika",
};

onMounted(() => {
  const isi = muat();

  if (isi && ["semua", "web", "data"].includes(isi.kategoriAktif)) {
    state.kategoriAktif = isi.kategoriAktif;
  }
});

watch(state, (nilai) => simpan(nilai), { deep: true });

function aturUlangPilihan() {
  aturUlang();
  state.kategoriAktif = "semua";
  simpan(state);
}
</script>

<template>
  <KepalaProfil :profil="identitas" />
  <TombolFilter />
  <DaftarProyek />
  <FormKontak />

  <button type="button" @click="aturUlangPilihan">Atur ulang pilihan</button>
</template>
