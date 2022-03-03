module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api/v1/admin/': {
        target: 'https://nuself.hnh-dev.ru',
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
