<script setup>
import { ItemSlot } from "./__code";
const rating = ref(4.5);
</script>

<template>
  <div id="item-slot">
    <GlobalsIntro title="Item Slot">
      Slots enable advanced customization possibilities and provide you with more freedom in how you
      display the rating.
    </GlobalsIntro>
    <GlobalsCodePre :code="ItemSlot">
      <v-rating v-model="rating">
        <template #item="props">
          <v-icon
            v-bind="props"
            :size="25"
            :color="props.isFilled ? 'success' : 'secondary'"
            class="me-3"
            :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
          />
        </template>
      </v-rating>
    </GlobalsCodePre>
  </div>
</template>
