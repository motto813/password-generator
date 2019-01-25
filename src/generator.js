import Jen from 'node-jen';

export const password = (minLength, maxLength) => {
  const hdl = new Jen();

  return hdl.password(minLength, maxLength);
}
