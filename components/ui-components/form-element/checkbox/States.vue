<script setup>
import { States } from "./__code";

const toggleCheckbox = ref(true);
const toggleIndeterminateCheckbox = ref(true);
const disabledCheckbox = ref(true);
const toggleOffCheckbox = ref(false);
</script>

<template>
  <div id="states">
    <GlobalsIntro title="States">
      <code>v-checkbox</code> can have different states such as <code>default</code>,
      <code>disabled</code>, and <code>indeterminate</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="States" flex>
      <v-checkbox v-model="toggleCheckbox" label="On" />

      <v-checkbox v-model="toggleOffCheckbox" label="Off" />

      <v-checkbox
        v-model:indeterminate="toggleIndeterminateCheckbox"
        v-model="toggleIndeterminateCheckbox"
        label="Indeterminate"
      />

      <v-checkbox :model-value="disabledCheckbox" disabled label="On disabled" />

      <v-checkbox disabled label="Off disabled" />
    </GlobalsCodePre>
  </div>
</template>
