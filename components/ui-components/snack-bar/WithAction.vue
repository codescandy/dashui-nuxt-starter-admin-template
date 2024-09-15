<script setup>
import { WithAction } from "./__code";
const isSnackbarVisibility = ref(false);
</script>

<template>
  <div id="with-action">
    <GlobalsIntro title="With Action">
      Use <code>actions</code> slot to add action button. A <code>v-snackbar</code> in its simplest
      form displays a temporary and closable notification to the user.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="WithAction">
      <v-btn @click="isSnackbarVisibility = true"> Open Snackbar </v-btn>

      <v-snackbar v-model="isSnackbarVisibility">
        Hello, I'm a snackbar with actions.

        <template #actions>
          <v-btn color="error" @click="isSnackbarVisibility = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </GlobalsCodePre>
  </div>
</template>
