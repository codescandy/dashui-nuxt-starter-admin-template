<script setup>
import { Icon } from "./__code";
</script>

<template>
  <div id="icon">
    <GlobalsIntro title="Icon">
      You can use <code>icon</code> prop of <code>v-avatar</code> component for rendering icons.
    </GlobalsIntro>
    <GlobalsCodePre :code="Icon">
      <v-avatar color="primary" icon="tabler-garden-cart" />
      <v-avatar color="secondary" icon="tabler-home" />
      <v-avatar color="info" icon="tabler-arrow-left" />
      <v-avatar color="error" icon="tabler-stethoscope" />
      <v-avatar color="warning" icon="tabler-telescope" />
    </GlobalsCodePre>
  </div>
</template>
