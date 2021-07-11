# zms-frontend 

##### 运行方法

1. 新功能可以新建一个分支，完成后再merge到develop分支里

4. 静态页面直接放在public文件夹下

5. 修改较多，如果有之前版本的建议执行下面命令

   ```Shell
   npm install
   ```

4. **抄模板记得改，不要所有界面长一样！！！**

5. **变量名记得改，不要抄完变量名不改！！！！！！**

   不要出现如动物食谱管理里面有`$t('recipe.warehouseInfo')`这种变量名只改一半的情况！！！！
   
   

**问题列表**

- 离职员工处理路由链接错误（Issue #62）
- 员工信息查询加载无法结束（Issue #61）
- 员工信息管理没有修改变量，导致描述性错误。（Issue #60）
  - 修改变量名后，在en-US.js中增加条目，而不是直接到en-US.js中修改，否则会导致仓库管理模块出错！
- 员工信息录入的性别使用下拉框选择，而不是输入框。（Issue #59）
- 门票管理路由配置不正确或页面缺失。（Issue #58）
- 演出票信息管理的标题字体未正确配置。（Issue #57）
- <s>Webpack未正确配置，浏览器无法运行build版本。（Issue #56）【严重】</s>【Pr #69 (Commit 05e147f)】
- 首页太难看，需要优化。（Issue #55）



##### 更新记录

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



更新 @ 2021-07-04~2021-07-05 14:36 | hzw

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



更新 @ 2021-06-10 | hzw

- 修复错误：侧栏滚动条无法通过中键滚动的问题

- 修复错误：大小写错误导致的错误

- Dependabot：更新依赖

  

更新 @ 2021-06-09 14:00 | hzw

- 安装了vue-particle
  - 基于vue-particle，增加了页面的背景动态效果
- 增加夜间模式



修正 @ 2021-06-07 23:49 | hzw

- 修正警告：侧栏冗余导航问题

- 修正警告：动物救助模块中menu2、date、dialog、on、attrs未定义的问题

  

更新 @ 2021-06-07 21:27 | hzw

- 增加和优化了仓库管理的界面和逻辑

  

更新 @ 2021-06-07 01:41 | hzw

- 安装了qs（查询字符串解析）、element-ui
  - ！尽量保持界面风格一致
  - 不确定Vuetify的CSS重置是否对element-ui生效，不要二者混用。
- 优化了动物医疗管理的界面和逻辑
  - 增加了修改信息提交与错误反馈界面
  - 增加查询结果为空的反馈UI
- 优化了仓库管理的界面和逻辑
  - 增加了仓库信息查询UI反馈

更新 @ 2021-06-07 00:00 | hzw

- 优化了动物医疗管理的界面和逻辑

  - 增加了医疗信息修改界面

  - 对于上报日期超前的请求，进行提示

  - 增加上报错误返回提示
  
    

更新 @ 2021-06-06 22:53 | hzw

- 安装了vue-i18n(vue语言切换和国际化)、vue-toastification(作为element-ui的一个替代)、vuetify-message-snackbar。移除了live2d-widget (x。

  - 可以将全局要用的信息放在/lang/zh-CN.js中
  - 可以使用Vuex中的showToastNotify来显示通知条 (当前版本没有安装 element-ui，在npm install前使用Message等可能出错)

- 优化了“救助信息上报”的界面与逻辑，使用vue-i18n重写了救助信息上报界面

  

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

1. [Vue.js](https://github.com/vuejs/vue)  by Evan You
   1. Vue Router
   2. Vuex
2. [Vuetify](https://github.com/vuetifyjs/vuetify) （组件库与排版，类似于element-ui，貌似更难用？）
3. [Material Design Icons](https://github.com/google/material-design-icons) （图标）
4. [Animate.css](https://github.com/animate-css/animate.css) （过渡动画）
5. [Penguin Statistics Frontend V2](https://github.com/penguin-statistics/frontend-v2) （VContainer的使用、CSS Repeating-Linear-Gradient、部分排版）
6. [Vue Toastification](https://github.com/Maronato/vue-toastification)（模仿Element-UI的消息框）
7. [Vue I18n](https://github.com/kazupon/vue-i18n) （本地化）
8. [Vue-Echarts](https://github.com/ecomfe/vue-echarts) （图表）
9. MockJS
10. [Vue-Particles](https://github.com/creotip/vue-particles)（特效）
