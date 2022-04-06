<template>
  <div class="index">
      <div class="linkbox">
          <NuxtLink 
            v-for="link in links"
            :key="link.text"
            :to="link.route"
          >
            <img :class="link.svgClass" :src="require(`@/assets/svg/${link.svgClass}.svg`)" alt="">
            <div class="linkdiv">
              <h3>{{ link.head }}</h3>
              <p>{{ link.para }}</p>
            </div>
          </NuxtLink>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      links: [
        {head: 'I\'m Sherif', para: 'I\'m a Fronte-end Developer. Click to know more.', route: '/about', svgClass: 'one'},
        {head: 'Projects and Contribution', para: 'Check out some of the projects I loved working on.', route: '/project', svgClass: 'two'},
        {head: 'Writings', para: 'Check out some of my writings.', route: '/other', svgClass: 'three'},
        {head: 'Get in touch!', para: 'I\'m friendly, Let\'s talk!.', route: '/contact', svgClass: 'four'}
      ]
    }
  }
}
</script>

<style scoped>
    .index{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }
    .index .linkbox{
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    .index a{
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 46%;
      max-width: 250px;
      margin: 2%;
      border: 1px solid red;
      border-radius: 5px;
      padding: 15px;
      text-align: center;
      position: relative;
      color: black;
    }
    .index a img{
      width: 100px;
      position: absolute;
    }

    .index img.one{
      top: -80px;
      left: 0
    }
    .index img.two{
      top: -80px;
      right: 0
    }
    .index img.three{
      bottom: -80px;
      left: 0
    }
    .index img.four{
      bottom: -80px;
      right: 0
    }
</style>


// <img src="@/assets/svg/one.svg" alt="">