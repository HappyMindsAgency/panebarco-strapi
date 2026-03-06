'use strict';

/**
 * original controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::original.original');
