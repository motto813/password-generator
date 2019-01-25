import { password } from './generator';

const args = process.argv.slice(2);
const run = (arg1, arg2) => {
  try {
    if (!arg1 || typeof arg1 !== 'number' || !arg2 || typeof arg2 !== 'number') {
      throw new Error('must supply 2 number arguments');
    } else if (arg1 > arg2) {
      throw new Error('min length cannot be greater than max length');
    } else if (arg1 < 8) {
      throw new Error('min length must be 8 or more');
    } else if (arg2 > 40) {
      throw new Error('max length must be 40 or less');
    }
    console.log('generated password:', password(arg1, arg2));
  } catch (e) {
    console.log('error generating password:', e.message);
  }
};

run(+args[0], +args[1]);

export default run;
