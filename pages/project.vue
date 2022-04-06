<template>
    <div class="aboutProject">
        <Header />
        <div class="project">
            <h1>Time to talk work! </h1>
            <p>
                I like to try out new tools and technologies to create apps/sites that somehow make my/someone else's life easier. Below are some of the projects that I loved working on. Also, I'm extremely grateful to the entire Open Source community for all the amazing stuff that it provides us and makes it possible for everyone to create amazing things. I love contributing to Open Source whenever I can.
            </p>

            <div class="portBox">
                <Portfolio />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .aboutProject{
        background-image: url('@/assets/svg/two.svg');
        background-repeat: no-repeat;
        background-size: 600%;
        background-position: center;
        width: 100vw;
        height: 100vh;
        border: 1px solid transparent;
    }
    .project{
        margin: 100px auto 60px;
        padding: 20px 30px;
        height: calc(100vh - 160px);
        overflow-y: scroll;
        width: 100%;
        max-width: 800px;
        color: white;
        font-family: museo-sans,sans-serif;
    }
    .portBox{
        margin-top: 100px;
    }
    
</style>

/*   



*/