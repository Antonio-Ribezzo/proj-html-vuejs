<script>
    export default {
        name: 'SectionThreeComp'
    }
</script>

<template>
    <section class="position-relative py-3">
        <div i class="container d-flex justify-content-between align-items-center">
            <!-- content sx -->
            <div id="contentSx-Sec3" class="d-flex flex-column justify-content-between align-items-center">
                <img src="/img/artist-quote-icon.png" alt="quote-icon" class="mb-4">
                <h2 class="text-center">I coach and mentor<br>visual artists, like<br>you, to Create Like<br>You mean It</h2>
                <span class="handWriting text-capitalize mt-3">martin garrix</span>
            </div>
    
            <!-- content dx -->
            <div id="contentDx-Sec3" class="d-flex flex-column flex-wrap justify-content-between align-items-start mt-5">
                <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be. I support artists in crafting and living a creative life as well as feeling good about themselves and their art.</p>
    
                <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
    
                <button class="buttonTwo mt-3">Get started today</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;
    section{
        .container{
            #contentSx-Sec3{
                width: 50%;
                
                h2{
                    font-size: 2.5rem;
                }
            }
    
            #contentDx-Sec3{
                width: 50%;
            }
        }
    }
</style>