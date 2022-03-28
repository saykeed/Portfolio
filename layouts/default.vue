<template>
    <div class="default">
        <Topnav class="default_topnav"/>
        <Nuxt class="webPages"/>
        <Footer class="default_footer"/>
    </div>
</template>
<style scoped>
    .default{
        position: relative;
        width: 100%;
    }
    .default_topnav{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999999;
    }
    .default_footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 999999;
    }
    .webPages{
        margin: 70px auto;
    }
</style>