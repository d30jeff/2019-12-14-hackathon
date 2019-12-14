<template>
  <PublicPage>
    <div class="home__container">

    </div>
  </PublicPage>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PublicPage from '@/components/layouts/PublicPage.vue';
import { Carousel, Slide } from 'vue-carousel';

@Component({
  components: {
    PublicPage,
    Carousel,
    Slide,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped></style>
