export const password = (minLength, maxLength) => {
  return import(/* webpackChunkName: "jen" */ 'node-jen').then(({ default: Jen }) => {
    const hdl = new Jen();

    return hdl.password(minLength, maxLength);
  });
}
