

<!--<template>
  <el-menu>
        <el-menu-item v-for="menuItem in menuList" :index="menuItem.name" :key="menuItem.name">
          <router-link :to="menuItem.path">
            <i :class="['app-sidebar__icon', `${menuItem.meta.icon}`]" />
            <span>{{menuItem.meta.title}}</span>
          </router-link>
        </el-menu-item>
  </el-menu>
</template>-->
<template>
  <el-menu :default-openeds="[]">
    <router-link to="/admin"><el-menu-item>首頁</el-menu-item></router-link>
    <!-- <el-submenu index="1"> -->
      <!-- <template slot="title"><i class="el-icon-message"></i>欄一</template> -->
      <router-link v-for="menuItem in menuList" :to="menuItem.meta.path" :index="menuItem.name" :key="menuItem.name">
        <el-menu-item>
          <i :class="['app-sidebar__icon', `${menuItem.meta.icon}`]" />
          <span>{{menuItem.meta.title}}</span>
          </el-menu-item>
      </router-link>
      <!-- <el-menu-item>二</el-menu-item> -->
    <!-- </el-submenu> -->
  </el-menu>
</template>

<script>
export default {
    computed: {
    menuList() {
      return this.$router.options.routes[1].children
    }
  }
}
</script>