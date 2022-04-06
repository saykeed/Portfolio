<template>
    <div class="aboutBody">
        <Header />
        <div class="about">
            <p>Hi there!</p>
            <h1>I'm Abubakri Sherif Opeyemi.</h1>
            <p>I'm a 22-year-old developer based in Bangladesh. I specialize in JavaScript and my main area of interest is Front-End Development. I love developing tools/sites/apps that solve real problems or help make someone's life easier. I like impactful work.</p>
            
            <h2>Skills</h2>
            <p>My current skill set includes JavaScript, Vue, Nuxt, Firebase, SASS, Bootstrap, CSS, HTML etc. And that's excluding all the common (yet sometimes complex) build/workflow tools like Webpack, Babel etc.</p>
            <p>
            However, I believe in tool agnostic skills. Being in an industry that moves at the speed of time, it sometimes doesn't matter what frameworks/tools I'm familiar with. Because tools/frameworks are so fickle these days that they can become obsolete within months! What matters more is how fast can I learn and make myself comfortable with newer technology. I believe I'm a quick learner. I prioritize concepts over techniques. 
            </p>
            <p>
                Simplicity, though overused (and sometimes misused) as a term, is something I really value. I like to build solutions that are simple yet interactive for the users.
            </p>
            <p>
            Besides coding, I'm also very passionate about watching movies. Plus I also have interest in Cyber Security. I hope someday i'll be able to explore the field.
            </p>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .aboutBody{
        background-image: url('@/assets/svg/one.svg');
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