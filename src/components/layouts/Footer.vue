<template>
  <div class="footer__container">
    <div class="footer__body"></div>
    <div class="footer__copyright">
      <p>Sabah EduHACK 14 & 15 December 2019</p>
      <a class="instagram" href="https://www.instagram.com/explore/tags/sabaheduhack/?hl=en" target="_blank">
        <img src="@/assets/instagram.png" alt="Instagram">
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {}
</script>
<style lang="scss">
.footer {
  &__container {
    color: white;
    position: relative;
    min-height: 200px;
    background: $blue-dark-1;
  }
  &__body {
  }
  &__copyright {
    font-size: $size-6;
    display: flex;
    align-items: center;
    padding: $padding-small;
    position: absolute;
    bottom: 0;
    width: 100%;
    a.instagram {
      margin-left: 20px;
      height: 28px;
      width: 28px;
      img {
        object-fit: contain;
        border-radius: 3px;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
