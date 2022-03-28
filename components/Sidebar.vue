<template>
    <div class="sidebar_back">
        <div class="sidebar">
            <h2>Shopify</h2>
            <NuxtLink 
            v-for="link in links" :key="link.text"
            :to="link.route">
            {{ link.text }}
            </NuxtLink>
        </div>
        <div class="sidebar_overlay" @click="closeSidebar"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {text: 'Signup', route: '/signup'},
                {text: 'Login', route: '/login'}
            ]
        }
    },
    methods: {
        closeSidebar() {
            this.$emit('emitCloseSidebar')
        }
    }
}
</script>

<style>
    .sidebar_back{
        background: rgba(0, 0, 0, 0.7);
        height: 100vh;
        width: 100vw;
        color: #121212;
        position: relative;
    }
    .sidebar{
        background: white;
        height: 100vh;
        width: 250px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .sidebar_overlay{
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: calc(100vw - 250px);
        background: transparent;
    }
    .sidebar h2{
        text-align: center;
        margin: 10px auto 30px;
    }
    .sidebar a{
        display: block;
        text-decoration: none;
        padding: 15px;
        color: rgb(255, 255, 255);
        background: rgb(0, 0, 0);
        margin: 5px 0;
    }
</style>