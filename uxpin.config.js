module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          'src/components/Bar/Bar.js',
          'src/components/Treemap/Treemap.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Nivo'
};
