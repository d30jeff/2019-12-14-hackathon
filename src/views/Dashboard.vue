<template>
  <Page>
    <div class="dashboard__container">
      <h1>Syllabus</h1>
      <hr>
    </div>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Page from '@/components/layouts/Page.vue';
import { Carousel, Slide } from 'vue-carousel';

@Component({
  components: {
    Page,
    Carousel,
    Slide,
  },
})
export default class Dashboard extends Vue {}
</script>
<style lang="scss" scoped>
.dashboard__container {

}
</style>
