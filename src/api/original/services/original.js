'use strict';

/**
 * original service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::original.original');
