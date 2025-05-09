<script setup lang="ts">

</script>

<template>
  <el-header>
   <!--    下拉菜单-->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="28" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
        <el-icon class="el-icon--right">
          <IEparrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided>退出登录 </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header{
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  .el-icon{
    margin-right: 5px;
  }
}
.el-dropdown{
  margin-left: auto;
  .el-dropdown-link{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
