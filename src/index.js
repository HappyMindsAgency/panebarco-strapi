'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    // Su Windows il temp file dell'upload può essere ancora locked da Defender
    // quando Strapi tenta l'unlink: ignoriamo l'EBUSY invece di crashare.
    process.on('uncaughtException', (err) => {
      if (err.code === 'EBUSY') {
        console.warn(`[upload] EBUSY ignorato su file temp: ${err.path}`);
        return;
      }
      throw err;
    });
    process.on('unhandledRejection', (err) => {
      if (err && err.code === 'EBUSY') {
        console.warn(`[upload] EBUSY ignorato su file temp: ${err.path}`);
        return;
      }
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
