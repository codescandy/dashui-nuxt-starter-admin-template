<script setup>
import { Rotate } from "./__code";

const interval = ref();
const progressValue = ref(0);

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100) return (progressValue.value = 0);
    progressValue.value += 10;
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <div id="rotate">
    <GlobalsIntro title="Rotate">
      The <code>rotate</code> prop gives you the ability to customize the
      <code>v-progress-circular</code> 's origin.
    </GlobalsIntro>
    <GlobalsCodePre :code="Rotate">
      <v-progress-circular
        :rotate="360"
        :size="70"
        :width="6"
        :model-value="progressValue"
        color="primary"
      >
        {{ progressValue }}
      </v-progress-circular>
      <v-progress-circular
        :rotate="90"
        :size="70"
        :width="6"
        :model-value="progressValue"
        color="primary"
      >
        {{ progressValue }}
      </v-progress-circular>

      <v-progress-circular
        :rotate="170"
        :size="70"
        :width="6"
        :model-value="progressValue"
        color="primary"
      >
        {{ progressValue }}
      </v-progress-circular>

      <v-progress-circular
        :rotate="-90"
        :size="70"
        :width="6"
        :model-value="progressValue"
        color="primary"
      >
        {{ progressValue }}
      </v-progress-circular>
    </GlobalsCodePre>
  </div>
</template>
