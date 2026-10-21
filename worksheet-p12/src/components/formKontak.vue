<script setup>
import { ref } from "vue";

const nama = ref("");
const email = ref("");
const pesan = ref("");
const status = ref("");

function kirimForm() {
  if (!nama.value.trim() || !email.value.trim() || !pesan.value.trim()) {
    status.value = "Mohon lengkapi semua kolom.";
    return;
  }

  status.value = "Formulir berhasil dikirim.";
  nama.value = "";
  email.value = "";
  pesan.value = "";
}
</script>

<template>
  <section>
    <h2>Kontak</h2>

    <form @submit.prevent="kirimForm">
      <label for="nama">Nama</label>
      <input id="nama" v-model="nama" type="text" />

      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" />

      <label for="pesan">Pesan</label>
      <textarea id="pesan" v-model="pesan"></textarea>

      <button type="submit">Kirim</button>
    </form>

    <p v-if="status">{{ status }}</p>
  </section>
</template>
