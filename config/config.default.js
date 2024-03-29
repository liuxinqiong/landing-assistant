/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1693736192481_5743';

  // add your middleware config here
  config.middleware = ['robot'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    robot: {
      ua: [/curl/i, /Baiduspider/i],
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
