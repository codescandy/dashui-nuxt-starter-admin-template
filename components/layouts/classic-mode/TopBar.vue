<script setup>
import Notification from "@/components/layouts/Notification.vue";
import UserProfile from "@/components/layouts/UserProfile.vue";

import { useGlobal } from "@/stores/global";
const { themeHeaderHeight, themeSidebarWidth, smallDisplay, themeName } = themeConfig();
const globalStore = useGlobal();

const toggleSidebarPhone = (tempObj) => {
  globalStore.sideBarToggle(tempObj);
};

watch(smallDisplay, (newValue, oldValue) => {
  if (newValue && !oldValue) {
    toggleSidebarPhone(false);
  } else {
    toggleSidebarPhone(true);
  }
});

if (smallDisplay.value) {
  toggleSidebarPhone(false);
}
</script>

<template>
  <v-app-bar :height="themeHeaderHeight" class="app-header" fixed>
    <template #prepend>
      <div class="d-flex d-md-none aligin-item-center mr-3">
        <NuxtLink to="/" class="d-flex">
          <img
            :src="
              themeName === 'light'
                ? '/images/brand/logo/logo-light.svg'
                : '/images/brand/logo/logo-dark.svg'
            "
            height="30px"
          />
        </NuxtLink>
      </div>

      <icon-btn
        class="d-none d-sm-flex"
        @click.stop="globalStore.sideBarToggle()"
        :style="`margin-left:${
          globalStore.sideNavBar && !smallDisplay ? themeSidebarWidth : '0'
        }px;`"
      >
        <v-icon size="25" icon="tabler-menu-2" />
      </icon-btn>

      <GlobalsTextField
        placeholder="Seach"
        height="39"
        append-inner-icon="tabler-search"
        class="min-w-57 ml-4 d-none d-sm-flex"
      />
    </template>

    <template #append>
      <icon-btn class="d-flex d-sm-none" @click.stop="globalStore.sideBarToggle()">
        <v-icon size="25" icon="tabler-menu-2" />
      </icon-btn>

      <Notification />
      <UserProfile />
    </template>
  </v-app-bar>
</template>
