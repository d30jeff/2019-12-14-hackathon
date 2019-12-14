<template>
  <div class="footer__container">
    <div class="footer__body"></div>
    <div class="footer__copyright">
      <p>2019 C Company Sdn Bhd. All rights reserved.</p>
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
    height: 40px;
    width: 100%;
  }
}
</style>
