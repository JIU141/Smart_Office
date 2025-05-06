<script setup lang="ts">
import appaside from './appaside.vue';
import appheader from './appheader.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <appaside />
      <el-container class="header-and-main">
        <appheader />
        <el-main>
          <el-scrollbar>
            <RouterView/>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.header-and-main{
  flex-direction: column;
  height: 100vh;
}
.el-main{
  background-color: rgb(243.9, 244.2, 244.8);
  padding-right: 0;
}
</style>
