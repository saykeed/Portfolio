<template>
  <div class="productdetail">
        <img :src="details.image" alt="">
       
        <h3 class="title">{{ details.title }}</h3>
        <div class="priceAndReviewBox">
            <h3>${{ details.price }}</h3>
            <div class="ratingBox"> 
                <div class="ratingstar">
                    <div class="bottomStar">
                        <i v-for="star in 5" :key="star" class="material-icons">star</i>
                    </div>
                    <div class="topStar" :style="starWidth">
                        <i v-for="star in 5" :key="star" class="material-icons">star</i>
                    </div>
                </div>
                <span>({{ details.rating.count }} reviews)</span>
            </div> 
        </div>
        <p class="desc">{{ detailDesc }}</p>
        <button class="readMore" @click="toggleDesc">Read More</button>
        <div class="cartBtnDiv">
            <button class="cartBtn">Add to Cart</button>
            <button class="favBtn"><i class="material-icons" >favorite_border</i></button>
        </div>
  </div>
</template>

<script>
export default {
    props: ['details'],
    data() {
        return{
            description: this.details.description,
            fullDesc: false
        }
    },
    methods:{
        toggleDesc() {
            this.fullDesc = !this.fullDesc
        }
    },
    computed: {
        starWidth() {
            return 'width:' + Math.floor(Number(this.details.rating.rate) / 5 * 100) +'%'
        },
        detailDesc() {
            if(!this.fullDesc) {
                return this.description.slice(0,120) + '...'
            } else{
                return this.description
            } 
        }
    }
}
</script>

<style>
    .productdetail{
        width: 90%;
        margin: 0 auto;
        text-align: left;
    }
    .productdetail  img{
        width: 70%;
        height: auto;
        object-fit: cover;
        display: block;
        margin: 0 auto;
    }
    .productdetail .title{
        margin: 10px auto;
    }
    .priceAndReviewBox{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div.ratingBox{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.ratingstar{
        position: relative;
        height: 25px;
        width: 107px;
    }
    div.ratingstar div{
        position: absolute;
        top: 0;
        left: 0; 
    }
    div.ratingstar i{
        font-size: 20px;
    }
    div.bottomStar{
        width: 100%;
    }
    div.bottomStar i{
        color: rgba(0, 0, 0, 0.289);
    }
    div.topStar{
        overflow: hidden;
        white-space: nowrap;
    }
    div.topStar i{
        color: yellow;
    }
    .productdetail .desc{
        margin: 10px auto;
    }
    .productdetail button.readMore{
        background: red;
        color: white;
        padding: 10px 15px;
        border: none;
        margin: 0;
        border-radius: 5px;
    }
    .cartBtnDiv {
        margin: 30px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    .cartBtnDiv .cartBtn{
        height: 40px;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background: blue;
        border: none;
        cursor: pointer;
        color: white;
    }
    .cartBtnDiv .favBtn{
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        background: blue;
        border: none;
        cursor: pointer;
        color: white;
    }
</style>