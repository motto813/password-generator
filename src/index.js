const Jen = require('node-jen');

const args = process.argv.slice(2);
const passwordGenerator = require('./generator').password;

try {
  if (
    args.length !== 2
    || typeof +args[0] !== 'number'
    || typeof +args[1] !== 'number'
  ) {
    throw new Error('must supply 2 number arguments');
  }
  console.log('generated password:', passwordGenerator(+args[0], +args[1]));
} catch (e) {
  console.log('error generating password:', e.message);
}
