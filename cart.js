'use strict';
/*
В уроке "Структурные типы данных — Объекты" вы создавали объект cart
В этом уроке необходимо создать две функции конструктора Cart и Goods
Так же 3 подкласса TechnicsGoods, FoodGoods, СlothingGoods.
*/

const Cart = function() {
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.getTotalPrice = function() {
  return console.log(self['totalPrice']);
};

Cart.prototype.calculateGoodsPrice = function() {
  const array = [];
  this.goods.map(function(obj) {
    const {price} = obj;
    return array.push(price);
  }, this);
  const totPrice = array.reduce(function(acc, item) {
    return acc + item}, 0);
  return this.totalPrice = totPrice;
};

Cart.prototype.addGoods = function(obj) {
  this.goods.push(obj);
  const {nameProduct: x, price: y, count: z} = obj;
  this.calculateGoodsPrice();
  this.increaseCount(z);
  return this.goods;
};

Cart.prototype.increaseCount = function(z) {
  return this.count += z;
};

Cart.prototype.clear = function() {
  return this.goods.splice(
      0, this.goods.length), this.totalPrice = 0, this.count = 0;
};

Cart.prototype.print = function() {
  const str = JSON.stringify(this.goods);
  console.log('Корзина ', str);
  console.log('Общая стоимость товаров в корзине = ', this.totalPrice);
  console.log('Общее количество товаров в корзине = ', this.count);
};

const Goods = function(nameProduct, price, discount) {
  this.nameProduct = nameProduct;
  this.price = price - (price * discount);
  this.discount = discount;
  this.count = 1;
  this.priceWithoutDiscount = price;
};

const FoodGoods = function(nameProduct, price, discount, calories) {
  Goods.call(this, nameProduct, price, discount);
  this.calories = calories;
};
Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);


const ClothingGoods = function(nameProduct, price, discount, material) {
  Goods.call(this, nameProduct, price, discount);
  this.material = material;
};
Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);


const TechnicsGoods = function(nameProduct, price, discount, typeTechnic) {
  Goods.call(this, nameProduct, price, discount);
  this.typeTechnic = typeTechnic;
};
Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);


const coffee = new FoodGoods('Coffee', 1500, 0.02, '3.3 kcal');
console.log(coffee);

const scarf = new ClothingGoods('Scarf', 2500, 0.03, 'wool');
console.log(scarf);

const teapot = new TechnicsGoods('Teapot',
    5000, 0.05, 'household electrical appliance');
console.log(teapot);

const cart = new Cart();
// console.log(cart);
cart.addGoods(coffee);
cart.addGoods(scarf);
cart.addGoods(teapot);
cart.print();
console.dir(cart);


