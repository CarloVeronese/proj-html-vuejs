<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import '@fontsource-variable/mulish';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    scrollUpPage() {
      console.log('ciao');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter @scroll-up="scrollUpPage()"/>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
