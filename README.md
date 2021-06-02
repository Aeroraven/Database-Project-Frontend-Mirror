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

   - /src/route/: Vue-route，Vue路由，暂时不用动。

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

   - /src/views/: 暂时只有Helloworld的两个页面。

   - /src/App.vue：当成c++的main函数

   - /public：这里可以改图标，但不建议在这里直接改index.html

   - /node_modules：文件删除后的恢复方法见步骤3

   - （除了src之外的基本不要动！！！）

6. 改动可以直接提交到repo里。

   

##### 更新记录

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

