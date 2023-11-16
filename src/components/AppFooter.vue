<script>
import AppFooterMenu from './AppFooterMenu.vue';
import {store} from '../store';
export default {
    data() {
        return {
            store: store
        }
    },
    components: {
        AppFooterMenu
    }
}
</script>

<template>
    <AppFooterMenu :contacts="store.footerContacts" :courses="store.coursesArray"/>

</template>

<style lang="scss" scoped>
</style>