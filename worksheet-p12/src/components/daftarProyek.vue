<script setup>
import { computed } from "vue";
import { daftarProyek } from "../data.js";

const props = defineProps({
  kategoriAktif: {
    type: String,
    default: "semua",
  },
});

const proyekTampil = computed(() => {
  if (props.kategoriAktif === "semua") {
    return daftarProyek;
  }

  return daftarProyek.filter(
    (proyek) => proyek.kategori === props.kategoriAktif,
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
