/*import './js/'*/
import './js/common'
/*import './css/main.css'*/
import './assets/scss/main.scss'
import './assets/css/main.css'
//�������� �������
  // ��������� �����
    // import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
    // import 'bootstrap/dist/css/bootstrap.min.css'
  // ����������
    //import 'vue'
    //import Vue from 'vue'
  window.Vue = require('vue')/*'vue/dist/vue.js'*/
  import store from './store'

  Vue.component('example-component', require('./components/Example.vue').default)

  const app = new Vue({
    data () {
      return {
        component: false,
      }
    },
    store,
    el: '#app'/*
    components: { example-component },*/
  })
