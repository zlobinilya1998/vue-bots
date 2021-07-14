<template>
  <transition-group name="fade">
    <div key="first" class="wrapper" v-if="orders.length">
      <div class="order" v-for="(order, index) in orders" :key="order._id">
        <div
                :style="{
          position: 'absolute',
          width: '100%',
          height: '15px',
          left: '0',
          top: '0',
          background: '#7EC3FF',
          borderRadius: '10px 10px 0 0',
        }"
        ></div>
        <div class="order-item-wrapper">
          <div
                  class="order-item"
                  :style="{ border: item.hover ? 'none' : '1px solid #9dd458' }"
                  @mouseenter="item.hover = true"
                  @mouseleave="item.hover = false"
                  v-for="item in order.items"
                  :key="item._id"
          >
            <transition name="fade">
              <div v-if="item.hover" class="order-shadow">
                <p>{{ item.name }}</p>
              </div>
            </transition>
            <img
                    :style="{ objectFit: 'contain' }"
                    width="100%"
                    height="100%"
                    :src="item.img"
            />
          </div>
        </div>
        <div class="order-description">
          <div>
            <p class="order-title">Заказ:#{{ index + 1 }}</p>
            <p class="order-price" :style="{ marginTop: '5px' }">
              Сумма заказа: {{ order.price.toFixed() }} руб.
            </p>
          </div>
          <p class="order-date" :style="{ marginTop: '5px' }">
            Дата покупки: {{ order.date }}
          </p>
        </div>
      </div>
    </div>
    <Loader key="second" color="#7EC3FF" v-else />
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "../Modals/Loader/Loader";
export default {
  name: "Purchases",
  data: () => ({
    orders: [],
    sneakers: [],
  }),
  components: {
    Loader,
  },
  mounted() {
    setTimeout(() => {
      this.$axios.get("/purchases").then((res) => {
        this.orders = res.data.map((order) => ({
          ...order,
          date: new Date(order.date).toLocaleDateString("ru-Ru", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        }));
        this.orders = this.orders.map((order) => {
          return {
            ...order,
            items: order.items.map((item) => {
              return {
                ...this.items.find((find) => find._id === item),
                hover: false,
              };
            }),
          };
        });
      });
    }, 1500);
  },
  methods: {
    orderPrice(arr) {
      let init = 0;
      let reducer = (acc, curVal) => acc + curVal.price;
      return arr.reduce(reducer, init);
    },
  },
  computed: {
    ...mapGetters(["user", "items"]),
  },
};
</script>

<style scoped lang="scss">
@import "/src/scss/style";
.wrapper {
  display: flex;
  flex-direction: column;
  .order {
    padding: 30px 20px 20px;
    background: $third-color;
    margin: 10px;
    border-radius: 10px;
    position: relative;
    &-shadow {
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      font-size: 10px;
      color: $main-text;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      text-align: center;
    }
    &-item-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;
    }
    &-description {
      border-top: 2px solid $main-color;
      margin-top: 20px;
      padding: 10px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-title {
      font-size: $third-font;
      color: $second-text;
      font-weight: 300;
      position: absolute;
      right: 20px;
      top: 20px;
    }
    &-price {
      font-weight: 600;
      padding: 10px;
      background: $main-color;
      border-radius: 10px;
      color: $third-text;
    }
    &-date {
      font-size: $four-font;
      color: $third-text;
    }
    &-item {
      height: 100px;
      width: 80px;
      margin: 5px;
      border: 1px solid $second-color;
      border-radius: 10px;
      padding: 5px;
      position: relative;
      cursor: pointer;
      transition: 0.3s;
      text-align: center;
    }
  }
}
</style>
