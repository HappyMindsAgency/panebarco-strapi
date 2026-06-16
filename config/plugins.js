module.exports = () => ({
  upload: {
    config: {
      security: {
        strictSizeLimit: true,
      },
    },
  },
  'hm-ai-strapi-translate': {
    enabled: true,
  }
});
