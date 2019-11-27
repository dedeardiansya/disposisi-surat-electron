<template>
  <div class="container-fluid category py-3">
    <h5 class="category-title">KATEGORI</h5>
    <div class="row">
      <div v-for="i in 4" :key="i" class="col-3">
        <a
          :style="'background-image: url(/img/' + i + '.webp)'"
          href="#"
          class="category-list"
          ><span class="text">KATEGORI {{ i }}</span></a
        >
      </div>
    </div>
  </div>
</template>
