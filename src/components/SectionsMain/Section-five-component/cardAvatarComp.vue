<script>
    export default {
        name: 'cardAvatarComp',
        props: ['infoAvatar']
    }
</script>

<template>
    <div class="container0 d-flex flex-column justify-content-start align-items-start bg-white p-5 rounded">
        <h4>{{ infoAvatar.title }}</h4>
        <p>{{ infoAvatar.text }}</p>
        <!-- img avatar -->
        <div class="d-flex justify-content-start align-items-center">
            <img class="rounded-circle me-3" :src="infoAvatar.urlAvatar" alt="">
            <div class="d-flex flex-column justify-content-between align-items-start">
                <h4>{{ infoAvatar.nameAvatar }}</h4>
                <span>{{ infoAvatar.roleAvatar }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/main.scss' as *;

    .container0{
        width: 30rem;
        cursor: pointer;
        opacity: 0.5;
        div{
            img{
                height: 4rem;
            }
        }
        &:hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }
</style>