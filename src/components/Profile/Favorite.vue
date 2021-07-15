<template>
  <div class="page">
    <div class="no-purchases">
      <img
        class="no-purchases-img"
        src="../../assets/purchases.png"
        alt="purchases"
      />
      <h3 class="no-purchases-title">У вас нет избранных товаров</h3>
      <p class="no-purchases-desctiption">
        Нажмите на лайк хотя бы на одном из них!
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Favorites",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped lang="scss">
  @import "@/scss/style";
.page {
  transition: 0.2s;
}
.page-title {
  display: flex;
  align-items: center;
}
.page-title svg {
  margin-right: 10px;
}
.no-purchases {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.no-purchases-img {
  margin-bottom: 24px;
}
.no-purchases-title {
  margin-bottom: 10px;
}
.no-purchases-desctiption {
  opacity: 0.4;
}
.order-btn p {
  margin-left: 15px;
}
</style>
