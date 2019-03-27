Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
    
      <div class="product-image">
        <!--<img :src="image" :alt="altText" />-->
        <img :src="image" />
      </div>

      <div>

        <h1>{{ title }}</h1>
        <h2>{{ description }}</h2>
        <!--
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else>Out of Stock</p>
        -->
        <p v-show="inStock">In Stock</p>
        <p v-show="!inStock">Out of Stock</p>
        
        <!--<p>User is premium: {{ premium }}</p>-->
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants"
             :key="variant.variantId"
             class="color-box"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(index)">
        </div>

        <button v-on:click="addToCart"
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }">Add to Cart</button>

        <!--<button>Test</button>-->

        <!--
        <div class="cart">
          <p>Cart({{ cart }})</p>
        </div>
        -->

      </div>

    </div>
  `,
  data() {
    return {
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
      ]
      /*cart: 0*/
    }
  },
  methods: {
    // addToCart: function () {
    // ES6-style function
    addToCart() {
      /*this.cart += 1*/
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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
    },
    shipping() {
      if (this.premium) {
        return "free"
      }
      return 2.99
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: []
  },
  methods: {
    updateCart(id) {
      /*this.cart += 1*/
      this.cart.push(id)
    }
  }
})
