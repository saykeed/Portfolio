<template>
  <div class="detailsPage">
      <p v-if="$fetchState.pending">fetching product....</p>
      <Productdetail 
      v-else
      :details="details"
      />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      productID: this.$route.params.id,
      details: null
    }
  }, 
  computed: {
    // ...mapGetters(['getProductById']),
    // productDetail() {
    //   return this.getProductById(this.productID)
    // }
  },
  async fetch() {
    this.details = await fetch(
      'https://fakestoreapi.com/products/' + this.productID
    ).then(res => res.json())
  }
}
</script>

<style>
  .detailsPage{
    text-align: center;
  }
</style>