import Vue from "vue";
import VueRouter from "vue-router";
import GlassoryView from "../views/GlassoryView.vue";
import MuzeyView from "../views/MuzeyView.vue";
import BoshView from "../views/BoshView.vue";
import FirstView from "../views/muzey/FirstView.vue";
import SecondView from "../views/muzey/SecondView.vue";
import ThreethView from "../views/muzey/ThreethView.vue";
import FourthView from "../views/muzey/FourthView.vue";
import FivethView from "../views/muzey/FivethView.vue";
import SixthView from "../views/muzey/SixthView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/glassory",
    name: "Glassory",
    component: GlassoryView,
  },
  {
    path: "/muzey",
    name: "Muzey",
    component: MuzeyView,
    children: [
      {
        path: "/muzey",
        name: "First",
        component: FirstView,
      },
      {
        path: "/muzey/second",
        name: "First",
        component: SecondView,
      },
      {
        path: "/muzey/threeth",
        name: "First",
        component: ThreethView,
      },
      {
        path: "/muzey/fourth",
        name: "First",
        component: FourthView,
      },
      {
        path: "/muzey/fiveth",
        name: "First",
        component: FivethView,
      },
      {
        path: "/muzey/sixth",
        name: "First",
        component: SixthView,
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: BoshView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
