# zms-frontend 

##### 运行方法

1. 安装vue-cli3 （参考6.1的讲座，不要装成vue-cli2）

2. 将repo的文件下载到本地

   ```Shell
   git clone https://github.com/tj-zms-frontend/zms-frontend.git
   ```

3. 在zms-frontend文件夹内运行命令（双击install.bat）

   ```shell
   npm install
   ```

4. 最后执行（双击run.bat也行）

   ```shell
   npm run serve
   ```

5. 文件结构如下

   - /src: 存放代码

   - /src/assets/: 存放资源文件

   - /src/store/: Vuex，存放数据（当成全局变量）(直接在index.js里修改，变量直接加在state里，方法加在mutations里，用this.$store.commit(’方法名‘)调用，不要直接this.$store.mutations.方法名！)

     尽量不要在距离过远的组件之间传值，直接在这里改动。

   - /src/route/: Vue-route，Vue路由。

   - /src/components/: 存放Vue组件（如果要在组件A中放组件B，在B中写import A from 'A的路径'。在B中的使用A的方法是将A当作HTML标签名称，如果不使用会报错。能拆组件就尽量拆，尽量避免大量重复的div、span等（用v-for替代）。可以使用SCSS。）

     ```css
     .classA
     {
     	display:inline-block;
     	div
     	{
     		background-color:cyan; 
     	}
     }
     ```

     上面这样写也是可以的，内层表示class=“classA"下的div才会有的样式。

   - /src/views/: 放视图（就是小组讨论中的界面/页面）。每个vue就当成一个html文件去看待就行了。这里面的vue中的created，当成原来的html中的onload去看就行了（或者当成c++的构造函数）（重载时created不执行的问题已经解决了，不需要考虑created不执行的问题）。

   - /src/App.vue：当成c++的main函数

   - /public：这里可以改图标，但不建议在这里直接改index.html

   - /node_modules：文件删除后的恢复方法见步骤3

   - （除了src之外的基本不要动！！！）

6. 改动可以直接提交到repo里。

   

##### 更新记录

更新 @ 2021-06-03 15:20 | hzw

- 增加了按钮组件(ZButton.vue)，图标不需要外部引用(像element-ui的图标使用方式，需要使用MDI，可选项会比element-ui的按钮多一点)
- 目前支持3个事件zmsclick、zmsmouseover、zmsmouseleave
- 对于控件组件，通过访问/componentView查看示例



更新 @ 2021-06-03 13:06 | hzw

- 修改了Vue路由设置(Vue-Route)和左边栏(Slide Bar)的相应配置，现在能够通过点击左边栏跳转到相应的界面了（界面会显示在PageContainer组件中的路由视图中）
- 目前只建立了动物管理的页面。如果需要加页面，参照views下的样例，和router/index.js下的样例建立新的页面。注意需要到store/index.js下改动（每一个菜单项的route键存储其对应的path，需要和router/index.js下的相对应）
- 优化了Slidebar组件和PageContainer组件的样式



更新 @ 2021-06-03 01:34 | hzw

- 增加弹窗组件，支持插槽(slot)



请求 @ 2021-06-03 00:52 | hzw

- 现在的UI太难看了，需要有一位dl进行美术指导



更新 @ 2021-06-03 00:39 | hzw

- 增加了Slidebar的二级菜单，同时实现收折动画
- 填补了一/二级菜单内容
- 修改二级菜单内容可以到store里更改JSON的child，不需要在Slidebar.vue中添加组件
- （求dl解决vue的background-image问题，filter+transition太难看了）



更新 @ 2021-06-02 20:54 | hzw

- 增加了MDI图标库，需要执行下列命令

  ```Shell
  npm install @mdi/js @jamescoyle/vue-icon
  ```

- 将App.vue的路由视图(Router-View)移动到组件PageContainer中
- 优化了左侧栏的样式
- 对于左侧菜单的内容，可以到store里更改JSON，不需要在Slidebar.vue中添加组件



Change @2020-06-02 17:44

- Added the slide bar.
- Readjusted the top navigation bar.



Change @2021-06-02 14:02

- Added the top navigation bar and corresponding components.
- If it does not satisfy the requirement, just revert this commit.



Change @2021-06-01 23:44

- Created a Vue.js project with Vue2.x, Vue-Router(history mode), Vuex, Babel, CSS Preprocessor(Sass/SCSS with Dart-SASS) and ESLint(Basic, lint on save)
- It only contains a "Hello World" page now.
- Source codes are in "src" folder.
- Folder "node_modules" is not uploaded. It can be generated by the command below.

```shell
npm install
```

