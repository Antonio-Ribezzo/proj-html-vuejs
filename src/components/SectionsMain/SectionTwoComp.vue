<script>
    import {store} from '../../store'
    // importo il componente box
    import boxComp from '../SectionsMain/Section-two-component/boxComp.vue'

    export default {
        name: 'SectionTwoComp',
        components: {
            boxComp
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <section class="d-flex flex-column justify-content-center align-items-center position-relative py-5">
        <!-- background images -->
        <svg id="shape01" class="position-absolute" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fef9f7" d="M23.1,-34.2C35.5,-32.8,55.1,-38,67.3,-33.4C79.5,-28.8,84.2,-14.4,83.2,-0.6C82.2,13.2,75.5,26.5,67.8,38.8C60.1,51.1,51.4,62.5,39.9,66.1C28.5,69.6,14.2,65.2,-1.2,67.3C-16.6,69.3,-33.3,77.9,-45,74.5C-56.8,71.2,-63.7,56,-67.9,41.6C-72,27.2,-73.5,13.6,-75.1,-1C-76.8,-15.5,-78.6,-31,-73.5,-43.8C-68.5,-56.6,-56.4,-66.7,-43,-67.6C-29.6,-68.5,-14.8,-60.1,-4.7,-51.9C5.3,-43.7,10.6,-35.7,23.1,-34.2Z" transform="translate(100 100)" />
        </svg>
        <img id="shape02" class="position-absolute" src="/img/maxcoach-shape-13.png" alt="shape-13">
        <img id="shape03" class="position-absolute" src="/img/artist-shape-01-300x288.png" alt="maxcoach-shape-01">
        <img id="shape04" class="position-absolute" src="/img/maxcoach-shape-14.png" alt="shape-14">
        <!-- text (title) -->
        <div id="textSection" class="text-center mb-3">
            <span class="handWriting">Artist coaching</span>
            <h2>I understand what it takes to create.<br>I can help you with</h2>
        </div>
        <!-- componets box with props -->
        <div id="containerBoxes" class="container d-flex justify-content-between p-0 m-0">
            <boxComp v-for="(el,i) in store.sectionTwoBox"
            :key="i"
            :infoBox="el"
            :class="((i % 2) == 0)? 'align-self-start' : 'align-self-end'"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;

    section{
        // height: 50rem;
        width: 100%;
        
        // bg shape
        #shape01{
            height: 25rem;
            right: 15rem;
            top: 10rem;
        }

        #shape02{
            right: 0;
            object-position: 3rem;
            top: 10rem;
        }

        #shape03{
            scale: 150%;
            rotate: 220deg;
            left: -3rem;
            top: 10rem;
        }

        #shape04{
            width: 100%;
            right: 0;
            left: 0;
        }

        #textSection{
            z-index: 999999;
        }

        #containerBoxes{
            width: 70rem;
            height: 18rem;
            z-index: 9999999;
        }
    }
</style>