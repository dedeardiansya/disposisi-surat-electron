<template>
  <div class="py-3">
    <div ref="swiper" class="swiper-container banner-slide">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="container-fluid">
            <img src="/img/1.webp" alt="" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="container-fluid">
            <img src="/img/2.webp" alt="" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="container-fluid">
            <img src="/img/3.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Autoplay } from 'swiper/js/swiper.esm.js'
Swiper.use([Autoplay])
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
