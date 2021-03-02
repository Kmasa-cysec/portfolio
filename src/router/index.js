import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
//import test1 from "@/components/test1";
//import test2 from "@/components/test2";
//import test3 from "@/components/test3";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    //{
      //path: "/test1",
      //name: "test1",
      //component: test1
    //},
    //{
      //path: "/test2",
      //name: "test2",
      //component: test2
    //},
    //{
      //path: "/test3",
      //name: "test3",
      //component: test3
    //}
  ]
});
