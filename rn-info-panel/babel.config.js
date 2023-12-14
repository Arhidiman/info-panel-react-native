module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@": "./src",
          "underscore": "lodash"
        }
      }],
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env"
      }]
    ]
  };
};
