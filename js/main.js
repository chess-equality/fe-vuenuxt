var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    /*image: './assets/vmSocks-green-onWhite.jpg',*/
    selectedVariant: 0,
    description: 'Many a pair of socks',
    altText: 'A pair of socks',
    /*inStock: true,*/
    inventory: 9,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 0
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
    updateProduct(index) {
      /*
      console.log('>>>>> variantImage = ' + variantImage)
      this.image = variantImage
      */
      console.log('>>>>> index = ' + index)
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image () {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})
