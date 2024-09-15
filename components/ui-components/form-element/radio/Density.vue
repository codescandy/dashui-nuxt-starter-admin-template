<script setup>
import { Density } from "./__code";

const columnRadio = ref("radio-1");
const inlineRadio = ref("radio-1");
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      Use density prop to adjusts the spacing within the component. Available options are:
      <code>default</code>, <code>comfortable</code>, and <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <v-radio-group v-model="columnRadio">
        <v-radio density="compact" label="Option 1" value="radio-1" />
        <v-radio density="compact" label="Option 2" value="radio-2" />
      </v-radio-group>

      <v-divider class="my-4" />

      <v-radio-group v-model="inlineRadio" inline>
        <v-radio density="compact" label="Option 1" value="radio-1" />
        <v-radio density="compact" label="Option 2" value="radio-2" />
      </v-radio-group>
    </GlobalsCodePre>
  </div>
</template>
