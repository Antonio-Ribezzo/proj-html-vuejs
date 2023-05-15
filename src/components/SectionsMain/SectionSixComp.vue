<script>
    // importo lo store js
    import { store } from '../../store';
    // importo il componente card Artist
    import cardArtistComp from './Section-six-component/cardArtistComp.vue';

    export default {
        name: 'SectionSixComp',
        components:{
            cardArtistComp
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
            <span class="handWriting text-capitalize">Artist coaching</span>
            <h2>Latest online courses</h2>
        </div>
        <!-- container cards   -->
        <div class="container d-flex justify-content-between align-items-start gap-4 flex-wrap position-relative">
            <cardArtistComp v-for="(el,i) in store.cardArtistSectionSix"
            :key="i"
            :infoArtistCard="el"
            />
            <!-- aside text -->
            <span id="asideText" class="position-absolute sideWriting text-capitalize">courses</span>
        </div>
        <!-- background images -->
        <img id="shape01" class="position-absolute" src="/img/artist-shape-01-600x577.png" alt="artist-shape-01">
        <img id="shape02" class="position-absolute" src="/img/artist-shape-01-lightBlue-600x577.png" alt="artist-shape-02">
        <!-- button -->
        <button class="buttonTwo mt-5 mb-3">
            View all Courses 
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;
    section{
        #shape01{
            z-index: -1;
            top: 0;
            right: 0;
            object-position: 20rem;
        }

        #shape02{
            z-index: -1;
            top: 30rem;
            left: -20rem;
            // object-position: 20rem;
        }

        #asideText{
            opacity: 0.6;
            font-size: 10rem;
            line-height: 10rem;
            rotate: 90deg;
            right: -25rem;
            top: 20rem;
        }
    }
    
</style>