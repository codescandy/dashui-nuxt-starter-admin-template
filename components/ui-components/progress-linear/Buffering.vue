<script setup>
import { Buffering } from "./__code";

const modelValue = ref(10);
const bufferValue = ref(20);
const interval = ref();

const startBuffer = () => {
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5;
    bufferValue.value += Math.random() * (15 - 5) + 6;
  }, 2000);
};

onMounted(startBuffer);
onBeforeUnmount(() => {
  clearInterval(interval.value);
});
watch(modelValue, () => {
  if (modelValue.value < 100) return false;
  modelValue.value = 0;
  bufferValue.value = 10;
  startBuffer();
});
</script>

<template>
  <div id="buffering">
    <GlobalsIntro title="Buffering">
      The primary value is controlled by <code>v-model</code>, whereas the buffer is controlled by
      the <code>buffer-value</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Buffering">
      <v-progress-linear
        v-model="modelValue"
        color="primary"
        height="8"
        :buffer-value="bufferValue"
      />
    </GlobalsCodePre>
  </div>
</template>
