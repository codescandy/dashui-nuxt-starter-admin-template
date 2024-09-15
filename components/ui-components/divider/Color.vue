<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      User <code>color</code> prop to change divider color.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-divider :thickness="4" color="primary" class="my-5" />
      <v-divider :thickness="4" color="secondary" class="my-5" />
      <v-divider :thickness="4" color="info" class="my-5" />
      <v-divider :thickness="4" color="warning" class="my-5" />
      <v-divider :thickness="4" color="success" class="my-5" />
      <v-divider :thickness="4" color="error" class="my-5" />
    </GlobalsCodePre>
  </div>
</template>
