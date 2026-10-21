<script setup>
import { computed } from "vue";
import { state } from "../state.js";

const proyekTampil = computed(() => {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }

  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif,
  );
});
</script>

<template>
  <section id="daftar">
    <article v-for="(proyek, index) in proyekTampil" :key="proyek.id ?? index">
      <h3>{{ proyek.nama }}</h3>
      <p>{{ proyek.deskripsi }}</p>
      <span>{{ proyek.kategori }}</span>
    </article>

    <p v-if="proyekTampil.length === 0">Tidak ada proyek pada kategori ini.</p>
  </section>
</template>
