<template>
  <div>
    <home-banner></home-banner>
    <home-category></home-category>
    <home-discount></home-discount>
  </div>
</template>
<script>
import HomeBanner from '~/components/collections/home/HomeBanner'
import HomeCategory from '~/components/collections/home/HomeCategory'
import HomeDiscount from '~/components/collections/home/HomeDiscount'
export default {
  layout: 'app',
  components: {
    HomeBanner,
    HomeCategory,
    HomeDiscount
  }
}
</script>
