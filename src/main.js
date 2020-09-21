import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index.js";

// import Axios from "axios";
// import VueAxios from "vue-axios";

import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css"

const app = createApp(App)
app.config.productionTip = false;
app.use(router);
app.use(antd);
// app.use(Axios);
// app.use(VueAxios);
app.mount('#app');