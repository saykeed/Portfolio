<template>
    <div class="wishlist">
        <Recoproducts
            v-for="product in cart"
            :key="product.id"
            :product="product"
            />
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
layout: 'default',
computed: {
    ...mapState(['cart'])
}
}
</script>

<style>
    .wishlist{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>