<template>
  <div class="index">
      <div class="banner_container">
          <homeslider class="sliderComp"
            v-for="(banner, index) in banners"
            :key="banner.img"
            :banner="banner"
            :index="index"
            :visibleSlide="visibleSlide"
            :slideName="slideName"
          />
          <div class="slider_indicator">
            <span v-for="(banner, index) in banners" 
              :key="banner.index"
              :class="{active: visibleSlide == index}"
              >
            </span>
          </div>
          <div class="slide_controls">
              <i class="material-icons left" @click="prev">chevron_left</i>
              <i class="material-icons right" @click="next">chevron_right</i>
          </div>
      </div>
      <div class="recommended_box">
        <Recommended />
      </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'IndexPage',
  data() {
    return {
      banners: [
        {img: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/Slider1_2700x.jpg?v=1628696608', para: 'SUMMER 2022', head: 'New Arrival Collection'},
        {img: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/Slider2_2700x.jpg?v=1628696608', para: 'NEW SEASON', head: 'Lookbook Collection'},
        {img: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/Slider3_2700x.jpg?v=1628696608', para: 'SUMMER SALE', head: 'Save up to 70%'}
      ],
      visibleSlide: 0,
      slideName: ''
    }
  },
  methods: {
    prev() {
      this.slideName = 'right'
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.banners.length-1
      } else {
        this.visibleSlide--
      }
    },
    next() {
      this.slideName = 'left'
      if(this.visibleSlide >= this.banners.length -1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
    }
  }
}
</script>

<style scoped>
    .index{
      margin: 70px auto;
    }
    .banner_container{
      position: relative;
      height: 250px;
      width: 100%;
    }
    .slider_indicator{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
    .slider_indicator span{
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: rgba(0, 0, 0, 0.597);
        margin: 0 5px
    }
    .slider_indicator span.active{
        background: rgb(0, 0, 0);
    }
    .slide_controls i{
      position: absolute;
      bottom: 10px;
      background: rgba(0, 0, 0, 0.193);
      width: 40px;
      height: 40px;
      border-radius: 40px;
      font-size: 30px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .slide_controls i.left{
      left: 10px;
    }
    .slide_controls i.right{
      right: 10px;
    }
</style>