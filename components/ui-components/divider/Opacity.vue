<script setup>
import { Opacity } from "./__code";
</script>

<template>
  <div id="opacity">
    <GlobalsIntro title="Opacity">
      User <code>border-opacity-25</code>, <code>border-opacity-50</code>,
      <code>border-opacity-75</code>, <code>border-opacity-100</code> class to change divider
      background opacity.
    </GlobalsIntro>
    <GlobalsCodePre :code="Opacity">
      <v-divider :thickness="2" color="primary" class="my-5 border-opacity-25" />
      <v-divider :thickness="2" color="primary" class="my-5 border-opacity-50" />
      <v-divider :thickness="2" color="primary" class="my-5 border-opacity-75" />
      <v-divider :thickness="2" color="primary" class="my-5 border-opacity-100" />
    </GlobalsCodePre>
  </div>
</template>
