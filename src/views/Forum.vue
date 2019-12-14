<template>
  <Page>
    <div class="forum__container">
      <h1>Forum</h1>
      <hr>

      <p>Under construction...</p>
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
export default class Forum extends Vue {}
</script>
<style lang="scss" scoped>
.forum {
  &__container {

  }
}
</style>
