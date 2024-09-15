<script setup>
import { Thickness } from "./__code";
</script>

<template>
  <div id="thickness">
    <GlobalsIntro title="Thickness">
      User <code>thickness</code> prop to change divider height.
    </GlobalsIntro>
    <GlobalsCodePre :code="Thickness">
      <v-divider :thickness="4" class="my-5" />
      <v-divider :thickness="8" class="my-5" />
      <v-divider :thickness="12" class="my-5" />
      <v-divider :thickness="16" class="my-5" />
    </GlobalsCodePre>
  </div>
</template>
