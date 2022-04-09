<template>
    <div class="portfolio">
        <h1>E-commerce</h1>
        <p>
            I was tired of switching between browser, code editor, To-do app and a Timer app. So I created Nest Tab.
        </p>
        <img src="@/assets/img/portimg.JPG" alt="">
        <div class="portBtn">
            <NuxtLink to="/">Live Demo</NuxtLink>
            <NuxtLink to="/">Code on Github</NuxtLink>
        </div>
        <p>
            Nest Tab is a simple Google Chrome extension that replaces your New Tab page with a clean looking page that contains tools to help you stay productive. It currently features a Todo list and a Pomodoro clock that works together, a Shelf to dump URLs that you want to take a look at later, and a Bookmark quick access tool. Nest Tab is created using React. See the repo for more details.
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
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