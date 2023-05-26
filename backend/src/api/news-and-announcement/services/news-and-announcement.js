'use strict';

/**
 * news-and-announcement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-announcement.news-and-announcement');
