# TJZoo Management System 

### 项目部署

- 本地调试：`npm install` + `npm run serve`

- 发步版本：`npm install` + ` npm run build`



### 参考项目

#### 开发环境

- [Vue-CLI](https://github.com/vuejs/vue-cli)
- Node.js / npm

#### 框架

- [Vue.js 2.6.14](https://github.com/vuejs/vue)
- [Vuex](https://github.com/vuejs/vuex)
- [Vue-Router](https://github.com/vuejs/vue-router) 

#### 主体 UI 组件库

- [Vuetify 2](https://github.com/vuetifyjs/vuetify)

#### 主体风格与设计

- [Citrus-vuetify](https://github.com/Yiuman/citrus-vuetify) 
  - 进入界面的风格设计
- [Penguin Statistics Front-end V2](https://github.com/penguin-statistics/frontend-v2)
  - 参考主页排版和侧边栏的排版
  - 参考Vuetify组件库的部分使用
  - 参考路由切换过渡
  - 参考部分数字字体（如Bender）
  - 参考部分细节风格及CSS（如repeating-linear-gradient）

#### 功能

- [Axios](https://github.com/axios/axios)
  - 请求发送与处理
- [Vue-I18n](https://github.com/kazupon/vue-i18n)
  - 本地化和国际化、语言切换与翻译
- MockJS
  - API调试
- [Core.js](https://github.com/zloirock/core-js)
- [Babel](https://github.com/babel/babel)
- [ESLint](https://github.com/eslint/eslint)
- [WebPack](https://github.com/webpack/webpack)
- [Sass](https://github.com/sass/sass)



#### 其他 UI 设计 & 其他功能

- [Material Design Icons](https://github.com/google/material-design-icons)
  - 图标
- [Anime.js](https://github.com/juliangarnier/anime)
  - 动画效果库

- [ElementUI](https://github.com/ElemeFE/element)
  - 登陆使用的界面的UI组件库
- [Vue-particle](https://github.com/creotip/vue-particles)
  - 后台和登录背景动态粒子效果
- [Vue-particle-effect-buttons](https://github.com/dreambo8563/vue-particle-effect-buttons)
  - 锁屏过渡动画
- [Particles-bg-vue](https://github.com/lindelof/particles-bg-vue)
  - 锁屏背景动画
- Live2D / [Live2D Widget](https://github.com/stevenjoezhang/live2d-widget) / [JQuery](https://github.com/jquery/jquery)
  - Live2D模型及模型展示（Live2D模型可以在设置中调出，默认隐藏）
- [Vue-image-crop-upload](https://github.com/dai-siki/vue-image-crop-upload)
  - 图片上传压缩与格式转换
- [Animate.css](https://github.com/animate-css/animate.css)
  - 过渡动画
- [Vue-toastification](https://github.com/Maronato/vue-toastification)
  - 弹出提示，类似ElementUI的Message
- [SweetAlert2](https://github.com/sweetalert2/sweetalert2)
  - 提示框图标动画
- [Animated-number-vue](https://github.com/Leocardoso94/animated-number-vue)
  - 数字变动过渡效果
- [Vue-typing](https://github.com/trickstival/vue-typing)
  - 打字机特效
- [ECharts](https://github.com/apache/echarts) / [Vue-echarts](https://github.com/ecomfe/vue-echarts)
  - 图表

- [SourceHanSans](https://github.com/adobe-fonts/source-han-sans) 

  - 中文字体

  

###  更新记录

最后更新 @ 2021-07-16 17:35

- 最后整理与分支合并



#### ZMS部分更新记录 

更新 @ 2021-07-13 ~ 2021-07-16 03:00

- 修复医疗等多个模块的Bug
- 自定义HTTP500、HTTP400、HTTP403、HTTP404的异常信息
- 修复HTTP204视作错误返回的Bug
- 添加Token处理
- 系统整合
- 完成所有模块的最终设计
- 添加图片上传功能
- 优化UI
- 调整路由设置
- 调整API



更新 @ 2021-07-13 00:18

- 模块整合
- API调试：
  - 对部分模块增加了HTTP错误的处理(promise.catch)
  - 设置了IP地址
- 修复部分Bugs



更新 @ 2021-07-11 15:44

- 本地化：

  - 完成中文翻译

  - 将中文设置为了默认语言

    

修复 @ 2021-07-11 13:18

- 本地化：
  - 推进中文翻译进度
- 问题修复：
  - 修复了 Issue #56 的问题



更新 @ 2021-07-09 15:11

- 优化UI
  - 增加加载页面（参考[Citrus-vuetify](https://github.com/Yiuman/citrus-vuetify)）
  - 优化路由过渡动画（参考[Penguin Statistics](https://github.com/penguin-statistics/frontend-v2)）



更新 @ 2021-07-08 0:00

- 优化UI
  - 更改了英文（PTSans）和中文字体（SourceHanSans）
  - 调整了侧栏字体和下边距
  - 调整了按钮字体
  - 修复scoped缺失导致的input额外下划线的问题
- Vuetify：I‘m !important. （被!important整吐了）



更新 @ 2021-07-06 23:30 

- 更新组件：提示框（AlertMessagebox）
  - 能够显示带动效的图标了（感谢：SweetAlert2、ZY和某作业网站）
  - 支持成功提示了
  - 支持取消按钮的props了



更新 @ 2021-07-06 16:00 

- 更新模块：设置界面
  - 增加清除本地缓存/LocalStorage选项
  - 能够记录用户的偏好设置了(语言和夜间模式)



更新 @ 2021-07-06 11:22 

- 更新模块：采购管理
  - 完成初步逻辑设计
- Git：删除已完成的功能分支
  - Feature/extend-purchasing-module：功能完成



更新 @ 2021-07-05 17:02 

- 更新模块：资金管理
  - 完成初步逻辑设计
- 界面优化
- 更新组件：提示框
  - 允许更多的自定义属性，支持插槽
- Git：删除已完成的功能分支



更新 @ 2021-07-04~2021-07-05 14:36 | 

- 更新组件：等待进度条(PendingProgressCard)
  - 允许加入正在处理/已经完成的事务项目
- 更新模块：资金管理
  - 优化统计数据界面
  - 优化资金流向项目管理界面
- 更新模块：动物医疗管理
  - 优化界面和事务逻辑
- 增加待机界面
- 界面优化
  - 优化背景效果
  - 将部分EChart图表封装为组件，并适配Vuetify的Dark模式
- 新增组件：提示框
  - 不用再写一堆重复代码了
- 引入依赖：
  - particle-bg-vue 背景特效
  - vue-particle-button 碎片效果的按钮（碎片效果的div目前只会操作DOM实现）
  - vue-typing 打字机效果
  - animated-number-vue 数字滚动效果
- **已知问题**：
  - 需要处理对particle-bg-vue和vue-particle-button采用的直接操作DOM的问题



更新 @ 2021-07-03 16:58

- 更新组件：实体选择(AnimalSelector)

  - 支持选择员工
  - 调整样式

- 继续完善了动物医疗管理的部分内容

  

更新 @ 2021-07-03 11:20

- 更新组件：实体选择(AnimalSelector)

  - 支持选择物品

  - 调整样式

  - 使用`zmsSelectorMode`指定要选择的类型（动物、员工、物品）

    

更新 @ 2021-07-02 23:14 

- 新增组件：动物实体选择(AnimalSelector)
  - 避免用户直接输入动物编号的问题
  - 使用事件`@itemSelectorSelect(arguments)`来获取用户输入的动物编号
- 新增组件：等待进度条(PendingProgressCard)
  - 避免代码冗余
  - 使用属性`zmsShow`控制该卡片的显示和隐藏
- 调整了动物医疗模块的部分设置



更新 @ 2021-06-11~2021-07-01 

- 更新依赖：`vuetify`,`element-ui`,`vue-i18n`,`postcss`,`vue-echarts`,`pug`,`echarts`
  - 建议重新 `npm install`



更新 @ 2021-06-10 | 

- 修复错误：侧栏滚动条无法通过中键滚动的问题

- 修复错误：大小写错误导致的错误

- Dependabot：更新依赖

  

更新 @ 2021-06-09 14:00 | 

- 安装了vue-particle
  - 基于vue-particle，增加了页面的背景动态效果
- 增加夜间模式



修正 @ 2021-06-07 23:49 | 

- 修正警告：侧栏冗余导航问题

- 修正警告：动物救助模块中menu2、date、dialog、on、attrs未定义的问题

  

更新 @ 2021-06-07 21:27 | 

- 增加和优化了仓库管理的界面和逻辑

  

更新 @ 2021-06-07 01:41 | 

- 安装了qs（查询字符串解析）、element-ui
  - ！尽量保持界面风格一致
  - 不确定Vuetify的CSS重置是否对element-ui生效，不要二者混用。
- 优化了动物医疗管理的界面和逻辑
  - 增加了修改信息提交与错误反馈界面
  - 增加查询结果为空的反馈UI
- 优化了仓库管理的界面和逻辑
  - 增加了仓库信息查询UI反馈

更新 @ 2021-06-07 00:00 | 

- 优化了动物医疗管理的界面和逻辑

  - 增加了医疗信息修改界面

  - 对于上报日期超前的请求，进行提示

  - 增加上报错误返回提示
  
    

更新 @ 2021-06-06 22:53 | 

- 安装了vue-i18n(vue语言切换和国际化)、vue-toastification(作为element-ui的一个替代)、vuetify-message-snackbar。移除了live2d-widget (x。

  - 可以将全局要用的信息放在/lang/zh-CN.js中
  - 可以使用Vuex中的showToastNotify来显示通知条 (当前版本没有安装 element-ui，在npm install前使用Message等可能出错)

- 优化了“救助信息上报”的界面与逻辑，使用vue-i18n重写了救助信息上报界面

  

更新 @ 2021-06-06 18:44 | 

- 安装了js-cookie
- 引入封装后请求发送类（使用request类进行发送，基于axios）
- 修正了路径错误
- 使用request重新更改了首页和动物医疗管理的数据获取过程（为api做准备）
- 配置了Mockjs（数据伪造）

更新 @ 2021-06-06 2:00 | 

- 调整采购管理页面
- 调整主页
- 使用VDatePicker替代了部分VTextFields
- 减小了部分样式的对比度
- 修正了部分错误

更新 @ 2021-06-05 23:24 | 

- 安装了 Vue-ECharts 和 @vue/composition-api，能够较好地实现图表功能

- 增加了资金管理的部分页面，与资金管理的路由

- 完成仓库管理界面的初步设计

- 调整了Vuetify的i18n设置（本地化）

  

更新 @ 2020-06-05 18:09 | 

- 完成了“动物医疗管理”的界面实现
- 移除了部分VCard组件的波纹效果 
- 增加了“仓库管理”的视图与路由配置



更新 @ 2021-06-05 14:46 | 

- 安装了Axios和Mock.js
- 调整样式
- 调整主页内容



更新 @ 2021-06-05 01:28 | 

- 调整首页布局（对不同屏幕的适配性）
- 调整路由切换动画速度
- 移除了弃用组件（DeprecatedComponents下的组件）



更新 @ 2021-06-04 23:32 | 

- 使用Vuetify重写了界面




#### 未使用组件库前的更新



更新 @ 2021-06-04 00:35 | 

- 增加了Animate.css样式，
- 实现路由切换时的过渡效果(使用animate.css)
- 重新整理了组件文件夹



更新 @ 2021-06-03 21:20 | 

- 优化了部分组件鼠标按下的样式




更新 @ 2021-06-03 15:20 | 

- 增加了按钮组件(ZButton.vue)，图标不需要外部引用(像element-ui的图标使用方式，需要使用MDI，可选项会比element-ui的按钮多一点)
- 目前支持3个事件zmsclick、zmsmouseover、zmsmouseleave
- 对于控件组件，通过访问/componentView查看示例



更新 @ 2021-06-03 13:06 | 

- 修改了Vue路由设置(Vue-Route)和左边栏(Slide Bar)的相应配置，现在能够通过点击左边栏跳转到相应的界面了（界面会显示在PageContainer组件中的路由视图中）
- 目前只建立了动物管理的页面。如果需要加页面，参照views下的样例，和router/index.js下的样例建立新的页面。注意需要到store/index.js下改动（每一个菜单项的route键存储其对应的path，需要和router/index.js下的相对应）
- 优化了Slidebar组件和PageContainer组件的样式



更新 @ 2021-06-03 01:34 | 

- 增加弹窗组件，支持插槽(slot)



请求 @ 2021-06-03 00:52 | 

- 现在的UI太难看了，需要有一位dl进行美术指导



更新 @ 2021-06-03 00:39 | 

- 增加了Slidebar的二级菜单，同时实现收折动画
- 填补了一/二级菜单内容
- 修改二级菜单内容可以到store里更改JSON的child，不需要在Slidebar.vue中添加组件
- （求dl解决vue的background-image问题，filter+transition太难看了）



更新 @ 2021-06-02 20:54 | 

- 增加了MDI图标库
- 将App.vue的路由视图(Router-View)移动到组件PageContainer中
- 优化了左侧栏的样式
- 对于左侧菜单的内容，可以到store里更改JSON，不需要在Slidebar.vue中添加组件



更新 @2020-06-02 17:44

- 优化侧栏和导航UI



更新 @2021-06-02 14:02

- 增加导航栏



开始 @2021-06-01 23:44

- 创建初始项目：Vue2.x, Vue-Router(history mode), Vuex, Babel, CSS Preprocessor(Sass/SCSS with Dart-SASS) and ESLint(Basic, lint on save)

  