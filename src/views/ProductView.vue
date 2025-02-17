<template>
  <div class="product" id="product">
    <Loading v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="false"
      color="#000"
      loader="bars"
      background-color="#000"
      :lock-scroll="false"
    />
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div  class="images">
            <img :src="info.image" alt="Product Image">
          </div>
        </div>
        <div class="col-md-7">
          <div class="content">
            <h2>{{ info.title }}</h2>
            <div class="prices">
              <h3 >{{ info.price }} $</h3>
            </div>
            <div class="category">
                <h4> Category</h4>
                <p>
                  {{ info.category }}
                </p>
              </div>
            <div class="selections">
              <div>
                <div class="quantity">
                  <h4> Quantity</h4>
                  <div class="details">
                    <div class="counter">
                      <v-icon icon="mdi-minus" class="minus" />
                      <span class="number">{{ quantity }}</span>
                      <v-icon icon="mdi-plus" class="plus" />
                    </div>
                    <button class="add-cart" @click="addToCart" :disabled="isLoading?true:false">Add To Cart</button>
                  </div>
                </div>
            
              </div>
              <div class="description">
                <h4> Description</h4>
                <p>
                  {{ info.description }}
                </p>
              </div>
              
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer-component />
</template>

<script>
// Loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


import FooterComponent from "@/components/global/FooterComponent.vue";

export default {
  name: "ProductDetails",
  props: {
    name: String,
  },
  data() {
    return {
      info: {},
      quantity: 1,
      isLoading: false,
    };
  },
  methods: {
    getInfo() {
      this.isLoading = true;

      fetch('https://fakestoreapi.com/products/' + localStorage.getItem('product_id'), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => {
          this.isLoading = false;
          this.info = data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    addToCart() {
      let that = this;
      that.isLoading = true;

      fetch('https://fakestoreapi.com/carts', {
        method: "POST",
        body:JSON.stringify(
            {
                userId:2,
                date:'2020-02-03',
                products:[{productId:localStorage.getItem('product_id'),quantity:that.quantity}]
            }
        )
      })
        .then(response => response.json())
        .then(function(){
          that.isLoading = false;
          that.$router.push({ name: 'CartView' });
        })
        .catch(error => {
          console.log(error);
        })
    },
  },
  mounted(){
    let that = this;

    // On Image Clicked
    window.$("body").on("click", ".product img", function () {
      this.requestFullscreen();
    });

    // On Plus
    window.$(".product .counter .plus").on("click", function () {
      that.quantity += 1;
    });

    // On Minus
    window.$(".product .counter .minus").on("click", function () {
      if(that.quantity > 1){
        that.quantity -= 1;
      }
    });
  },
  beforeMount(){
    this.getInfo();
  },
  components: {
    FooterComponent,
    Loading,
  },

};
</script>

<style>

/* Images */

.product img{
  margin-bottom: 4vh;
  width:100%

}
.product .content h2 {
  font-size: 30px;
  width: 95%;
  color: #000000;
  font-weight: bold;
  text-align: start;
}
.product .content .prices {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 2rem 0;
}
.product .content .prices h3 {
  color: #7f7f7f;
  font-weight: bold;
  margin-right: 1rem;
}
.product .content .prices .offer-price{
  color: #FFF;
}
.product .content  h4 {
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: start;
}
.product .content .selections .color,
.product .content .selections .description,
.product .content .selections .quantity,
.product .content  .category  {
  margin-top: 2rem;
}
.product .content .selections .quantity .details {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.product .content .selections .quantity .details .counter {
  margin-right: 1rem;
  background-color: #eeeee4;
  padding: 0.5rem 1rem;
  color: #747474;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product .content .selections .quantity .details .counter i {
  border: 2px solid #747474;
  border-radius: 50%;
  /* padding: .5rem; */
  cursor: pointer;
}
.product .content .selections .quantity .details .counter .number {
  font-size: 22px;
  font-weight: bold;
  margin: 0 2rem;
}
.product .content .selections .quantity .details button {
  background-color: #747474;
  border-radius: 10px;
  padding: 0.7rem 0;
  width: 12rem;
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: bold;
}
.product .content .selections .description p ,
.product .content  .category p {
  color: #757575;
  font-size: 16px;
  margin: 0;
  text-align: start;
}
@media (max-width: 767px) {
  .product .content {
    margin-top: 2rem;
  }
  .product .content h2 {
    font-size: 20px;
  }
  .product .content .prices h3,
  .product .content .selections h4,
  .product .content .selections .quantity .details .counter .number {
    font-size: 18px;
  }
  .product .content .selections .box span {
    margin-bottom: 0.5rem;
  }
  .product .content .selections .quantity .details .counter .number {
    margin: 0 1rem;
  }
  .product .content .selections .quantity .details button {
    font-size: 16px;
    width: 10rem;
  }
  .product .content .selections .description p {
    font-size: 14px;
  }
}
@media (max-width: 400px) {
  .product .content .selections .quantity .details button {
    width: 7rem;
  }
}
</style>
