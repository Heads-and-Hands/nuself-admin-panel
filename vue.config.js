module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api/v1/admin/': {
        target: 'https://nuself.hnh-dev.ru ',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/styles/palett.scss';
        `,
      },
    },
  }
}
