import { createApp } from 'vue'
import App from './App.vue'
import 'cally';
import {registerLicense} from '@syncfusion/ej2-base'

registerLicense("");
createApp(App).mount('#app')
