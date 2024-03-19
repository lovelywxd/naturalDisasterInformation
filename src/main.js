import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// ------Cesium需要添加的内容
import { Ion } from "cesium"
import "cesium/Build/Cesium/Widgets/widgets.css" // 引入Cesium需要的css

// 使用自己的cesium ion的token，token获取地址：https://ion.cesium.com/signup/? 然后注册自己的账号，然后在Access Tokens里面将Default Token的token复制出来粘贴到这里就好了

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNWI2ZjcyYi1kZTJmLTRlMDctOTBhYy1iZjg3OTBkYWJmY2UiLCJpZCI6MTg0Njc3LCJpYXQiOjE3MDI2NDMzOTd9.yOb2FlOx8b75ewBH_EcvB3LkyrxDTx1J7i3Dp0rdNQg";
window.CESIUM_BASE_URL = '/libs/cesium/'; // 这个地方通常会ts报错,这里写/libs/cesium/是因为刚才我们把Cesium静态资源放在了public/libs/cesium目录下
// -------------------------

createApp(App).mount('#app')
