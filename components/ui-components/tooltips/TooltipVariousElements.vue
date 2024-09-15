<script setup>
import { TooltipVariousElements } from "./__code";
import avatar5 from "/images/avatar/avatar-5.jpg";
</script>
<template>
  <div id="tooltip-various-elements">
    <GlobalsIntro title="Tooltip on Various Elements">
      Tooltips can wrap any element.
    </GlobalsIntro>
    <GlobalsCodePre :code="TooltipVariousElements">
      <v-btn>
        Button
        <v-tooltip location="top" activator="parent"> Tooltip </v-tooltip>
      </v-btn>

      <v-avatar color="info">
        <v-img :src="avatar5" />
        <v-tooltip location="top" activator="parent"> Tooltip on Avatar </v-tooltip>
      </v-avatar>

      <v-tooltip location="top">
        <template #activator="{ props }">
          <v-icon v-bind="props" size="30" icon="tabler-user" />
        </template>
        <span>Tooltip on Icon</span>
      </v-tooltip>
    </GlobalsCodePre>
  </div>
</template>
