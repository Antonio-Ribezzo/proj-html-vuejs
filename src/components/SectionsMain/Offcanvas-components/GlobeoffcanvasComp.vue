<script>
    export default {
        name: 'GlobeoffcanvasComp',
    }
</script>

<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasGlobe" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasRightLabel">Maps</h3>
        </div>
        <div class="offcanvas-body">
            <div id="map">
                

            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../../../style/main.scss' as *;


</style>