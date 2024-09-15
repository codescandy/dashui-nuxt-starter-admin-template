<script setup>
import { Selects } from "./__code";

const chips = ref(["Programming", "Playing games", "Sleeping"]);
const items = ref(["Streaming", "Eating", "Programming", "Playing games", "Sleeping"]);
</script>

<template>
  <div id="in-selects">
    <GlobalsIntro title="In Selects">
      Selects can use <code>chips</code> to display the selected data. Try adding your own tags
      below.
    </GlobalsIntro>
    <GlobalsCodePre :code="Selects">
      <global-combobox
        v-model="chips"
        chips
        clearable
        multiple
        closable-chips
        clear-icon="tabler-square-rounded-x"
        :items="items"
        label="Your favorite hobbies"
        prepend-icon="tabler-filter"
      />
    </GlobalsCodePre>
  </div>
</template>
