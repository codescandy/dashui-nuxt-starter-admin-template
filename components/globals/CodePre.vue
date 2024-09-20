<script setup>
import { VueCodeHighlighter } from "vue-code-highlighter";

defineProps({
  code: {
    type: String,
    required: true,
  },

  marginL: {
    type: Boolean,
    default: false,
  },

  flex: {
    type: Boolean,
    default: false,
  },

  background: {
    type: Boolean,
    default: false,
  },
});
const tab = ref(null);
</script>
<template>
  <v-card rounded="lg" elevation="3" class="mb-10">
    <v-tabs v-model="tab" density="comfortable">
      <v-tab value="design" class="text-capitalize">Design</v-tab>
      <v-tab value="vue" class="text-capitalize">Vue</v-tab>
    </v-tabs>

    <v-card-text :class="{ 'bg-background': background }">
      <v-window v-model="tab">
        <v-window-item
          value="design"
          :class="`app-design-window-item
            ${marginL ? 'extra-margin' : ''}
            ${flex && tab === 'design' ? 'd-flex align-items-center' : ''}
          `"
        >
          <slot />
        </v-window-item>
        <v-window-item value="vue">
          <VueCodeHighlighter :code="code" lang="js" />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
