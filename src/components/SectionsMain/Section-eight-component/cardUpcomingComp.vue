<script>
    export default {
        name: 'cardUpcomingComp',
        props: ['infoUpcoming', 'position']
    }
</script>

<template>
    <div class="containerCardEvent d-flex align-items-center mb-5">
        <!-- image -->
        <div v-if="position <= 1" class="imageContainer me-3">
            <img class="img-fluid" :src="infoUpcoming.urlEvent" :alt="infoUpcoming.title">
        </div>
        <!-- info -->
        <div class="textContainer d-flex flex-column justify-content-start align-items-start" :class="(position <= 1)?'align-items-start':'align-items-end'">
            <span class="mb-2" >{{ infoUpcoming.date }}</span>
            <h4 :class="(position <= 1)?'text-start':'text-end'">{{ infoUpcoming.title }}</h4>
            <div class="d-flex justify-content-start align-items-center">
                <font-awesome-icon  class="me-2" :icon="['fas', 'location-dot']" />
                <span :class="(position <= 1)?'text-start':'text-end'">{{ infoUpcoming.location }}</span>
            </div>
        </div>
        <!-- image -->
        <div v-if="position > 1" class="imageContainer ms-3">
            <img class="img-fluid" :src="infoUpcoming.urlEvent" :alt="infoUpcoming.title">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/main.scss' as *;

    .containerCardEvent{
        width: calc((100% / 2) - 2rem);
        cursor: pointer;
        .imageContainer{
            &:hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            scale: 105%;
            }
            img{
                height: 100%;
            }
        }
    
        .textContainer{
            span{
                font-weight: bold;
                font-size: 0.8rem;
            }
            h4{
                font-size: 1rem;
            }
            div{
                color: $fontColorBrands;
            }
        }
    }
</style>