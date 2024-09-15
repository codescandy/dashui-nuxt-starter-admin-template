<script setup>
import { Density } from "./__code";

const items = ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"];

const select = ref("Florida");
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      You can use <code>density</code> prop to adjusts vertical spacing within the component.
      Available options are: <code>default</code>, <code>comfortable</code>, and
      <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <global-autocomplete
        v-model="select"
        label="States"
        :items="items"
        density="comfortable"
        placeholder="Select State"
      />
    </GlobalsCodePre>
  </div>
</template>
