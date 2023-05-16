<script>
    export default {
        name: 'JumbotronComp'
    }
</script>

<template>
    <section class="d-flex flex-column justify-content-center align-items-center position-relative">
        <!-- text and button -->
        <div id="textJumbo" class="text-center position-relative">
            <span class="handWriting text-capitalize">hello, im martin</span>
            <h1 class="text-capitalize">artist coaching and mentoring<br>might be for you.</h1>
            <button class="buttonOne py-2 mt-3">Get started today</button>
            <!-- image background left -->
            <img id="shape04-jumbo" class="position-absolute" src="/img/artist-hero-image-03.png" alt="artist-hero3">
            <img id="shape05-jumbo" class="position-absolute" src="/img/artist-hero-image-02.jpg" alt="artist-hero2">
            <img id="shape06-jumbo" class="position-absolute" src="/img/artist-hero-image-01.jpg" alt="artist-hero1">
        </div>
        <!-- background left-->
        <img id="shape01-jumbo" class="position-absolute" src="/img/artist-shape-02-768x415.png" alt="shape-02">
        <svg id="shape02-jumbo" class="position-absolute" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#B2E0F6" d="M23.1,-34.2C35.5,-32.8,55.1,-38,67.3,-33.4C79.5,-28.8,84.2,-14.4,83.2,-0.6C82.2,13.2,75.5,26.5,67.8,38.8C60.1,51.1,51.4,62.5,39.9,66.1C28.5,69.6,14.2,65.2,-1.2,67.3C-16.6,69.3,-33.3,77.9,-45,74.5C-56.8,71.2,-63.7,56,-67.9,41.6C-72,27.2,-73.5,13.6,-75.1,-1C-76.8,-15.5,-78.6,-31,-73.5,-43.8C-68.5,-56.6,-56.4,-66.7,-43,-67.6C-29.6,-68.5,-14.8,-60.1,-4.7,-51.9C5.3,-43.7,10.6,-35.7,23.1,-34.2Z" transform="translate(100 100)" />
        </svg>
        <img id="shape03-jumbo" class="position-absolute" src="/img/artist-shape-03.png" alt="artist-shape3">
        <!-- background right -->
        <img id="shape07-jumbo" class="position-absolute" src="/img/artist-shape-01-600x577.png" alt="shape-01">
        <img id="shape08-jumbo" class="position-absolute" src="/img/artist-shape-05-300x198.png" alt="shape-05-artist">
        <img id="shape09-jumbo" class="position-absolute" src="/img/artist-shape-04-127x300.png" alt="shape-05-artist">
        <img id="shape10-jumbo" class="position-absolute" src="/img/maxcoach-shape-12-100x100.png" alt="maxcoach-shape-12">
        <img id="shape11-jumbo" class="position-absolute" src="/img/artist-hero-image-04.jpg" alt="artist-hero4">
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;

    section{
        background-color: $bgSectionOneMain;
        height: 40rem;
        #textJumbo{
            z-index: 99999999;
        }
        #shape01-jumbo{
            top: 0;
            left: 0;
        }
        #shape02-jumbo{
            height: 35rem;
            bottom: 0;
            left: -12rem;
        }
        #shape03-jumbo{
            top: 5rem;
            left: 2rem;
        }
        #shape04-jumbo{
            height: 15rem;
            bottom: -10rem;
            left: -10rem;
        }
        #shape05-jumbo{
            height: 20rem;
            top: -8rem;
            left: -20rem;
        }
        #shape06-jumbo{
            height: 12rem;
            bottom: -8rem;
            left: -26rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        // rigth
        #shape07-jumbo{
            top: 0rem;
            right: 4rem;
        }

        #shape08-jumbo{
            top: 20rem;
            right: 0rem;
        }

        #shape09-jumbo{
            height: 15rem;
            top: 5rem;
            right: 5rem;
        }

        #shape10-jumbo{
            bottom: 3rem;
            right: 15rem;
        }

        #shape11-jumbo{
            height: 22rem;
            top: 12rem;
            right: 10rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }
</style>