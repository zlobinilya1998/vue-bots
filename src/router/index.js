import Vue from "vue";
import VueRouter from "vue-router";


const Shop = () => import("../components/Shop");
const Favorite = () => import("../components/Favorite");
const Purchases = () => import("../components/Purchases");

Vue.use(VueRouter);

const routes = [
    {
        path:"/shop",
        name:"shop",
        component: Shop,
    },
    {
        path:"/favorite",
        name:"favorite",
        component:Favorite,
    },
    {
        path:"/purchases",
        name:"purchases",
        component:Purchases,
    }
];

const router = new VueRouter({
  routes,
  mode:'history',
});


export default router;
