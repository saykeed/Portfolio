<template>
  <div class="topnav">
      <i class="material-icons" @click="toggleSidebar">menu</i>
      <h3>Shopify</h3>
      <NuxtLink to="/Cart"><i class="material-icons" >shopping_cart</i></NuxtLink>
  </div>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('togSidebar')
        }
    }
}
</script>

<style>
    .topnav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        width: 100%;
        background: white;
        box-shadow: 4px 0px 13px rgba(0,0,0,0.400);
        padding: 0 3%;
    }
    .topnav a{
        text-decoration: none;
    }
    .topnav i{
        font-size: 25px;
        cursor: pointer;
        color: black;
    }
</style>