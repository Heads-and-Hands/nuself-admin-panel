module.exports = {
  lintOnSave: false,
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: 'https://api.sm-events.handh.ru',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '' },
  //     },
  //     '^/images': {
  //       target: 'https://api.sm-events.handh.ru',
  //       changeOrigin: true,
  //     },
  //   },
  // },
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
