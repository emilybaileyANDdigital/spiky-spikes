import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import RolesPage from "./components/RolesPage.vue";
import FooPage from "./components/FooPage.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/roles", component: RolesPage },
  { path: "/foo", component: FooPage },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
