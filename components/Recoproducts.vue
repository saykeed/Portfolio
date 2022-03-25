<template>
    <div class="recoproducts">
        <NuxtLink :to="`/Details/${product.id}`">
            <div class="recoproductsImgBox">
                <img :src="product.image" alt="">
            </div>
        </NuxtLink>
        <p>{{ product.title }}</p>
        <p>${{ product.price }}</p> 
    </div>
    
</template>

<script>
export default {
    props: ['product']

}
</script>

<style>
div.recoproducts, div.recoProductsLoading{
    width: 46%;
    height: 250px;
    margin: 5% 2%;
    position: relative;
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
.recoproducts p{
    width: 90%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>