<template>
  <div class="index">
      <div class="linkbox">
          <div class="links"
            v-for="link in links"
            :key="link.text"
            @click="routePage(link.svgClass)"
          >
            <img :class="`svgs ${link.svgClass}`" :src="require(`@/assets/svg/${link.svgClass}.svg`)" alt="">
            <div class="linkdiv">
              <h3>{{ link.head }}</h3>
              <p>{{ link.para }}</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'IndexPage',
  data() {
    return {
      links: [
        {head: 'I\'m Sherif', para: 'I\'m a Fronte-end Developer. Click to know more.', route: '/about', svgClass: 'about'},
        {head: 'Projects and Contribution', para: 'Check out some of the projects I loved working on.', route: '/project', svgClass: 'project'},
        // {head: 'Writings', para: 'Check out some of my writings.', route: '/other', svgClass: 'other'},
        {head: 'Get in touch!', para: 'I\'m friendly, Let\'s talk!.', route: '/contact', svgClass: 'contact'}
      ]
    }
  },
  methods: {
     routeToPage(page) {
      this.$router.push(page)
    },
    // where x stands for the route path and classname for each svg
    async routePage(x) {
      await gsap.to("img." + x, {
        scale: 30,
        duration: 0.5,
        onComplete: this.routeToPage,
        onCompleteParams: [x]
        
      })
      // this.$router.push('/about')
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
      max-width: 800px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    .index .links{
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 46%;
      max-width: 300px;
      margin: 2%;
      border: 1px solid red;
      border-radius: 5px;
      padding: 15px;
      text-align: center;
      position: relative;
      color: black;
      cursor: pointer;
    }
    .index .links:hover .svgs{
      transform: scale(1.3);
    }
    .index .links img{
      width: 100px;
      position: absolute;
      transition: all 1s ease-in-out;
      z-index: -1;
    }

    .index img.about{
      top: -80px;
      left: 0
    }
    .index img.project{
      top: -80px;
      right: 0
    }
    .index img.other{
      bottom: -80px;
      left: 0
    }
    .index img.contact{
      bottom: -80px;
      right: 0
    }
    .linkdiv p{
      color: rgba(0, 0, 0, 0.793);
      font-size: 15px;
    }
</style>

