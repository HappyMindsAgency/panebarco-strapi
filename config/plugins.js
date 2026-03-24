module.exports = () => ({
  upload: {
    config: {
      security: {
        strictSizeLimit: true,
      },
    },
  },
});
