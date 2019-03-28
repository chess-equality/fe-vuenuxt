// Product component
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
        
        <div>
          <h2>Reviews</h2>
          <p v-if="!reviews.length">There are no reviews yet</p>
          <ul>
            <li v-for="review in reviews">
              <p>{{ review.name }}</p>
              <p>Rating: {{ review.rating }}</p>
              <p>{{ review.review }}</p>
            </li>         
          </ul>        
        </div>

      </div>
      
      <product-review @review-submitted="addProductReview"></product-review>

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
      ],
      /*cart: 0,*/
      reviews: []
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
    },
    addProductReview(productReview) {
      this.reviews.push(productReview)
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

// Product Review component
Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
      
      <p>
        <input type="submit" value="Submit">
      </p>

    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        this.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
      } else {
        if (!this.name) this.errors.push('Name is required.')
        if (!this.review) this.errors.push('Review is required.')
        if (!this.rating) this.errors.push('Rating is required.')
      }
    }
  }
})

// Vue instance
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
