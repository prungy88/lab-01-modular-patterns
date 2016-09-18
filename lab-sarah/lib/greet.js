'use strict';

module.exports = exports = {};

module.exports = function (name) {
  if (!name) throw new Error('missing a name');
  return `hello ${name}`;
};
