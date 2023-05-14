<script>
    export default {
        name: 'boxComp',
        props: ['infoBox']
    
    }
</script>

<template>
    <div class="d-flex flex-column justify-content-start align-items-start">
        <img class="img-fluid mb-1" :src="infoBox.urlImg" alt="">
        <h4>{{ infoBox.title }}</h4>
        <p>{{ infoBox.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/main.scss' as *;
    div{
        max-width: 10rem;
        img{
            scale: 80%;
        }
        h4{
            font-size: 1rem;
        }
        p{
            font-size: 0.8rem;
        }
    }
</style>