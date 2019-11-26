<template>
  <div class="container-fluid py-3">
    <div ref="swiper" class="swiper-container home-banner-slide">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="/img/1.webp" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="/img/2.webp" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="/img/3.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      loop: true,
      autoplay: {
        delay: 3000
      }
    })
  }
}
</script>
