<template>
    <div class="aboutProject">
        <Header />
            <transition
                appear=""
                @before-enter="beforeEnter"
                @enter="enter"
            >
                <div class="project">
                    <h1>Time to talk work! </h1>
                    <p>
                        I like to try out new tools and technologies to create apps/sites that somehow make mylife/someone else's life easier. Below are some of the projects that I have worked on. Also, I'm extremely grateful to the entire Open Source community for all the amazing stuff that it provides us and makes it possible for everyone to create amazing things. I hope and look forward to contribute to Open Source whenever I can.
                    </p>

                    <div class="portBox">
                        <Portfolio 
                            v-for="project in projects"
                            :key="project.intro"
                            :project="project"
                        />
                    </div>
                </div>
            </transition>
        <Footer />
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data() {
        return {
            projects: [
                {
                    title: 'Goalmatic',
                    intro: 'I worked with the founder to implement the new design and also add new features to the app.',
                    imgUrl: 'goalmatic',
                    liveUrl: 'https://www.goalmatic.io/',
                    gitCodeUrl: null,
                    description: 'Goalmatic lets you build, customize, and manage intelligent AI agents and workflows that automate processes, adapt to your needs, and reduce your workload like never before.'
                },
                {
                    title: 'Modifynames.com',
                    intro: 'Built a newspaper publishing platform using Nuxt3 and Firebase',
                    imgUrl: 'modifynames',
                    liveUrl: 'https://www.modifynames.com/',
                    gitCodeUrl: null,
                    description: 'A platform that makes public announcements easy and help you publish it in top Nigerian newspapers — all from the comfort of your phone'
                },
                {
                    title: 'Shuttler\'s website',
                    intro: 'Contributed to building the landing page of the shuttler\'s website',
                    imgUrl: 'shuttlers',
                    liveUrl: 'https://www.shuttlers.co/',
                    gitCodeUrl: null,
                    description: ''
                },
                {
                    title: 'Shuttler\'s customer app',
                    intro: 'Contributed to building the shuttler\'s customer app for booking rides',
                    imgUrl: 'customerDashboard',
                    liveUrl: 'https://my.shuttlers.co/',
                    gitCodeUrl: null,
                    description: ''
                },
				{
                    title: 'Game-center',
                    intro: 'I tried to build a multiplaying gaming app with some other amazing features',
                    imgUrl: 'gamecenter',
                    liveUrl: 'https://saykeed-gamecenter.netlify.app/',
                    gitCodeUrl: 'https://github.com/saykeed/gamecenter.git',
                    description: 'A gaming app that support multiplaying, it also has a chat and video call functionality. Built with vue and node js for the server. Used socket io for transfering data and peer js for the video call'
                },
                {
                    title: 'Google Meet Clone',
                    intro: 'I decided to try this when i came across the WEBRTC documentation and i did not regret doing so as the project gave me so much joy.',
                    imgUrl: 'meetclone',
                    liveUrl: 'https://gmeetcloneapp.netlify.app',
                    gitCodeUrl: 'https://github.com/saykeed/gmeet-clone-updated.git',
                    description: 'This is one of the project that has help to improve my problem solving skill, as it was very challenging because the documentation was not straight forward. I had to do a lot of research on my own before i was able to get it right, even though i am not through with the project, i have managed to make it work on devices with the same internet connection and i am still working on it to make it work on devices with different internet connection. Built with vue and i used firebase as the signalling server'
                },
                {
                    title: 'Whatsapp Clone',
                    intro: 'After coming across web sockets and working with it to implement a small chat app, I decided to implement a chat app with Whatsapp Interface',
                    imgUrl: 'whatsappclone',
                    liveUrl: 'https://saykeedwhatsapp.netlify.app',
                    gitCodeUrl: 'https://github.com/saykeed/whatsapp-clone.git',
                    description: 'A chat app that allows users to register with their phone number and then chat with fellow registered users, this project was another kinda project that taught me a lot in terms of logical reasoning because at some point i was stuck on how to structure my firebase database to implement direct messageing but i eventually solved it. Also i am hoping to add voice note to it in future. Built with vue and firebase'
                },
                {
                    title: 'Shopify(E-commerce)',
                    intro: 'One of my mentor gave me this task to work on to improve my working with API and my front end skill',
                    imgUrl: 'shopify',
                    liveUrl: 'https://saykeedshopify.netlify.app/',
                    gitCodeUrl: 'https://github.com/saykeed/E-commerce.git',
                    description: 'An E-commerce web app that has the functionlity of a real e-commerce app. The app is fully responsive. It uses Fake store API for fetching product. I learnt a lot while working on this project as i got to implement things i have never implemented before. Technologies used includes Vue/Nuxt, Vuex, Firebase for the authentication, also integrated Paystack for making payment(not real money) etc'
                },
                // {
                //     title: 'Keji Styling(CRUD APP)',
                //     intro: 'I built this for a friend of mine who sells clothes',
                //     imgUrl: 'kejistyling',
                //     liveUrl: 'https://kejistyling.netlify.app',
                //     gitCodeUrl: 'https://kejistyling.netlify.app',
                //     description: 'Yeah, this is an e-commerce app with CRUD functionality, it is built for a friend of mine who post images of jeans on whatsapp status, then i decided to build her an online store so she can post her products there, and then she can post just the link to the site on her whatsapp status. As the admin she gets to post, update, and delete products, the users also get to add to wishlist and cart and can also complete their order by getting redirected to whatsapp with pre-filled message containg the details of the product in their cart or by a phone call. Built with vue, firebase for authentication, '
                // },
                // {
                //     title: 'Photography Website',
                //     intro: 'Built for my area brother who is into photography hoping he would later on get a domain and host it.',
                //     imgUrl: 'ikbo',
                //     liveUrl: 'https://ikbomedia.netlify.app/',
                //     gitCodeUrl: 'https://github.com/saykeed/ikbo-photography.git',
                //     description: 'A photography werbsite  made out of love for my area brother, built with vue.'
                // },
                {
                    title: 'My Portfolio Website',
                    intro: 'Built to tell people more about me and to showcase the project i have worked on.',
                    imgUrl: 'portfolio',
                    liveUrl: 'https://saykeed.netlify.app',
                    gitCodeUrl: 'https://github.com/saykeed/Portfolio.git',
                    description: 'Ofcoure it made the list because i had actually built a replica of someone else portfolio. It all started when i came across the Portfolio on Github and i was like wow, i have to challenge myself with this, especially the animation part. Well i\'m glad i\'m able to build it even though i added some animations of my own.'
                }
            ]
        }
    },
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
    .aboutProject{
        background-image: url('@/assets/svg/project.svg');
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
        margin-top: 50px;
    }
    
</style>

