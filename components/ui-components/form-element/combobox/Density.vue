<script setup>
import { Density } from "./__code";

const select = ref(["Vuetify", "Programming"]);
const items = ["Programming", "Design", "Vue", "Vuetify"];
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      You can use <code>density</code> prop to adjusts vertical spacing within the component.
      Available options are: <code>default</code>, <code>comfortable</code>, and
      <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <global-combobox
        v-model="select"
        :items="items"
        label="Combobox"
        density="compact"
        placeholder="deployment"
        multiple
      />
    </GlobalsCodePre>
  </div>
</template>
