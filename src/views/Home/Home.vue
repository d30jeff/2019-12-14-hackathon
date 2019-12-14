<template>
  <PublicPage>
    <div class="home__container">
      <carousel :perPage="1">
        <slide>
          <img src="@/assets/1.jpg" alt="1" />
        </slide>
        <slide>
          <img src="@/assets/2.jpg" alt="2" />
        </slide>
        <slide>
          <img src="@/assets/3.jpg" alt="3" />
        </slide>
        <slide>
          <img src="@/assets/4.jpg" alt="4" />
        </slide>
        <slide>
          <img src="@/assets/5.jpg" alt="5" />
        </slide>
      </carousel>
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
