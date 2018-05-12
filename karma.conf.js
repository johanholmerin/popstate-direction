module.exports = config => {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['index.js', 'tests/*.js'],
    browsers: ['Chrome', 'Firefox', 'Safari'],
    singleRun: true
  });
};
