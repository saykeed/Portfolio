<template>
  <div class="productdetail">
        <img :src="details.image" alt="">
        <p>{{ details.title }}</p>
        <div class="priceAndReviewBox">
            <p>${{ details.price }}</p>
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
        
        <p>{{ details.description }}</p>
        <p>{{ starWidth }}</p>
      
      
  </div>
</template>

<script>
export default {
    props: ['details'],
    computed: {
        starWidth() {
            return 'width:' + Math.floor(Number(this.details.rating.rate) / 5 * 100) +'%'
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
    .productdetail img{
        width: 100%;
        height: 400px;
        object-fit: cover;
        margin: 20px auto;
        border: 1px solid red;
    }
    div.info{
        text-align: left;
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
        border: 1px solid red;
    }
    div.ratingstar{
        border: 1px solid blue;
        position: relative;
        height: 30px;
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
</style>