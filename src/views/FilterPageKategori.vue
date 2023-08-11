<template>
    <div class=" grid grid-cols-4 gap-4">
        <div v-for="kategori in filterProduct" :key="product.id" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <router-link :to="{ name: 'SingleProduct', params: { id: product.id }}" class="group">
            <a :href="kategori">
                <img class="rounded-t-lg object-contain h-48 w-97" :src="'src/assets/img/' + kategori +'.jpg'" :alt="kategori" />
            </a>
        <div class="p-5">
        <a :href="kategori">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{kategori.toUpperCase()}}</h5>
        </a>
        </div>
    </router-link>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters("product", ["getProductByCategory"]),
        filterProduct(){
            return this.getProductByCategory(this.$route.params.kategori);
        },
    },
    methods: {
        ...mapActions('product', ['fetchFilterProduct']),
    },
    created(){
        this.fetchFilterProduct();
    },
};
</script>