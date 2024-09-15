<script setup>
import { VModelSupport } from "./__code";
const isTooltipVisible = ref(false);
</script>
<template>
  <div id="v-model-support">
    <GlobalsIntro title="V-Model Support"> Tooltips can wrap any element. </GlobalsIntro>
    <GlobalsCodePre :code="VModelSupport">
      <v-btn @click="isTooltipVisible = !isTooltipVisible"> toggle tooltip </v-btn>

      <v-tooltip :model-value="isTooltipVisible" location="top">
        <template #activator="{ props }">
          <v-icon v-bind="props" icon="tabler-brand-instagram" />
        </template>
        <span>Programmatic tooltip</span>
      </v-tooltip>
    </GlobalsCodePre>
  </div>
</template>
