<script setup>
import { Vertical } from "./__code";
const isSnackbarVisible = ref(false);
</script>

<template>
  <div id="vertical">
    <GlobalsIntro title="Vertical">
      The <code>vertical</code> property allows you to stack the content of your
      <code>v-snackbar</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Vertical">
      <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

      <v-snackbar v-model="isSnackbarVisible" vertical>
        Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet
        roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

        <template #actions>
          <v-btn color="success" @click="isSnackbarVisible = false"> Undo </v-btn>

          <v-btn color="error" @click="isSnackbarVisible = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </GlobalsCodePre>
  </div>
</template>
