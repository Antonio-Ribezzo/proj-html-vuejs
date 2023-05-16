<script>
    export default {
        name: 'cardArtistComp',
        props: ['infoArtistCard']
    }
</script>

<template>
    <div class="container0-Card d-flex flex-column justify-content-start align-items-start bg-white rounded">
        <!-- image artist course -->
        <div class="containerImage">
            <img class="img-fluid" :src="infoArtistCard.urlImage" :alt="infoArtistCard.title">
        </div>
        <!-- container info course -->
        <div class="p-4">
            <span class="price">{{ infoArtistCard.price }}</span>
            <h4 class="mt-3">{{ infoArtistCard.title }}</h4>
            <div class="containerInfo-Card d-flex justify-content-start align-items-center mt-3">
                <!-- lesson -->
                <div class="d-flex align-items-center me-4">
                    <font-awesome-icon :icon="['far', 'file-lines']" />
                    <span class="ms-2">{{ infoArtistCard.numberOfLessons }}</span>
                </div>
                <!-- students -->
                <div class="d-flex align-items-center">
                    <font-awesome-icon :icon="['far', 'user']" />
                    <span class="ms-2">{{ infoArtistCard.numberOfStudents }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/main.scss' as *;

    .container0-Card{
        width: calc((100% / 4) - 2rem);
        cursor: pointer;
        &:hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            scale: 105%;
        }
        .price{
            color: $MainColor;
            font-weight: bold;
        }

        h4{
            font-size: 1.3rem;
            font-weight: bold;
        }
        .containerInfo-Card{
            width: 85%;
            div{
                font-size: 0.8rem;
                color: $fontColorBrands;
            }
        }
    }
</style>