<script setup lang="ts">
import { ref } from 'vue';

const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const selectedMenuItem = ref<number | null>(null);

const selectMenuItem = (id: number) => {
  selectedMenuItem.value = id;
};

const isSelected = (id: number) => {
  return selectedMenuItem.value === id;
};
</script>

<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-header">
      <div class="logo-image"></div>
      <div class="logo-text">AI OFFICE</div>
      <button class="collapse-toggle" @click="toggleSidebar">
        <span v-if="!isCollapsed">❯</span>
        <span v-else>❮</span>
      </button>
    </div>

    <ul class="nav-links">
      <li
        class="nav-item"
        :class="{ active: isSelected(1) }"
        @click="selectMenuItem(1)"
      >
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 16H13C13.55 16 14 15.55 14 15V7C14 6.45 13.55 6 13 6H7C6.45 6 6 6.45 6 7V15C6 15.55 6.45 16 7 16ZM7 24H13C13.55 24 14 23.55 14 23V19C14 18.45 13.55 18 13 18H7C6.45 18 6 18.45 6 19V23C6 23.55 6.45 24 7 24ZM17 24H23C23.55 24 24 23.55 24 23V15C24 14.45 23.55 14 23 14H17C16.45 14 16 14.45 16 15V23C16 23.55 16.45 24 17 24ZM16 7V11C16 11.55 16.45 12 17 12H23C23.55 12 24 11.55 24 11V7C24 6.45 23.55 6 23 6H17C16.45 6 16 6.45 16 7Z" fill="#C3CAD9"/>
          </svg>
        </span>
        <span class="nav-text">Planner</span>
      </li>
      <li
        class="nav-item"
        :class="{ active: isSelected(2) }"
        @click="selectMenuItem(2)"
      >
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.35 13.04C21.67 9.59 18.64 7 15 7C12.11 7 9.6 8.64 8.35 11.04C5.34 11.36 3 13.91 3 17C3 20.31 5.69 23 9 23H22C24.76 23 27 20.76 27 18C27 15.36 24.95 13.22 22.35 13.04Z" fill="#C3CAD9"/>
          </svg>
        </span>
        <span class="nav-text">Priorities</span>
      </li>
      <li
        class="nav-item"
        :class="{ active: isSelected(3) }"
        @click="selectMenuItem(3)"
      >
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 7H21V6C21 5.45 20.55 5 20 5C19.45 5 19 5.45 19 6V7H11V6C11 5.45 10.55 5 10 5C9.45 5 9 5.45 9 6V7H8C6.89 7 6.01 7.9 6.01 9L6 23C6 24.1 6.89 25 8 25H22C23.1 25 24 24.1 24 23V9C24 7.9 23.1 7 22 7ZM22 22C22 22.55 21.55 23 21 23H9C8.45 23 8 22.55 8 22V12H22V22ZM10 14H12V16H10V14ZM14 14H16V16H14V14ZM18 14H20V16H18V14Z" fill="#C3CAD9"/>
          </svg>
        </span>
        <span class="nav-text">Stats</span>
      </li>
      <li
        class="nav-item"
        :class="{ active: isSelected(4) }"
        @click="selectMenuItem(4)"
      >
        <span class="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 9H22V17C22 17.55 21.55 18 21 18H9V19C9 20.1 9.9 21 11 21H21L25 25V11C25 9.9 24.1 9 23 9ZM20 14V7C20 5.9 19.1 5 18 5H7C5.9 5 5 5.9 5 7V20L9 16H18C19.1 16 20 15.1 20 14Z" fill="#C3CAD9"/>
          </svg>
        </span>
        <span class="nav-text">Tasks</span>
      </li>
    </ul>

    <div class="sidebar-bottom">
      <div class="invite-team" @click="selectMenuItem(-2)">
        <span class="invite-icon">👤</span>
        <span class="invite-text">Invite teammates</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sidebar {
  width: 240px;
  height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: #1d1c25;
  border-right: 1px solid #2a2835;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 70px;
}

.sidebar.collapsed .sidebar-header .logo-text,
.sidebar.collapsed .nav-text,
.sidebar.collapsed .invite-text {
  display: none;
}

.sidebar.collapsed .collapse-toggle {
  transform: translateX(40%) translateY(3%);
}

.sidebar-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
}

.logo-image {
  width: 35px;
  height: 25px;
  background: linear-gradient(135deg, #7c53e3, #ff17b1);
  margin-right: 8px;
  border-radius: 3px;
}

.logo-text {
  font-weight: bold;
  font-size: 22px;
  color: white;
}

.collapse-toggle {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.7;
}

.nav-links {
  list-style: none;
}

.nav-item {
  padding: 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 2px;
}

.nav-item.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-icon {
  margin-right: 10px;
  font-size: 36px;
  opacity: 0.8;
  width: 36px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-text {
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
}

.sidebar-bottom {
  margin-top: auto;
}

.invite-team {
  color: #7c53e3;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.invite-icon {
  margin-right: 10px;
  font-size: 26px;
  opacity: 0.8;
  width: 26px;
  text-align: center;
}

.invite-text {
  font-size: 16px;
}
</style>
