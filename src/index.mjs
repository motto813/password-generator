import { password } from './generator';

const args = process.argv.slice(2);

try {
  if (args.length !== 2 || typeof +args[0] !== 'number' || typeof +args[1] !== 'number') {
    throw new Error('must supply 2 number arguments');
  } else if (+args[0] > +args[1]) {
    throw new Error('min length cannot be greater than max length');
  } else if (+args[0] < 8) {
    throw new Error('min length must be 8 or more');
  } else if (+args[1] > 40) {
    throw new Error('max length must be 40 or less');
  }
  password(+args[0], +args[1]).then(password => console.log('generated password:', password));
} catch (e) {
  console.log('error generating password:', e.message);
}
