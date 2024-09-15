export const themeSwitch = `<script setup>
import { useGlobal } from '@globalStore'
import { themeConfig } from '@utils/theme'

const globalStore = useGlobal()
const { themeChangeMode } = themeConfig()

const toggleLightDarkMode = () => {
  globalStore.darkModeToggle()
  themeChangeMode()
}

themeChangeMode()
</script>
<template>
  <icon-btn @click="toggleLightDarkMode">
    <v-icon size="25" :icon="globalStore.datkMode ? 'tabler-moon' : 'tabler-sun'" />
  </icon-btn>
</template>`
