<template>
<!-- <div id="app">
  <el-container class="app-layout">
    <Sidebar />
    <el-container>
      <Header />
      <el-main class="app-main">
        
      </el-main>
    </el-container>
  </el-container>
</div> -->
<div id="app">
  <el-container>
    <el-aside>
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</div>

</template>
<script>
import Sidebar from '../views/layout/Sidebar/Sidebar.vue'
import Header from '../views/layout/Header.vue'
//import AdminLTE from '../assets/lib/AdminLTE-master/js/adminlte.min.js'
export default {
  name: 'app',
  components: {
    Sidebar,Header
  }
}
</script>

<style>
</style>
