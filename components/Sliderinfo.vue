<template>
    <div class="sliderinfo">
        <p>{{ banner.para }}</p>
        <h2>{{ banner.head }}</h2>
        <div class="sliderinfo_btn">Explore Now</div>
    </div>
</template>

<script>
export default {
    props: ['banner']
}
</script>

<style>
    .sliderinfo{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
    }
    .sliderinfo p{
        font-size: 13px;
    }
    .sliderinfo h2{
        margin: 2px 0;
    }
    .sliderinfo_btn{
        background: black;
        width: 40%;
        text-align: center;
        padding: 10px;
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
</style>