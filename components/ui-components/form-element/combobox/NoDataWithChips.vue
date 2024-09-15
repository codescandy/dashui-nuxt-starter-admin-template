<script setup>
import { NoDataWithChips } from "./__code";

const items = ["Gaming", "Programming", "Vue", "Vuetify"];

const selectedList = ref(["Vuetify"]);
const search = ref(null);

watch(selectedList, (value) => {
  if (value.length > 5) nextTick(() => selectedList.value.pop());
});
</script>

<template>
  <div id="no-data-with-chips">
    <GlobalsIntro title="No data with chips">
      Previously known as tags - user is allowed to enter more than 1 value
    </GlobalsIntro>
    <GlobalsCodePre :code="NoDataWithChips">
      <global-combobox
        v-model="selectedList"
        v-model:search-input="search"
        :items="items"
        hide-selected
        :hide-no-data="false"
        placeholder="deployment"
        hint="Maximum of 5 tags"
        label="Add some tags"
        multiple
        persistent-hint
      >
        <template #no-data>
          <v-list-item>
            <v-list-item-title>
              No results matching "<strong>{{ search }}</strong
              >". Press <kbd>enter</kbd> to create a new one
            </v-list-item-title>
          </v-list-item>
        </template>
      </global-combobox>
    </GlobalsCodePre>
  </div>
</template>
