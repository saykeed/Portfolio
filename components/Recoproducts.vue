<template>
    <div class="recoproducts">
        <NuxtLink :to="`/Details/${product.id}`">
            <div class="recoproductsImgBox">
                <img :src="product.image" alt="">
            </div>
        </NuxtLink>
        <p class="title">{{ product.title }}</p>
        <p class="price">${{ product.price }} <i class="material-icons">shopping_cart</i></p> 
        <i class="material-icons wish" >favorite_border</i>
    </div>
    
</template>

<script>
export default {
    props: ['product']

}
</script>

<style>
div.recoproducts{
    width: 46%;
    margin: 5% 2%;
    position: relative;
    border: 1px solid blue;
    padding: 5px;
}
.recoproducts i.wish{
    position: absolute;
    right: 10px;
    top: 10px;
    color: red;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(250, 250, 250, 0.159);
    transition: all .5s ease-in-out
}
.recoproducts i.wish:hover{
    background: transparent;
    animation: stagger 1s ease-in-out;
}

@keyframes stagger{
    0%{transform: translateY(0)}
    20%{transform: translateY(10px)}
    40%{transform: translateY(-20px)}
    60%{transform: translateY(0px)}
    80%{transform: translateY(0px)}
    100%{transform: translateY(0px)}
}
.recoproductsImgBox{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.recoproducts img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
}
.recoproducts img:hover{
   transform: scale(1.2);
}
.recoproducts p.title{
    margin: 5px 0;
    width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.recoproducts .price{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.recoproducts .price i{
    vertical-align: middle;
}
</style>