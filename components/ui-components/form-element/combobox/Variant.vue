<script setup>
import { Variant } from "./__code";

const selectedItem = ref(["Programming"]);

const items = ["Programming", "Design", "Vue", "Vuetify"];
</script>

<template>
  <div id="variant">
    <GlobalsIntro title="Variant">
      Use <code>solo</code>, <code>outlined</code>, <code>underlined</code>, <code>filled</code> and
      <code>plain</code> options of <code>variant</code> prop to change the look of Combobox.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Variant">
      <global-combobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />

      <global-combobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />

      <global-combobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />

      <global-combobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />

      <global-combobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </GlobalsCodePre>
  </div>
</template>
