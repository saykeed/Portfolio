<template>
    <div class="aboutBody">
        <Header />
            <transition
                appear=""
                @before-enter="beforeEnter"
                @enter="enter"
            >
                <div class="about">
                    <p>Hi there!</p>
                    <h1>I'm Abubakri Sherif Opeyemi.</h1>
                    <p>I'm a Software developer based in Nigeria. I specialize in JavaScript and my main area of interest is Front-End Development. I love developing tools/sites/apps that solve real problems or help make someone's life easier. I like impactful work.</p>
                    
                    <h2>Skills</h2>
                    <p>My current skill set includes Vue/Nuxt, React/Next, Typescript, Ionic, Python, Node js, Firebase etc.</p>
                    <p>
                        However, I believe in tool agnostic skills. Being in an industry that moves at the speed of time, it sometimes doesn't matter what frameworks/tools I'm familiar with. Because tools/frameworks are so fickle these days that they can become obsolete within months! What matters more is how fast can I learn and make myself comfortable with newer technology. I believe I'm a quick learner. I prioritize concepts over techniques. 
                    </p>
                    <p>
                        Simplicity, though overused (and sometimes misused) as a term, is something I really value. I like to build solutions that are simple yet interactive for the users.
                    </p>
                    <p>
                        Besides coding, I'm also very passionate about Cyber Security and i really enjoy watching movies. I hope someday i'll be able to explore the field.
                    </p>
                </div>
            </transition>    
        <Footer />
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0 
            el.style.transform = 'translateY(70px)'
        },
        enter(el, done) {
            gsap.to(el, {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: "power2.inOut",
                onComplete: done
            })
        }
    }
}
</script>

<style scoped>
    .aboutBody{
        background-image: url('@/assets/svg/about.svg');
        background-repeat: no-repeat;
        background-size: 600%;
        background-position: center;
        width: 100vw;
        height: 100vh;
        border: 1px solid transparent;
    }
    .about{
        margin: 100px auto 60px;
        padding: 20px 30px;
        height: calc(100vh - 160px);
        overflow-y: scroll;
        width: 100%;
        max-width: 800px;
        color: white;
        font-family: museo-sans,sans-serif;
    }
    
</style>