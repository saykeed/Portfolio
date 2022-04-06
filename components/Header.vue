<template>
  <div class="header">
      <i class="material-icons">arrow_back</i>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .header{
        height: 100px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 800px;
    }
    .header i{
        height: 40px;
        width: 40px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        background: white;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: 2px 2px 5px white, -2px -2px 5px white;
    }
</style>