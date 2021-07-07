import Vue from "vue";
import VueRouter from "vue-router";

const Shop = () => import("../components/Shop");
const Favorite = () => import("../components/Favorite");
const Profile = () => import("../components/Profile");

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "shop",
    component: Shop,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: Favorite,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});



export default router;
