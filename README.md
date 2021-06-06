# zms-frontend 

##### 运行方法

1. 参看without-vuetify分支的readme.md

2. 目前分支中的vuetify.js中附带的reset.css等将css重置，可能有些组件的自定义css不生效(例如border-radius等)。（未使用vuetify前的代码在分支without-vuetify中，不过不太好看）

3. 修改较多，如果有之前版本的建议执行下面命令

   ```Shell
   rmdir node_modules
   npm install
   ```



##### 更新记录
更新 @ 2021-06-06 18:44 | hzw

- 安装了js-cookie
- 引入封装后请求发送类（使用request类进行发送，基于axios）
- 修正了路径错误
- 使用request重新更改了首页和动物医疗管理的数据获取过程（为api做准备）
- 配置了Mockjs（数据伪造）

更新 @ 2021-06-06 2:00 | hzw

- 调整采购管理页面
- 调整主页
- 使用VDatePicker替代了部分VTextFields
- 减小了部分样式的对比度
- 修正了部分错误

更新 @ 2021-06-05 23:24 | hzw

- 安装了 Vue-ECharts 和 @vue/composition-api，能够较好地实现图表功能
- 增加了资金管理的部分页面，与资金管理的路由
- 完成仓库管理界面的初步设计
- 调整了Vuetify的i18n设置（本地化）

更新 @ 2020-06-05 18:09 | hzw

- 完成了“动物医疗管理”的界面实现
- 移除了部分VCard组件的波纹效果 
- 增加了“仓库管理”的视图与路由配置



更新 @ 2021-06-05 14:46 | hzw

- 安装了Axios和Mock.js
- 调整样式
- 调整主页内容



更新 @ 2021-06-05 01:28 | hzw

- 调整首页布局（对不同屏幕的适配性）
- 调整路由切换动画速度
- 移除了弃用组件（DeprecatedComponents下的组件）



更新和备份 @ 2021-06-04 23:32 | hzw

- 使用Vuetify重写了界面

- 原有的未使用Vuetify的界面已经通过git放到新的branch里了

  

##### 参考内容

1. [Vue.js](https://github.com/vuejs/vue)

2. [Vuetify](https://github.com/vuetifyjs/vuetify)	（组件库与排版，类似于element-ui，貌似更难用？）

3. [Material Design Icons](https://github.com/google/material-design-icons) （图标）

4. [Animate.css](https://github.com/animate-css/animate.css) （过渡动画）

5. [Penguin Statistics Frontend V2](https://github.com/penguin-statistics/frontend-v2) （VContainer的使用、CSS Repeating-Linear-Gradient、部分排版）

