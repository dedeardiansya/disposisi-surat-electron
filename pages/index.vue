<template>
  <div>
    <home-banner></home-banner>
    <home-category></home-category>
  </div>
</template>
<script>
import HomeBanner from '~/components/collections/home/HomeBanner'
import HomeCategory from '~/components/collections/home/HomeCategory'
export default {
  layout: 'app',
  components: {
    HomeBanner,
    HomeCategory
  }
}
</script>
