<template>
  <div class="cart" id="cart">
    <Loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="false"
      color="#ff8500"
      loader="bars"
      background-color="#000"
      :lock-scroll="false"
    />
    <div class="background"></div>
    <div class="container">
      <div class="row" v-if="carts.length > 0">
        <div class="col-xl-8 table-cart">
          <table>
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr class="record" v-for="(cart,index) in carts" :key="cart" :data-index="index">
                <td data-label="Product ID">{{ cart.productId }}</td>
                <td data-label="الكمية">
                  <div class="quantity">
                    <div class="counter">
                      <v-icon icon="mdi-minus" class="minus" />
                      <span class="number">{{ cart.quantity }}</span>
                      <v-icon icon="mdi-plus" class="plus" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p v-else class="no-data">
        {{ lang == "ar" ? "لا يوجد بيانات" : "There is no data" }}
      </p>
    </div>
  </div>
  <footer-component />
</template>

<script>
// Loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import FooterComponent from "@/components/global/FooterComponent.vue";

export default {
  name: "CartView",
  data() {
    return {
      carts: [],
      isLoading: false,
    };
  },
  methods: {
    getCarts() {
      this.isLoading = true;

      fetch("https://fakestoreapi.com/carts/user/2", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          this.isLoading = false;
          this.carts = data[0].products;
          console.log(this.carts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCart() {
      fetch('https://fakestoreapi.com/carts/3', {
        method: "PUT",
        body:JSON.stringify(
          {
              userId:2,
              date:'2019-12-10',
              products:this.carts
          }
        )
      })
        .then((response) => response.json())
        .then(() => {
          alert('The Cart Updated.');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteCart() {
      fetch('https://fakestoreapi.com/carts/3', {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          alert('The Cart Deleted.');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  beforeMount() {
    this.getCarts();
  },
  mounted() {
    let that = this;

    // On Mines Clicked
    window
      .$("body")
      .on("click", ".cart .record .quantity .counter .minus", function () {
        let index = window.$(this).parents(".record").data("index");
        if(that.carts[index].quantity > 1){
          that.carts[index].quantity -= 1;
          that.updateCart();
        }
      });

    // On Plus Clicked
    window
      .$("body")
      .on("click", ".cart .record .quantity .counter .plus", function () {
        let index = window.$(this).parents(".record").data("index");
        that.carts[index].quantity += 1;
        that.updateCart();
      });
  },
  components: {
    FooterComponent,
    Loading,
  },
};
</script>

<style>
/* Background */
.cart {
  background: #eeeee4;
}
.cart .background {
  height: 10vh;
}

.cart .container {
  margin-top: 2rem;
  padding-bottom: 2rem;
}

/* Table */
.cart .table-cart {
  background: #000003;
  border-radius: 8px;
}

.cart table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  color: #838383;
  margin: 5vh 0;
}

.cart table thead th:first-of-type {
  width: 35%;
}

.cart table tr {
  padding: 0.35em;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.cart table th,
.cart table td {
  padding: 1.5rem 0.8em;
  text-align: center;
  background: #000;
  text-align: center;
  background: #000;
  border-bottom: 1px solid #858585;
}

.cart table th {
  background: #000003;
  color: white;
  font-weight: 600;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: capitalize;
}

.cart table .product {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.cart table .product img {
  width: 5rem;
  margin-right: 0.8rem;
}

.cart table .product .details p {
  font-size: 15px;
  color: #888888;
  margin-bottom: 0.5rem;
  text-align: start;
}

.cart table .product .details span:first-of-type {
  margin-bottom: 0.5rem;
}

.cart table .quantity .counter {
  background-color: #fff;
  padding: 0.5rem;
  color: #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cart table .quantity .counter i {
  border: 2px solid #000;
  border-radius: 50%;
  cursor: pointer;
}

.cart table .quantity .counter .number {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0.5rem;
}

.cart table .operations i {
  cursor: pointer;
  color: #7f7f7f;
}

@media screen and (max-width: 991px) {
  .cart table {
    border: 0;
    box-shadow: none;
  }

  .cart table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .cart table tr {
    display: block;
    margin-bottom: 1rem;
    border-radius: 10px;
  }

  .cart table td {
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  .cart table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
  }

  .cart table .quantity .counter {
    display: inline-block !important;
  }

  .cart table th,
  .cart table td {
    border-bottom: 0;
  }

  .cart table tr {
    border: 1px solid #858585;
  }
}
</style>
