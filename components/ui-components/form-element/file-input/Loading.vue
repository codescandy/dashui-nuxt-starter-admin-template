<script setup>
import { Loading } from "./__code";

const file = ref();
const loading = ref(true);

watch(file, () => {
  loading.value = !file.value[0];
});
</script>

<template>
  <div id="loading">
    <GlobalsIntro title="Loading">
      Use <code>loading</code> prop to displays linear progress bar.
    </GlobalsIntro>

    <GlobalsCodePre :code="Loading">
      <v-file-input v-model="file" :loading="loading" color="primary" label="File input" />
    </GlobalsCodePre>
  </div>
</template>
