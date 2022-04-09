<template>
    <div class="portfolio">
        <h1>{{ project.title }}</h1>
        <p>
            {{ project.intro}}
        </p>
        <img :src="require(`@/assets/img/${project.imgUrl}.png`)" alt="project screenshot">
        <div class="portBtn">
            <a :href="project.liveUrl" target="blank">Live Demo</a>
            <a :href="project.gitCodeUrl" target="blank">Code on Github</a>
        </div>
        <p>
            {{project.description}}
        </p>
    </div>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style>
    .portfolio{
        margin-top: 50px;
    }
    .portfolio img{
        display: block;
        width: 90%;
        margin: 10px auto;
    }
    .portBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px auto;
    }
    .portBtn a{
        background: purple;
        padding: 5px;
        border-radius: 3px;
        text-decoration: none;
        color: white;
        display: block;
        margin: 0 5px;
    }
</style>

