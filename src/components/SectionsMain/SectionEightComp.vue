<script>
    // importo lo store
    import { store } from '../../store';
    // importo il componente card
    import cardUpcomingComp from './Section-eight-component/cardUpcomingComp.vue'

    export default {
        name: 'SectionEightComp',
        components: {
            cardUpcomingComp
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
        <div class="text-center mb-5">
            <span class="handWriting text-capitalize">upcoming events</span>
            <h2 class="text-capitalize">let's work together</h2>
        </div>
        <!-- container cards   -->
        <div id="containerEventUpcoming" class="d-flex justify-content-between align-items-center flex-wrap">
            <cardUpcomingComp v-for="(el,i) in store.cardUpcomingEvents"
            :key="i"
            :infoUpcoming="el"
            :position="i"
            />
        </div>
        <!-- aside text -->
        <span id="asideText-Sec8" class="position-absolute sideWriting text-capitalize">events</span>
        <!-- background image -->
        <img id="shape01-Sec8" class="position-absolute" src="/img/maxcoach-shape-13-150x150.png" alt="artist-shape-13">
        <img id="shape02-Sec8" class="position-absolute" src="/img/artist-shape-01-300x288.png" alt="artist-shape-01">
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;

    section{
        background-image: url('/img/artist-shape-01.png');
        background-repeat: no-repeat;
        background-position: bottom left -20rem;
        
    }

    #containerEventUpcoming{
        width: 60%;
    }

    #asideText-Sec8{
        opacity: 0.6;
        font-size: 10rem;
        line-height: 10rem;
        rotate: 90deg;
        left: -8rem;
        top: 30rem;
    }

    #shape01-Sec8{
        right: 0;
        top: 15rem;
    }

    #shape02-Sec8{
        rotate: 350deg;
        right: 2rem;
        top: 15rem;
    }
</style>