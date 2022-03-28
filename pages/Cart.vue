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
          @updatePrice="updatePrice"
          @addUpdatePrice="updatePrice"
          @minusUpdatePrice="minusUpdatePrice"
           />
      </div>
      <div class="totalBox">
        <p>Total: <span>$ {{ totalPriceRounded }}</span></p>
        <button @click="completeOrder" class="completeOrder">COMPLETE YOUR ORDER</button>
      </div>
      
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'nonav',
  data() {
    return{
      totalPrice: 0
    }
  },
  methods: {
    updatePrice(price) {
      this.totalPrice += price
    },
    minusUpdatePrice(price) {
      this.totalPrice -= price
    },
    completeOrder() {
      alert('Oga u go need to log in ooooo')
    }
  },
  computed: {
    ...mapState(['cart']),
    totalPriceRounded() {
      return this.totalPrice.toFixed(2)
    }
  }
}
</script>

<style scoped>
  .cart{
    background: rgba(0, 0, 0, 0.065);
    position: relative;
  }
  .cartHeader{
    height: 50px;
    width: 100%;
    background: black;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
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
    margin-top: 50px;
    padding: 10px;
    width: 100%;
  }
  .totalBox{
    background: white;
    padding: 10px;
  }
  .totalBox p{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 20px;
  }
  .totalBox p span{
    color: orange;
  }
  .totalBox .completeOrder{
    height: 40px;
    width: 100%;
    background: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    margin: 20px auto;
    cursor: pointer;
  }
</style>