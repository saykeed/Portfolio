<template>
  <div class="index">
      <transition-group name="jump" 
        tag="div" 
        class="linkbox"
        appear=""
        @before-enter="beforeEnter"
        @enter="enter"
      >
          <img key="aboutsvg" class="svgs about" src="@/assets/svg/about.svg" alt="">
          <img key="projectsvg" class="svgs project" src="@/assets/svg/project.svg" alt="">
          <img key="contactsvg" class="svgs contact" src="@/assets/svg/contact.svg" alt="">
          <div class="links"
            v-for="link in links"
            :key="link.svgClass"
            :data-index="link.delay"
            @click="routePage(link.svgClass)"
          >
            
            <div class="linkdiv">
              <h2>{{ link.head }}</h2>
              <p>{{ link.para }}</p>
            </div>
          </div>
      </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'IndexPage',
  data() {
    return {
      links: [
        {head: 'I\'m Sherif', para: 'I\'m a Front-end Developer. Click to know more.', route: '/about', svgClass: 'about', delay: 1},
        {head: 'Projects and Contribution', para: 'Check out some of the projects I have worked on.', route: '/project', svgClass: 'project', delay: 3},
        // {head: 'Writings', para: 'Check out some of my writings.', route: '/other', svgClass: 'other'},
        {head: 'Get in touch!', para: 'I\'m friendly, Let\'s talk!.', route: '/contact', svgClass: 'contact', delay: 2}
      ]
    }
  },
  methods: {
    routeToPage(page) {
      this.$router.push(page)
    },
    // where x stands for the route path and classname for each svg
    routePage(x) {
      gsap.to("img." + x, {
        scale: 20,
        duration: 0.6,
        onComplete: this.routeToPage,
        ease: "power4.inOut",
        zIndex: 99999,
        onCompleteParams: [x]
      })
      gsap.to(".links", {
        background: 'transparent',
        duration: 0.4,
        ease: "power4.inOut"
      }, 0)
      gsap.to(".linkdiv", {
        opacity: 0,
        duration: 0.4,
        ease: "power4.inOut"
      }, 0)
      console.log(x)
    },
    beforeEnter(el) {
        el.style.opacity = 0 
        el.style.transform = 'scale(0.1)'
      },
      enter(el, done) {
        gsap.to(el, {
          duration: 0.6,
          scale: 1,
          opacity: 1,
          ease: "power3.inOut",
          onComplete: done,
          delay: 0.3 * el.dataset.index
        })
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
      position: relative;
    }
    .linkbox img.svgs{
      width: 100px;
      position: absolute;
    }
    .linkbox .links{
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 46%;
      max-width: 300px;
      margin: 2%;
      background: rgba(237, 237, 237, 0.601);
      border-radius: 10px;
      padding: 15px;
      text-align: center;
      position: relative;
      color: black;
      cursor: pointer;
      z-index: 1;
      opacity: 0;
    }
    .linkbox .links:hover{
       background: rgba(236, 222, 222, 0.675);
    }
    


    @keyframes smallAbout {
      from{top: 50px; left: 20px;}
      to{top: -50px; left: 0;}
    }
    @keyframes smallProject {
      from{top: 50px; right: 20px;}
      to{top: -50px; right: 0;}
    }
    @keyframes smallContact {
      from{bottom: 50px; left: 50%; }
      to{bottom: -50px; left: 50%; }
    }

    .index img.about{
      animation: smallAbout 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .index img.project{
      animation: smallProject 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .index img.contact{
      animation: smallContact 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .linkdiv p{
      color: rgba(0, 0, 0, 0.793);
      font-size: 15px;
    }

    /*for the responsieve screen of lg*/
    @media screen and (min-width:700px){
        @keyframes mediumAbout {
          from{top: -50px; left: 0;}
          to{top: 50px; left: 20px;}
        }
        @keyframes mediumProject {
          from{top: -50px; right: 0;}
          to{top: 50px; right: 20px;}
        }
        @keyframes mediumContact {
          from{bottom: -50px; left: 50%; }
          to{bottom: 50px; left: 50%; }
        }
        .index img.about{
          animation: mediumAbout 1s ease-in-out;
          animation-fill-mode: forwards;
        }
        .index img.project{
          animation: mediumProject 1s ease-in-out;
          animation-fill-mode: forwards;
        }
        .index img.contact{
          animation: mediumContact 1s ease-in-out;
          animation-fill-mode: forwards;
        }
    }
</style>


/*   

<img :class="`svgs ${link.svgClass}`" :src="require(`@/assets/svg/${link.svgClass}.svg`)" alt="">

*/