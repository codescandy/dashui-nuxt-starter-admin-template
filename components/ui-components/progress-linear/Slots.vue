<script setup>
import { Slots } from "./__code";

const skill = ref(20);
const knowledge = ref(33);
const power = ref(78);
</script>

<template>
  <div id="slots">
    <GlobalsIntro title="Slots">
      The v-progress-linear component will be responsive to user input when using
      <code>v-model</code>. You can use the default slot or bind a local model to display inside of
      the progress.
    </GlobalsIntro>
    <GlobalsCodePre :code="Slots" margin-l>
      <v-progress-linear v-model="power" color="primary" height="8" />
      <v-progress-linear v-model="skill" color="primary" height="20">
        <template #default="{ value }">
          <span>{{ Math.ceil(value) }}%</span>
        </template>
      </v-progress-linear>
      <v-progress-linear v-model="knowledge" height="20" color="primary">
        <span>{{ Math.ceil(knowledge) }}%</span>
      </v-progress-linear>
    </GlobalsCodePre>
  </div>
</template>
