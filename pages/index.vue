<template>
  <div class="home-page">
    <home-banner></home-banner>
    <home-category></home-category>
    <home-discount></home-discount>
    <div class="divider my-3"></div>
    <home-sales-ratio></home-sales-ratio>
  </div>
</template>
<script>
import HomeBanner from '~/components/pages/home/Banner'
import HomeCategory from '~/components/pages/home/Category'
import HomeDiscount from '~/components/pages/home/Discount'
import HomeSalesRatio from '~/components/pages/home/SalesRatio'
export default {
  layout: 'app',
  components: {
    HomeBanner,
    HomeCategory,
    HomeDiscount,
    HomeSalesRatio
  }
}
</script>
