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
        <div id="textSection" class="text-center mb-5">
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
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;

    #containerEventUpcoming{
        width: 60%;
    }
</style>