<template>
  <div class="topnav">
      <i class="material-icons" >menu</i>
      <h3>Shopify</h3>
      <i class="material-icons" >shopping_cart</i>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .topnav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        background: white;
        box-shadow: 4px 0px 13px rgba(0,0,0,0.400);
        padding: 0 3%;
    }
    .topnav i{
        font-size: 25px;
        cursor: pointer;
    }
</style>