const Jen = require('node-jen');

function password(minLength, maxLength) {
  const hdl = new Jen();

  return hdl.password(minLength, maxLength);
}

module.exports = { password };
