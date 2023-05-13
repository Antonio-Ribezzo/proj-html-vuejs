<script>
    export default {
        name: 'HeaderComp'
    }
</script>

<template>
    <header>
        <div id="headerUp">
            <h2>Header Up</h2>
        </div>
        <div id="headerDown">
            <h2>Header Down</h2>
        </div>
    </header>
</template>

<style lang="scss" scoped>

    @use '../style/main.scss' as *;

    header{

        #headerUp{
            background-color: $colorHeaderUp;
        }

        #headerDown{
            background-color: $colorHeaderDown;
        }
    }

</style>