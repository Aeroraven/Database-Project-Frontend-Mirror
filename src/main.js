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
//import live2d from 'live2d-vue'
//Vue.use(live2d)

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
  locale: 'zh-CN',    
  
  messages: {
    'zh-CN':LangZHCN
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
