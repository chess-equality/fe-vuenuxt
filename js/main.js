var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    description: 'Many a pair of socks',
    altText: 'A pair of socks',
    inStock: true,
    inventory: 9,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    // addToCart: function () {
    // ES6-style function
    addToCart() {
      this.cart += 1
    },
    /*updateProduct: function (variantImage) {*/
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})
