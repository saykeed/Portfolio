<template>
  <div class="detailsPage">
      <Productdetail 
      :details="productDetail"
      />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      productID: this.$route.params.id
    }
  }, 
  computed: {
    ...mapGetters(['getProductById']),
    productDetail() {
      return this.getProductById(this.productID)
    }
  }
}
</script>

<style>
  .detailsPage{
    text-align: center;
  }
</style>