<template>
  <Page>
    <div class="my-reviews__container">
      <h1>My Reviews</h1>
      <hr />

      <p>Under construction...</p>
    </div>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Page from '@/components/layouts/Page.vue';

@Component({
  components: {
    Page,
  },
})
export default class MyReviews extends Vue {}
</script>
<style lang="scss" scoped>
.my-reviews {
  &__container {
  }
}
</style>
