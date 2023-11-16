<script>
import AppForm from './AppForm.vue';
import AppCtA from './AppCtA.vue';
import AppPromise from './AppPromise.vue';
import AppInstructors from './AppInstructors.vue';
import AppTestimonials from './AppTestimonials.vue';
import AppLatestNews from './AppLatestNews.vue';
export default {
    components: {
        AppForm,
        AppCtA,
        AppPromise,
        AppInstructors,
        AppTestimonials,
        AppLatestNews
    }
}
</script>

<template>
    <AppForm />
    <AppCtA />
    <AppPromise />
    <AppInstructors />
    <AppTestimonials />
    <AppLatestNews />
</template>

<style lang="scss" scoped>
</style>