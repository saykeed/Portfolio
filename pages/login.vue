<template>
  <div class="login">
      <div class="loginHeader">
          Welcome Back
          <i class="material-icons" @click="$router.back()">close</i>
      </div>
      <div class="loginwrap">
            <p>Log in with</p>
            <div class="loginBtn">
                <div><img src="@/assets/img/google_svg.png" alt=""></div>
                <div><img src="@/assets/img/facebook_logo.jpg" alt=""></div>
            </div>
            <p>Or Continue with Email</p>
            <form class="loginForm">
                <p>Email Address</p>
                <input type="email" name="email" required>
                <p>Password</p>
                <div class="passwordBox">
                    <input type="password" name="password" required>
                    <i class="material-icons" >remove_red_eye</i>
                </div>
                <button>Log In</button>
            </form>
            <p class="already">Don't have an account? <NuxtLink to="/signup">Sign Up</NuxtLink></p>
      </div>
  </div>
</template>

<script>
export default {
layout: 'nonav'
}
</script>

<style>
    .login{
        height: 100vh;
        position: relative;
        border: 1px solid red;
        width: 90%;
        margin: 0 auto;
    }
    .loginHeader{
        position: relative;
        text-align: center;
        margin: 20px auto;
    }
    .loginHeader i{
        position: absolute;
        left: 0;
        top: 0;
        cursor: pointer;
    }
    .loginwrap{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 100%;
        text-align: center;
    }
    .loginBtn {
        margin: 20px auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loginBtn div{
        width: 70px;
        height: 70px;
        border-radius: 70px;
        border: 1px solid rgba(0, 0, 0, 0.138);
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loginBtn div img{
        width: 60%;
    }
    .loginForm{
        margin: 20px auto;
        width: 100%;
        text-align: left;
    }
    .loginForm p{
        font-size: 12px;
        margin: 20px 0 5px;
    }
    .loginForm input{
        width: 100%;
        height: 40px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.131);
        outline: none;
        padding: 15px;
    }
    .passwordBox{
        position: relative;
        width: 100%;
        height: fit-content;
    }
    .passwordBox input{
        width: 100%;
    }
    .passwordBox i{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
    .loginForm button{
        width: 100%;
        padding: 10px;
        background: rgb(0, 195, 255);
        border: none;
        border-radius: 20px;
        margin: 15px auto;
        color: white;
    }
</style>