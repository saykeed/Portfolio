<template>
  <div class="footer">
      <div>
         <i class="material-icons" >home</i> 
         <p>Home</p>
      </div>
      <div>
         <i class="material-icons" >dashboard</i> 
         <p>Categories</p>
      </div>
      <div>
         <i class="material-icons" >favorite_border</i> 
         <p>Wishlist</p>
      </div>
      <div>
         <i class="material-icons" >account_circle</i> 
         <p>Account</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2%;
        background: white;
        box-shadow: -4px 0px 13px rgba(0,0,0,0.400);
    }
    .footer div{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
    .footer div i{
        font-size: 25px;
        margin: 0px auto 5px;
    }
</style>