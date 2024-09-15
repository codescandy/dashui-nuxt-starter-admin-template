<script setup>
import { Inline } from "./__code";

const columnRadio = ref("radio-1");
const inlineRadio = ref("radio-1");
</script>

<template>
  <div id="inline">
    <GlobalsIntro title="Inline">
      Use <code>inline</code> prop to displays radio buttons in row.
    </GlobalsIntro>
    <GlobalsCodePre :code="Inline">
      <v-radio-group v-model="columnRadio">
        <v-radio label="Option 1" value="radio-1" />
        <v-radio label="Option 2" value="radio-2" />
      </v-radio-group>

      <v-divider class="my-4" />

      <v-radio-group v-model="inlineRadio" inline>
        <v-radio label="Option 1" value="radio-1" />
        <v-radio label="Option 2" value="radio-2" />
      </v-radio-group>
    </GlobalsCodePre>
  </div>
</template>
