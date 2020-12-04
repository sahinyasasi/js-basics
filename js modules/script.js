/*import { addToCart, xyz as price } from './shoppingCart.js';
console.log('importing module');
addToCart('soap', 2);
console.log(price);*/
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('soap', 2);
