<template>
  <div class="file-input">
    <p class="message">{{ message }}</p>
    <input
      type="file"
      accept="image/x-png,image/gif,image/jpeg"
      ref="input"
      @change="handler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    message() {
      return this.name || 'Klik atau drag gambar disini.'
    }
  },
  methods: {
    handler(e) {
      const file = e.target.files[0]
      this.name = file.name
      this.$emit('file', file)
    }
  }
}
</script>

<style lang="scss">
.file-input {
  position: relative;
  padding: ($spacer * 2) $spacer;
  background-color: $gray-900;
  text-align: center;

  input {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    opacity: 0;
  }

  .message {
    margin: 0;
    color: $gray-400;
  }
}
</style>
