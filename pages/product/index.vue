<template>
  <div class="product-page">
    <product-entry-nav></product-entry-nav>
    <div class="divider"></div>
  </div>
</template>
<script>
import ProductEntryNav from '~/components/pages/product/EntryNav'
export default {
  layout: 'app',
  components: {
    ProductEntryNav
  }
}
</script>
