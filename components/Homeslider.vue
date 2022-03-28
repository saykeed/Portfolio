<template>
    <transition :name="slideName">
        <div class="homeslider"  v-show="index == visibleSlide">
            <img :src="banner.img" alt="slider images">
        </div>
    </transition>
</template>

<script>
export default {
    props: ['banner', 'slideName', 'index','visibleSlide']
}
</script>

<style>
.homeslider{
    height: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
    .homeslider img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
    .left-enter-active{
        animation: leftin .5s ease-in-out;
        
    }
    .left-leave-active{
        animation: leftout .5s ease-in-out;
        
    }
    @keyframes leftin{
        from {transform: translateX(100%)}
        to {transform: translateX(0)}
    }
    @keyframes leftout{
        from {transform: translateX(0)}
        to {transform: translateX(-100%)}
    }
    .right-enter-active{
        animation: rightin .5s ease-in-out
    }
    .right-leave-active{
        animation: rightout .5s ease-in-out
    }
    @keyframes rightin{
        from {transform: translateX(-100%)}
        to {transform: translateX(0)}
    }
    @keyframes rightout{
        from {transform: translateX(0)}
        to {transform: translateX(100%)}
    }

</style>

/*


    <transition :name="slideName">
        <div class="slider">
            <img :src="banner.img" alt="">
            
        </div>
    </transition>



export default {
props: ['banner', 'index', 'visibleSlide', 'slideName'],
data() {
    return {
    }
}
}



    .slider img{
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .left-enter-active{
        animation: leftin .5s ease-in-out
    }
    .left-leave-active{
        animation: leftout .5s ease-in-out
    }
    @keyframes leftin{
        from {transform: translateY(100px)}
        to {transform: translateY(0)}
    }
    @keyframes leftout{
        from {transform: translateY(0)}
        to {transform: translateY(-100px)}
    }
    .right-enter-active{
        animation: rightin .5s ease-in-out
    }
    .right-leave-active{
        animation: rightout .5s ease-in-out
    }
    @keyframes rightin{
        from {transform: translateY(-100px)}
        to {transform: translateY(0)}
    }
    @keyframes rightout{
        from {transform: translateY(0)}
        to {transform: translateY(100px)}
    }
    





*/