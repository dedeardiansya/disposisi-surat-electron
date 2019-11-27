<template>
  <div class="discount my-3">
    <div class="container-fluid">
      <div class="discount-wrapper">
        <div class="discount-head pt-3">
          <h5 class="discount-title">#SEDANGDISKON</h5>
          <div class="discount-action">
            <a href="#" class="view-more-button">LIHAT SEMUA</a>
          </div>
        </div>
      </div>
    </div>
    <div ref="swiper" class="swiper-container discount-slide">
      <div class="swiper-wrapper">
        <div v-for="i in 12" :key="i" class="swiper-slide">
          <div class="container-fluid py-3">
            <product-list
              :product="{
                img: 'https://picsum.photos/id/' + i * i + '/200/200'
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper } from 'swiper/js/swiper.esm.js'
import ProductList from '../../elements/AppProductList'
export default {
  components: {
    ProductList
  },
  data() {
    return {
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      loop: true,
      slidesPerView: 5
    })
  }
}
</script>
