<script setup>
import { Validation } from "./__code";
const rules = [
  (fileList) =>
    !fileList ||
    !fileList.length ||
    fileList[0].size < 1000000 ||
    "Avatar size should be less than 1 MB!",
];
</script>

<template>
  <div id="validation">
    <GlobalsIntro title="Validation">
      You can use the <code>rules</code> prop to create your own custom validation parameters.
    </GlobalsIntro>

    <GlobalsCodePre :code="Validation">
      <v-file-input
        :rules="rules"
        label="Avatar"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon="tabler-camera"
      />
    </GlobalsCodePre>
  </div>
</template>
