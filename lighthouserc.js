module.exports = {
  ci: {
    collect: {
      url: ['http://www.google.com/'],
      settings: {
        chromeFlags: '--no-sandbox',
      },
      assert: {
        preset: 'lighthouse:no-pwa',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
