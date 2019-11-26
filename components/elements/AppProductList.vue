<template>
  <div class="product-list">
    <div class="product-head">
      <div class="discount-label">10%</div>
      <button class="favorite-button">
        <heart-icon />
      </button>
    </div>
    <div class="product-image">
      <img :src="product.img" alt="" />
      <div class="product-action">
        <router-link to="/" class="product-action-link"
          >Lihat Produk</router-link
        >
      </div>
    </div>
    <div class="product-detail">
      <h5 class="product-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt
        voluptates atque doloremque.
      </h5>
      <div class="product-price">
        <span class="price-original">Rp50rb</span>
        <span class="price-reduced">Rp45rb</span>
      </div>
    </div>
    <div class="product-foot">
      <button class="add-to-cart-button">Tambah ke keranjang</button>
    </div>
  </div>
</template>
<script>
import HeartIcon from '@/components/icons/Heart'
export default {
  components: {
    HeartIcon
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
