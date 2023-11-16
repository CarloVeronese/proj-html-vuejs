<script>
export default {
    data() {
        return {
            socials: ['facebook-f', 'twitter', 'youtube', 'instagram']
        }
    }
}
</script>

<template>
    <section class="footer-socials">
        <div class="container justify-between">
            <div class="disclaimer light-grey">@Copyright 2012 - 2020 | Avada Theme by <a href="" class="green">ThemeFusion</a> | All Rights Reserved | Powered by <a href="" class="green">WordPress</a></div>
            <ul class="socials-container">
                <li v-for="social in socials">
                    <a href=""><font-awesome-icon :icon="`fa-brands fa-${social}`" /></a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
.footer-socials {
    background-color: #1C1D1E;
    padding: 65px 0 60px;
    .container {
        display: flex;
        .disclaimer {
            font-size: 12px;
        }
        .socials-container {
            display: flex;
            gap: 18px;
        }
    }
}
</style>