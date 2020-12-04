console.log('exporting module');
const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} of ${product}`);
};
export const xyz = 10;
