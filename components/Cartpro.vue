<template>
  <div class="cartpro">
      <div class="upper">
          <div class="proImg">
              <img :src="product.image" alt="">
          </div>
          <div class="proInfo">
              <p>{{ product.title }}</p>
              <h3>Shopify</h3>
              <h3>${{ product.price }}</h3>
          </div>
      </div>
      <div class="lower">
          <div class="favAndRemove">
              <i class="material-icons fav">favorite_border</i>
              <p><i class="material-icons">delete</i>
                  REMOVE
              </p>
          </div>
          <p>test{{ quantity }}</p>
          <div class="quantity_control">
              <button class="minus">-</button>
              <div class="quantity" >1</div>
              <button class="minus">+</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['product'],
    data () {
        return {
            quantity: ''
        }
    }
}
</script>

<style scoped>
    div.cartpro{
        background: white;
        padding: 5px;
        margin: 15px auto;
        border-radius: 5px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.344), -2px -2px 2px rgba(0, 0, 0, 0.344);
    }
    .upper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }
    .proImg{
        width: 30%;
        padding: 5%;
    }
    .proInfo{
        width: 65%;
    }
    .proImg img{
        width: 100%;
    }
    .lower{
        height: 50px;
        border-top: 1px solid rgba(0, 0, 0, 0.316);
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .lower i{
        vertical-align: middle;
    }
    .favAndRemove{
        display: flex;
        align-items: center;
        color: orange;
    }
    .favAndRemove i{
        vertical-align: middle;
        cursor: pointer;
    }
    .favAndRemove p{
        cursor: pointer;
    }
    .favAndRemove .fav{
        margin-right: 20px;
    }
    .quantity_control{
        display: flex;
        align-items: center;
    }
    .quantity_control button{
        width: 25px;
        height: 25px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: orange;
        color: white;
        border: none;
        font-size: 20px;
        margin: 0 10px;
        cursor: pointer;
    }
    .quantity_control .quantity{
        width: 30px;
        text-align: center;
        border-bottom: 1px dotted rgba(0, 0, 0, 0.234);
        padding: 5px 0;
    }
</style>