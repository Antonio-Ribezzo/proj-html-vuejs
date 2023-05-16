<script>
    export default {
        name: 'SectionFourComp'
    }
</script>

<template>
    <section class="d-flex position-relative justify-content-center">
        <!-- waves & background-->
        <svg class="position-absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#faf8f6" fill-opacity="1" d="M0,96L26.7,90.7C53.3,85,107,75,160,101.3C213.3,128,267,192,320,229.3C373.3,267,427,277,480,288C533.3,299,587,309,640,266.7C693.3,224,747,128,800,85.3C853.3,43,907,53,960,90.7C1013.3,128,1067,192,1120,202.7C1173.3,213,1227,171,1280,138.7C1333.3,107,1387,85,1413,74.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        <!-- youtube video -->
        <div class="d-flex justify-content-center align-items-center p-5 position-relative">
            <div id="playerVideo-Sec4">
                <!-- background shapes -->
                <div id="ring-Sec4" class="position-absolute ringShape"></div>
        
                <img id="shape01-Sec4" class="position-absolute" src="/img/maxcoach-shape-12.png" alt="shape-14">
        
                <svg id="shape03-Sec4" class="position-absolute"  xmlns="http://www.w3.org/2000/svg">
                    <path fill="#B2E0F6" d="M23.1,-34.2C35.5,-32.8,55.1,-38,67.3,-33.4C79.5,-28.8,84.2,-14.4,83.2,-0.6C82.2,13.2,75.5,26.5,67.8,38.8C60.1,51.1,51.4,62.5,39.9,66.1C28.5,69.6,14.2,65.2,-1.2,67.3C-16.6,69.3,-33.3,77.9,-45,74.5C-56.8,71.2,-63.7,56,-67.9,41.6C-72,27.2,-73.5,13.6,-75.1,-1C-76.8,-15.5,-78.6,-31,-73.5,-43.8C-68.5,-56.6,-56.4,-66.7,-43,-67.6C-29.6,-68.5,-14.8,-60.1,-4.7,-51.9C5.3,-43.7,10.6,-35.7,23.1,-34.2Z" transform="translate(100 100)" />
                </svg>
        
                <img id="shape02-Sec4" class="position-absolute" src="/img/maxcoach-shape-05.png" alt="shape-05">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/26a30Fy7uAw" title="YouTube video player"></iframe>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;

    section{
        height: 45rem;
        div{
            z-index: 999999;
            #playerVideo-Sec4{
                width: 800px;
                height: 450px;
            }
        }
        svg{
            bottom: 0;
            left: 0;
            right: 0;
        }

        #ring-Sec4{
            top: 10rem;
            right: -1rem;
            z-index: 9999999999999;
        }

        #shape01-Sec4{
            z-index: -1;
            bottom: 4rem;
            right: -4rem;
        }

        #shape02-Sec4{
            z-index: -1;
            top: 6rem;
            left: 0rem;
        }

        #shape03-Sec4{
            z-index: -1;
            rotate: 250deg;
            top: 7rem;
            left: -10rem;
        }
    }
</style>