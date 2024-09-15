<script setup>
import { Icon } from "./__code";
const radioGroup = ref(1);
</script>

<template>
  <div id="icon">
    <GlobalsIntro title="Icon">
      Use <code>false-icon </code>and <code>true-icon</code> prop to set icon on inactive and active
      state.
    </GlobalsIntro>
    <GlobalsCodePre :code="Icon">
      <v-radio-group v-model="radioGroup" false-icon="tabler-bell-off" true-icon="tabler-bell">
        <v-radio v-for="n in 2" :key="n" :label="`Radio ${n}`" :value="n" />
      </v-radio-group>
    </GlobalsCodePre>
  </div>
</template>
