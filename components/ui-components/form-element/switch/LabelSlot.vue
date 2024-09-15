<script setup>
import { LabelSlot } from "./__code";

const switchMe = ref(false);
</script>

<template>
  <div id="label-slot">
    <GlobalsIntro title="Label slot">
      Switch labels can be defined in label slot - that will allow to use HTML content.
    </GlobalsIntro>
    <GlobalsCodePre :code="LabelSlot" flex margin-l>
      <v-switch v-model="switchMe">
        <template #label>
          Turn on the progress: <v-progress-circular :indeterminate="switchMe" class="ms-2" />
        </template>
      </v-switch>
    </GlobalsCodePre>
  </div>
</template>
