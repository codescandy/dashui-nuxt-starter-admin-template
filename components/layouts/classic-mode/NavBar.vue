<script setup>
import Navigation from "@/components/layouts/navigation/Index.vue";

import { useGlobal } from "@/stores/global";
const { themeSidebarWidth, smallDisplay, themeName } = themeConfig();
const globalStore = useGlobal();
</script>

<template>
  <v-navigation-drawer
    v-model="globalStore.sideNavBar"
    :width="themeSidebarWidth"
    :permanent="smallDisplay ? false : true"
    :class="{ 'sidebar-visibile': !smallDisplay && globalStore.sideNavBar }"
  >
    <div class="d-none d-md-flex app-nav-logo-wrapper aligin-center">
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

    <Navigation />
  </v-navigation-drawer>
</template>

<style lang="scss">
@use "@configured-variables" as variable;

.app-nav-logo-wrapper {
  height: variable.$dash-ui-header-height;
  padding: map_get(variable.$list-item, padding);
  align-items: center;
}
</style>
