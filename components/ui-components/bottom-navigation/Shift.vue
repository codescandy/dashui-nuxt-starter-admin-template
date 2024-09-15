<script setup>
import { Shift } from "./__code";
const value = ref(1);

const color = computed(() => {
  switch (value.value) {
    case 0:
      return "primary";
    case 1:
      return "warning";
    case 2:
      return "info";
    case 3:
      return "error";
    default:
      return "success";
  }
});
</script>

<template>
  <div id="shift">
    <GlobalsIntro title="Shift">
      The <code>shift</code> prop hides button text when not active. This provides an alternative
      visual style to the <code>v-bottom-navigation</code> component.
    </GlobalsIntro>
    <GlobalsCodePre :code="Shift">
      <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
          <v-btn>
            <v-icon>tabler-video</v-icon>

            <span>Video</span>
          </v-btn>

          <v-btn>
            <v-icon>tabler-music</v-icon>

            <span>Music</span>
          </v-btn>

          <v-btn>
            <v-icon>tabler-settings-filled</v-icon>

            <span>Setting</span>
          </v-btn>
          <v-btn>
            <v-icon>tabler-shopping-cart</v-icon>

            <span>Cart</span>
          </v-btn>
        </v-bottom-navigation>
      </v-layout>
    </GlobalsCodePre>
  </div>
</template>
