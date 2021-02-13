import Vue from 'vue' 		// импорт
import Vuex from 'vuex'		// импорт
// import products from "@/store/modules/products";
import products from "./modules/products";

Vue.use(Vuex)			// подключение как плагин

export default new Vuex.Store( {  // экспорт  Store
  modules: {			// разбиваем Store на модули
    products
  }
} )
