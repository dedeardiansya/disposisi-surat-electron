<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div v-for="i in 15" :key="i" class="col-2 mb-3">
        <product-list
          :product="{
            img: 'https://picsum.photos/id/' + i * 5 + '/100/100'
          }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from '../../elements/AppProductList'
export default {
  components: {
    ProductList
  }
}
</script>
