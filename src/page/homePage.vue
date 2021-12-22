
<template>
  <!-- 容器布局，参考element-ui -->
  <el-container style="height: 100%">
    <!-- 侧边栏 -->

    <el-aside style="width: auto">
      <!-- :router="true"  动态切换路由 -->
      <!-- :collapse 收缩面板 接收true和false -->
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#2f3e4e"
        text-color="#fff"
        :router="true"
        active-text-color="yellow"
        :collapse="isCollapse"
        style="height: 100%"
        :default-active="defaultActive"
      >
        <!-- 侧边栏内容 -->
        <!-- 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据,们只是能通过scope.row获得当前的行数据 -->
        <!-- 动态路由为啥要用键值对 因为人家路由上的名字就是这样子定义的 当然也可以选择使用path的形式 -->
        <!-- 如果有子元素，则遍历子元素，没有的话直接显示 
        动态路由可以实现单页面应用的的实时更新 -->
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-document"></i>Order</template
          >
          <el-menu-item index="/home/orderList" @click="goTo('/orderList')"
            >Order List</el-menu-item
          >
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-menu" style="font-size: 22px"></i>Staff
            Setting</template
          >
          <el-menu-item index="/systemManager" @click="goTo('/systemManager')"
            >相似词</el-menu-item
          >
          <el-menu-item index="/staffManager" @click="goTo('/staffManager')"
            >语气词</el-menu-item
          >
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-setting" style="font-size: 22px"></i>System
            Setting</template
          >
          <el-menu-item index="/systemManager" @click="goTo('/systemManager')"
            >相似词</el-menu-item
          >
          <el-menu-item index="/staffManager" @click="goTo('/staffManager')"
            >语气词</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span>
          <i
            class="el-icon-s-fold"
            :class="{ rotate: isCollapse, '': !isCollapse }"
            @click="isCollapse = !isCollapse"
          ></i>
        </span>
        <!-- 头部 -->
        <span>
          <headerItem />
        </span>
      </el-header>
      <el-main>
        <!-- 在这里留一个坑  插入页面数据  -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: false,
      menus: [],
      defaultActive: "/home/orderList",
    };
  },
  components: {},
  created() {
    // 在控制台输出this.$router.option.routes[1].children可以找到index的子路由
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-icon-s-fold {
  font-size: 36px;
  transition: all 1s;
}
.rotate {
  transform: rotate(90deg);
}
</style>
