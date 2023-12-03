const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    // constructor() {
    //     this.products = [];
    //     this.totalPrice = 0;
    // }

    static addProduct(id, productPrice) {
        // Obtain the previous cart

        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            // Analyse the cart => Find existing products

            const existngProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existngProduct = cart.products[existngProductIndex];
            let updatedProduct;

            // Add new products or increase qty

            if (existngProduct) {
                updatedProduct = { ...existngProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [ ...cart.products];
                cart.products[existngProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [ ...cart.products, updatedProduct ];
            }

            cart.totalPrice = cart.totalPrice +  + productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
}