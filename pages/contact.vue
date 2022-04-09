<template>
    <div class="aboutContact">
        <Header />
        <div class="contact">
            <h1>Now that you are here!</h1>
            <p>
                Contact me to talk about project ideas, Programming, Javascript etc Or just say "Hi" and we'll find something we enjoy talking about. You can reach me through any of the platform listed below.
            </p>
            <p>Email: saykeed@gmail.com</p>
            <div class="contactBtn">
                <a href="mailto:saykeed@gmail.com"><i class="fa fa-envelope"></i></a>
                <a 
                    v-for="link in links"
                    :key="link.route"
                    :href="link.route" 
                    target="blank"
                >
                    <i :class="link.icon"></i>
                </a>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {icon: 'fa fa-github', route: 'https://github.com/saykeed'},
                {icon: 'fa fa-linkedin', route: 'https://www.linkedin.com/in/sherif-abubakri-019971196/'},
                {icon: 'fa fa-twitter', route: 'https://twitter.com/sherifopeyemi5?t=4n3ayEzGsnOezhZiuS6cCA&s=09'}
            ]
        }
    }
}
</script>

<style scoped>
    .aboutContact{
        background-image: url('@/assets/svg/contact.svg');
        background-repeat: no-repeat;
        background-size: 600%;
        background-position: center;
        width: 100vw;
        height: 100vh;
        border: 1px solid transparent;
    }
    .contact{
        margin: 100px auto 60px;
        padding: 20px 30px;
        height: calc(100vh - 160px);
        overflow-y: scroll;
        width: 100%;
        max-width: 800px;
        color: white;
        font-family: museo-sans,sans-serif;
    }
    .contactBtn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contactBtn a{
        width: 40px;
        height: 40px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin: 0 10px;
        background: white;
        color: purple;
        text-decoration: none;
        font-size: 20px;
    }
    
</style>

/*   



*/