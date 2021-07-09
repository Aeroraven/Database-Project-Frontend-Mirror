import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ripple from 'vue-ripple-directive';
import animated from 'animate.css'
import Vuetify from './plugins/vuetify'
import vuetify from './plugins/vuetify'
import '@/assets/stylesheet/global.css'
import '@/assets/stylesheet/fonts.css'
import axios from 'axios'
import 'echarts'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import "./mock/index";
import Message from 'vuetify-message-snackbar';
import VueI18n from 'vue-i18n'
import LangZHCN from './lang/zh-CN'
import LangENUS from './lang/en-US'
import VueParticles from 'vue-particles'
import VueParticlesBg from "particles-bg-vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'

Vue.use(AnimatedVue)
Vue.use(VueSweetalert2);
Vue.use(ElementUI)
Vue.use(VueParticlesBg);
Vue.use(VueParticles)


import {
  SVGRenderer,
  CanvasRenderer
} from 'echarts/renderers';

import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart
} from 'echarts/charts';

import {
  GridComponent,
  PolarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

use([
    SVGRenderer,
    CanvasRenderer,
    LineChart,
    BarChart,
    PieChart,
    ScatterChart,
    RadarChart,
    MapChart,
    TreeChart,
    TreemapChart,
    GraphChart,
    GaugeChart,
    FunnelChart,
    ParallelChart,
    SankeyChart,
    BoxplotChart,
    CandlestickChart,
    EffectScatterChart,
    LinesChart,
    HeatmapChart,
    PictorialBarChart,
    ThemeRiverChart,
    SunburstChart,
    CustomChart,
    GridComponent,
    PolarComponent,
    GeoComponent,
    SingleAxisComponent,
    ParallelComponent,
    CalendarComponent,
    GraphicComponent,
    ToolboxComponent,
    TooltipComponent,
    AxisPointerComponent,
    BrushComponent,
    TitleComponent,
    TimelineComponent,
    MarkPointComponent,
    MarkLineComponent,
    MarkAreaComponent,
    LegendComponent,
    DataZoomComponent,
    DataZoomInsideComponent,
    DataZoomSliderComponent,
    VisualMapComponent,
    VisualMapContinuousComponent,
    VisualMapPiecewiseComponent,
    AriaComponent,
    DatasetComponent,
    TransformComponent
]);

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  transition: "Vue-Toastification__fade",
};
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en-US',    
  messages: {
    'zh-CN':LangZHCN,
    'en-US':LangENUS
  } 
})
Vue.use(Toast, options);

Vue.use(Vuetify);
Vue.use(Message, {
  closeButtonContent: '关闭',
  autoTransitionSetting: true,
});

Vue.prototype.$message=Message
Vue.prototype.axios = axios
Vue.use(animated)
Vue.directive('ripple', Ripple);
Vue.config.productionTip = false;
Vue.component('v-chart', ECharts)


Ripple.color = 'rgba(255, 255, 255, 0.25)';
Ripple.zIndex = 55;
new Vue({
  i18n,
  router,
  store,
  Vuetify,
  vuetify,
  axios,
  
  render: h => h(App)
}).$mount('#app')
