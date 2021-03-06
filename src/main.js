import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from "./router"
import "./assets/css/global.css"
import "./assets/css/fonts/iconfont.css"
import treeTable from "vue-table-with-tree-grid"
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)
Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue();
Vue.component("tree-table",treeTable)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
