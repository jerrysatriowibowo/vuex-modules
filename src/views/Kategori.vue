<template>
    <center>
    <div class=" grid grid-cols-4 gap-4">
        <div v-for="kategori in getKategori" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a :href="kategori">
                <img class="rounded-t-lg object-contain h-48 w-97" :src="'src/assets/img/' + kategori +'.jpg'" :alt="kategori" />
            </a>
        <div class="p-5">
        <a :href="kategori">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{kategori.toUpperCase()}}</h5>
        </a>
        <router-link :to="{ name: 'FilterPageKategori', params: { kategori: kategori }}">Produk
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </router-link>
        </div>
    </div>
    </div>
</center>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('kategori', ['getKategori']),
    },
    methods: {
        ...mapActions('kategori', ['fetchKategori']),
    },
    created() {
        this.fetchKategori();
    },
}
</script>