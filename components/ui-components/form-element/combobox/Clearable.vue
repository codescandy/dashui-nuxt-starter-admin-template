<script setup>
import { Clearable } from "./__code";

const select = ref(["Vuetify", "Programming"]);

const items = ["Programming", "Design", "Vue", "Vuetify"];
</script>

<template>
  <div id="clearable">
    <GlobalsIntro title="Clearable">
      Use <code>clearable</code> prop to clear combobox.
    </GlobalsIntro>
    <GlobalsCodePre :code="Clearable">
      <global-combobox
        v-model="select"
        :items="items"
        label="Combobox"
        multiple
        placeholder="deployment"
        clearable
      />
    </GlobalsCodePre>
  </div>
</template>
