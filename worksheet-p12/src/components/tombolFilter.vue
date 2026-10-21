<script setup>
const props = defineProps({
  kategoriAktif: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["pilih"]);
</script>

<template>
  <div>
    <button
      :class="{ aktif: props.kategoriAktif === 'semua' }"
      @click="emit('pilih', 'semua')"
    >
      Semua
    </button>

    <button
      :class="{ aktif: props.kategoriAktif === 'web' }"
      @click="emit('pilih', 'web')"
    >
      Web
    </button>

    <button
      :class="{ aktif: props.kategoriAktif === 'data' }"
      @click="emit('pilih', 'data')"
    >
      Data
    </button>
  </div>
</template>
