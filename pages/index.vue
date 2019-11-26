<template>
  <div>
    <home-banner></home-banner>
    <home-category></home-category>
    <home-discount></home-discount>
    <div class="divider my-3"></div>
    <home-sales-ratio></home-sales-ratio>
  </div>
</template>
<script>
import HomeBanner from '~/components/collections/home/HomeBanner'
import HomeCategory from '~/components/collections/home/HomeCategory'
import HomeDiscount from '~/components/collections/home/HomeDiscount'
import HomeSalesRatio from '~/components/collections/home/HomeSalesRatio'
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
