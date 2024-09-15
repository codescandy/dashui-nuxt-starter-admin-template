<script setup>
import { SelectionSlot } from "./__code";
const files = ref([]);
</script>

<template>
  <div id="selection-slot">
    <GlobalsIntro title="Selection slot">
      Using the <code>selection</code> slot, you can customize the appearance of your input
      selections.
    </GlobalsIntro>

    <GlobalsCodePre :code="SelectionSlot">
      <v-file-input
        v-model="files"
        multiple
        placeholder="Upload your documents"
        label="File input"
        prepend-icon="tabler-paperclip"
      >
        <template #selection="{ fileNames }">
          <template v-for="fileName in fileNames" :key="fileName">
            <VChip label size="small" variant="outlined" color="primary" class="me-2">
              {{ fileName }}
            </VChip>
          </template>
        </template>
      </v-file-input>
    </GlobalsCodePre>
  </div>
</template>
