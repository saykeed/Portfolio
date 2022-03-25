<template>
  <div class="signup">
      <div class="signupHeader">
          Create Account
          <i class="material-icons" @click="$router.back()">close</i>
      </div>
      <p>Sign Up with:</p>
      <div class="signupBtn">
          <div><img src="@/assets/img/google_svg.png" alt=""></div>
          <div><img src="@/assets/img/facebook_logo.jpg" alt=""></div>
      </div>
      <p>Or Continue with Email:</p>
      <form class="signupForm">
          <p>Email Address</p>
          <input type="email" name="email" required>
          <p>Password</p>
          <input type="password" name="password" required>
          <button>Create Account</button>
      </form>
      <p class="already">Already have an account? <NuxtLink to="/login"> Log in</NuxtLink></p>
  </div>
</template>

<script>
export default {
layout: 'nonav',
}
</script>

<style scoped>
.signup{
    border: 1px solid red;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    height: 100vh;
}
.signupHeader{
    position: relative;
    text-align: center;
    margin: 20px auto 70px;
}
.signupHeader i{
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}
.signupBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 50px;
}
.signupBtn div{
    width:70px;
    height: 70px;
    border-radius: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.152);
    margin: 0 10px;
    cursor: pointer;
}
.signupBtn img{
    width: 60%;
}
.signupForm{
    text-align: left;
    margin: 60px auto 20px;
}
.signupForm p{
    font-size: 12px;
    margin: 20px 0 5px;
}
.signupForm input{
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.131);
    outline: none;
    padding: 15px;
}
.signupForm button{
    width: 100%;
    padding: 10px;
    background: rgb(0, 195, 255);
    border: none;
    border-radius: 20px;
    margin: 15px auto;
    color: white;
}
.signup p.already{
    color: rgba(0, 0, 0, 0.535);
}
.signup p.already a{
    color: red;
}
</style>