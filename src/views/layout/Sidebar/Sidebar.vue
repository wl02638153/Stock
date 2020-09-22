

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
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>欄一</template>
      <router-link to="billing"><el-menu-item>一</el-menu-item></router-link>
      <el-menu-item>二</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
    computed: {
    menuList() {
      return this.$router.options.routes[0].children
    }
  }
}
</script>