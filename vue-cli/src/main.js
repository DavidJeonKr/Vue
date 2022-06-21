import { createApp } from 'vue'
import router from './router'
import App from './App.vue'


createApp(App).use(router).mount('#app')
// const app = createApp({
//     data() {
//         return {
//             count: 0
//         }
//     }
// }).use(router)
// app.mount('#app')

