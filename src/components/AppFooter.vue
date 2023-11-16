<script>
import AppFooterMenu from './AppFooterMenu.vue';
import {store} from '../store';
import AppFooterSocials from './AppFooterSocials.vue';
export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        clickScrollUp() {
            this.$emit('scroll-up');
        }
    },
    components: {
        AppFooterMenu,
        AppFooterSocials
    }
}
</script>

<template>
    <footer>
        <AppFooterMenu :contacts="store.footerContacts" :courses="store.coursesArray"/>
        <AppFooterSocials />
        <font-awesome-icon icon="fa-solid fa-chevron-up" class="scroll-up light-grey" @click="clickScrollUp()"/>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    position: relative;
    .scroll-up {
        position: absolute;
        bottom: 0;
        right: 20px;
        background-color: #313131;
        padding: 9px 16px;
        border-radius: 5px 5px 0 0;
        cursor: pointer;
    }
}
</style>