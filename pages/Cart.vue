<template>
  <div class="cart">
      <div class="cartHeader">
          <i class="material-icons" @click="$router.back()">arrow_back</i>
          Cart
      </div>
      <div class="cartedProducts">
          <Cartpro
          v-for="product in cart" :key="product.id"
          :product="product"
           />
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'nonav',
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style scoped>
  .cartHeader{
    height: 50px;
    background: black;
    color: white;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cartHeader i{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .cartedProducts {
    border: 1px solid red;
    padding: 10px;
    background: rgba(0, 0, 0, 0.065);
  }
</style>