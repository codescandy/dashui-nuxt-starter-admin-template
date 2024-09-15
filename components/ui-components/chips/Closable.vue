<script setup>
import { Closable } from "./__code";

const defaultChip = ref(true);
const primaryChip = ref(true);
const secondaryChip = ref(true);
const successChip = ref(true);
const infoChip = ref(true);
const warningChip = ref(true);
const errorChip = ref(true);
</script>
<template>
  <div id="closable">
    <GlobalsIntro title="Closable">
      Closable chips can be controlled with a <code>v-model</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Closable">
      <v-chip closable @click:close="defaultChip = !defaultChip"> Default </v-chip>
      <v-chip color="primary" closable @click:close="primaryChip = !primaryChip"> Primary </v-chip>
      <v-chip color="secondary" closable @click:close="secondaryChip = !secondaryChip">
        Secondary
      </v-chip>
      <v-chip color="success" closable @click:close="successChip = !successChip"> Success </v-chip>
      <v-chip color="info" closable @click:close="infoChip = !infoChip"> Info </v-chip>
      <v-chip color="warning" closable @click:close="warningChip = !warningChip"> Warning </v-chip>
      <v-chip color="error" closable @click:close="errorChip = !errorChip"> Error </v-chip>
    </GlobalsCodePre>
  </div>
</template>
