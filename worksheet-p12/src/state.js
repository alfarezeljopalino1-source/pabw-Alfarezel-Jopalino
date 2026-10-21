import { reactive } from 'vue'
import { daftarProyek } from './data.js'

export const state = reactive({
  daftarProyek,
  kategoriAktif: 'semua',
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}
