'use strict';

/**
 * chalet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chalet.chalet');
