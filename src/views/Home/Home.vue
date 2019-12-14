<template>
  <PublicPage>
    <div class="home__container">
      <section class="hero">
        <img :src="images[index]" :alt="index" />
      </section>
    </div>
  </PublicPage>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import PublicPage from '@/components/layouts/PublicPage.vue';
import { Carousel, Slide } from 'vue-carousel';
import Image1 from './../../assets/1.jpg';
import Image2 from './../../assets/2.jpg';
import Image3 from './../../assets/3.jpg';
import Image4 from './../../assets/4.jpg';
import Image5 from './../../assets/5.jpg';

@Component({
  components: {
    PublicPage,
    Carousel,
    Slide,
  },
})
export default class Home extends Vue {
  index = 0;

  images = [Image1, Image2, Image3, Image4, Image5];

  created() {
    this.cycleIndex();
  }

  cycleIndex() {
    const isOutOfBound = this.images.length  === this.index;
    if (isOutOfBound) {
      this.index = 0;
      this.cycleIndex();
      return;
    }
    setTimeout(() => {
      this.index++;
      this.cycleIndex();
    }, 2000);
  }
}
</script>
<style lang="scss" scoped></style>
