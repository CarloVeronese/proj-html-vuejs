<script>
import AppHeaderInfo from './AppHeaderInfo.vue';
import { store } from '../store';
import AppNavBar from './AppNavBar.vue';
export default {
    data() {
        return {
            store: store
        }
    },
    components: {
    AppHeaderInfo,
    AppNavBar
}
}
</script>

<template>
    <header>
        <AppHeaderInfo :companyNumber="store.companyNumber" />
        <AppNavBar :navbarList="store.navbarList" />
        <section class="hero grow-1">
            <div class="container hero-content justify-center">
                <h1 class="hero-title">Drive with Avada</h1>
                <p class="hero-paragraph">We offer the finest driving tuition money can buy</p>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
    header {
        display: flex;
        flex-direction: column;
        height: 768px;
        background-image: url(homepage-hero-background.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        .hero {
            display: flex;
            .hero-content {
            color: white;
            display: flex;
            flex-direction: column;
                .hero-title {
                    font-size: 60px;
                }
                .hero-paragraph {
                    font-size: 26px;
                }
            }
        }
    }
</style>