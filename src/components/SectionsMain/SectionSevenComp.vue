<script>
    // importo lo store
    import { store } from '../../store';
    // importo il componente event
    import cardEventComp from './Section-seven-component/cardEventComp.vue';


    export default {
        name: 'SectionSevenComp',
        components:{
            cardEventComp
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <section class="d-flex flex-column justify-content-center align-items-center position-relative py-5 position-relative">
        <div id="textSection" class="text-center mb-5">
            <span class="handWriting text-capitalize">Articles and Tips</span>
            <h2 class="text-capitalize">latest from the blog</h2>
        </div>
        <!-- container cards   -->
        <div class="container d-flex justify-content-between align-items-start gap-4 flex-wrap position-relative">
            
            
        </div>
        <!-- background images -->
        <svg id="shape03" class="position-absolute" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#B2E0F6" d="M23.1,-34.2C35.5,-32.8,55.1,-38,67.3,-33.4C79.5,-28.8,84.2,-14.4,83.2,-0.6C82.2,13.2,75.5,26.5,67.8,38.8C60.1,51.1,51.4,62.5,39.9,66.1C28.5,69.6,14.2,65.2,-1.2,67.3C-16.6,69.3,-33.3,77.9,-45,74.5C-56.8,71.2,-63.7,56,-67.9,41.6C-72,27.2,-73.5,13.6,-75.1,-1C-76.8,-15.5,-78.6,-31,-73.5,-43.8C-68.5,-56.6,-56.4,-66.7,-43,-67.6C-29.6,-68.5,-14.8,-60.1,-4.7,-51.9C5.3,-43.7,10.6,-35.7,23.1,-34.2Z" transform="translate(100 100)" />
        </svg>
        <img id="shape01" class="position-absolute" src="/img/maxcoach-shape-03.png" alt="maxcoach-shape-03-bg">
        <div id="ring2" class="position-absolute ringShape"></div>
        <img id="shape02" class="position-absolute" src="/img/maxcoach-shape-12.png" alt="shape-14">
        <!-- <img id="shape02" class="position-absolute" src="/img/artist-shape-01-lightBlue-600x577.png" alt="artist-shape-02"> -->
        <!-- link -->
        <div id="containerSpan">
            <span class="colorBrands">Get into details now?</span>
            <a href="#">
                <span id="linkPost" class="mt-5 mb-3">
                View all posts
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </span>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;
    section{
        height: 50rem;
        background-color: $bgSectionSevenMain;
        #shape01{
            right: 0;
            // object-position: 3rem;
            top: 10rem;
        }

        #ring2{
            top: 5rem;
            left: 10rem;
        }

        #shape02{
            top: 10rem;
            left: 35rem;
        }

        #shape03{
            scale: 15%;
            top: 4rem;
            left: 50rem;
        }

        #containerSpan{
            font-size: 0.8rem;
            a{
                text-decoration: none;
            }
            #linkPost{
                color: $MainColor;
                font-weight: bold;
            }
        }
    }

</style>