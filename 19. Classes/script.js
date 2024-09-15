class _product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`_product = ${this.name}`);
    console.log(`_product = ${this.price}`);
  }
  _total(salesTax) {
    const _totaltax = this.price * salesTax;
    return this.price + _totaltax;
  }
}

const _1product = new _product("shirt", 51.43);
const _2product = new _product("pants", 21.21);
const _3product = new _product("underwear", 10001.101);
_1product.displayProduct();
_2product.displayProduct();
_3product.displayProduct();

const _4product = new _product("nity", 54);
console.log(_4product._total(0.2));
