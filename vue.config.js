module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/_vars.scss";`
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      productName: 'Pengelolahan Persuratan'
    }
  }
}
