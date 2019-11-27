<template>
  <div class="product-page">
    <product-entry-nav></product-entry-nav>
    <div class="divider"></div>
    <product-results></product-results>
  </div>
</template>
<script>
import ProductEntryNav from '~/components/pages/product/EntryNav'
import ProductResults from '~/components/pages/product/Results'
export default {
  layout: 'app',
  components: {
    ProductEntryNav,
    ProductResults
  }
}
</script>
