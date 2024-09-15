<script setup>
import { Roundend } from "./__code";
</script>
<template>
  <div id="rounded">
    <GlobalsIntro title="Rounded">
      The <code>rounded</code> prop can be used to change the border radius of
      <code>v-avatar</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Roundend">
      <v-avatar color="primary" icon="tabler-brand-vue" rounded="0" />
      <v-avatar color="secondary" icon="tabler-brand-vue" rounded="sm" />
      <v-avatar color="info" icon="tabler-brand-vue" rounded />
      <v-avatar color="warning" icon="tabler-brand-vue" rounded="lg" />
      <v-avatar color="error" icon="tabler-brand-vue" rounded="xl" />
      <v-avatar color="success" icon="tabler-brand-vue" />
    </GlobalsCodePre>
  </div>
</template>
