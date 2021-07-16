import Vue from "vue";
import VueRouter from "vue-router";

const Main = () => import("@/views/Main");
const Shop = () => import("@/components/Shop/Shop");
const Auth = () => import("@/components/Auth");

//ErrorPage
const ErrorPage = () => import("@/views/ErrorPage");

//Profile
const Profile = () => import("@/components/Profile/Profile");
const Favorite = () => import("@/components/Profile/Favorite");
const Personal = () => import("@/components/Profile/Personal");
const Purchases = () => import("@/components/Profile/Purchases");
const Score = () => import("@/components/Profile/Score");
const Settings = () => import("@/components/Profile/Settings");
const Administration = () => import("@/components/Profile/Administration");

Vue.use(VueRouter);

const routes = [
  { path: "/login", name: "login", component: Auth },
  { path: "*", component: ErrorPage },
  {
    path: "/",
    name: "shop",
    component: Main,
    meta: { auth: true },
    children: [
      { path: "shop", name: "shop", component: Shop },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        children: [
          { path: "personal", name: "personal", component: Personal },
          { path: "score", name: "score", component: Score },
          { path: "purchases", name: "purchases", component: Purchases },
          { path: "favorite", name: "favorite", component: Favorite },
          { path: "settings", name: "settings", component: Settings },
          { path: "administration", name: "administration", component: Administration },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const requireAuth = to.matched.some((record) => record.meta.auth);
  if (requireAuth && !token) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
