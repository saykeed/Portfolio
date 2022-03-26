<template>
  <div class="account">
    <div class="accountHeader">
      <p>Profile</p>
    </div>
    
    <div class="accountWrap">
      <div class="accountHolder">
        <div class="accountImg">
          <i class="material-icons">account_circle</i>
        </div>
        <p>Oyeyinka Oyerinde</p>
        <p>oyeyinka@example.com</p>
      </div>
      <div class="accountInfoTab">
        <p>My Account</p>
      </div>

      <div class="accountOptions" v-for="option in options" :key="option.text">
        <p> <i class="material-icons">{{ option.icon }}</i> {{ option.text }}</p>
        <i class="material-icons">chevron_right</i>
      </div>
        <p class="logout"> <i class="material-icons">exit_to_app</i>Log out</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      options: [
        {text: 'Your wishlists', icon: 'favorite_border'},
        {text: 'Order History', icon: 'history'},
        {text: 'Saved Addresses', icon: 'location_on'},
        {text: 'Payment details', icon: 'credit_card'},
        {text: 'Need help? Contact us', icon: 'help'}
      ]
    }
  }
}
</script>

<style scoped>
  .account{
    position: relative;
  }
  .accountHeader{
    text-align: center;
  }
  .accountWrap{
    width: 80%;
    margin: 60px auto 20px;
    
  }
  .accountHolder{
    text-align: center;
    margin: 0px auto;
  }
  .accountHolder .accountImg{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.323);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
  }
  .accountHolder p{
    margin: 10px auto;
  }
  .accountImg i{
    font-size: 80px;
  }
  .accountInfoTab{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.172);
    border-radius: 20px;
    margin: 30px auto;
  }
  .accountInfoTab p{
    text-align: center;
    width: 50%;
  }
  .accountOptions{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px auto;
  }
  .accountOptions i{
    vertical-align: middle;
    font-size: 24px;
  }
  .accountOptions p i{
    margin-right: 10px;
  }
  .accountWrap .logout i{
    vertical-align: middle;
    font-size: 24px;
    margin-right: 10px;
  }
  .accountWrap .logout{
    margin: 15px auto;
  }
  
</style>