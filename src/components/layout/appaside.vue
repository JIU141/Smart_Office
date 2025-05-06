<script setup lang="ts">
import {isCollapse} from '@/components/layout/isCollapse.ts'
</script>

<template>
  <el-aside>
    <el-scrollbar>
    <el-menu router unique-opened :collapse="isCollapse">
      <a href="/" class="logo">
        <img src="@/assets/logo.svg">
        <h1>小白办公</h1>
      </a>
      <el-sub-menu index="1">
        <template #title>
          <el-icon> <IEpSetting /> </el-icon><span>xxx</span>
        </template>
        <el-menu-item index="/about">
          <el-icon> <IEpSetting /></el-icon><span>AAA</span>
        </el-menu-item>
        <el-menu-item index="/">
          <el-icon> <IEpSetting /></el-icon><span>BBB</span>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/">
        <el-icon> <IEpSetting /></el-icon><span>xxx</span>
      </el-menu-item>
      <el-menu-item index="/">
        <el-icon> <IEpSetting /></el-icon><span>xxx</span>
      </el-menu-item>
      <el-menu-item index="/">
        <el-icon> <IEpSetting /></el-icon><span>xxx</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon> <IEpSetting /> </el-icon><span>xxx</span>
        </template>
        <el-menu-item index="/">
          <el-icon> <IEpSetting /></el-icon><span>AAA</span>
        </el-menu-item>
        <el-menu-item index="/">
          <el-icon> <IEpSetting /></el-icon><span>BBB</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style lang="scss" scoped>
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text-decoration: none;
  color: black;
  img{
    width: 32px;
    height: 32px;
  }
}
.el-aside {
  background-color: rgb(232.8, 233.4, 234.6);
  height: 100vh;
  width: auto;
}
.el-menu{
  background-color: rgb(232.8, 233.4, 234.6);
  border-right: none;
  width: 200px;
  &.el-menu--collapse{
    width: 60px;
    & h1{
      display: none;
    }
  }
}
</style>
