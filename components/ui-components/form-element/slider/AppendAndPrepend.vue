<script setup>
import { AppendAndPrepend } from "./__code";

const bpm = ref(40);
const min = 40;
const max = 218;
const isPlaying = ref(false);

const color = computed(() => {
  if (bpm.value < 100) return "primary";
  if (bpm.value < 125) return "success";
  if (bpm.value < 140) return "info";
  if (bpm.value < 175) return "warning";

  return "error";
});

const animationDuration = computed(() => {
  return `${60 / bpm.value}s`;
});

const decrement = () => {
  if (bpm.value > min) bpm.value -= 1;
};

const increment = () => {
  if (bpm.value < max) bpm.value += 1;
};
</script>

<template>
  <div id="append-and-prepend">
    <GlobalsIntro title="Append and prepend">
      Use slots such as <code>append</code> and <code>prepend</code> to easily customize the
      <code>v-slider</code> to fit any situation.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="AppendAndPrepend">
      <div class="d-flex justify-space-between ma-4">
        <div>
          <span class="text-h1 font-weight-bold" v-text="bpm" />
          <span class="subheading font-weight-light me-1">BPM</span>

          <v-fade-transition>
            <v-avatar
              v-if="isPlaying"
              :color="color"
              :style="{
                animationDuration,
              }"
              class="mb-1 v-avatar--metronome"
              size="12"
            />
          </v-fade-transition>
        </div>

        <div>
          <v-btn :color="color" icon elevation="0" @click="isPlaying = !isPlaying">
            <v-icon size="large" :icon="isPlaying ? 'tabler-pause' : 'tabler-play'" />
          </v-btn>
        </div>
      </div>

      <v-slider
        v-model="bpm"
        :color="color"
        :step="1"
        :min="min"
        :max="max"
        track-color="secondary"
      >
        <template #prepend>
          <v-btn
            size="small"
            variant="text"
            icon="tabler-minus"
            :color="color"
            @click="decrement"
          />
        </template>

        <template #append>
          <v-btn size="small" variant="text" icon="tabler-plus" :color="color" @click="increment" />
        </template>
      </v-slider>
    </GlobalsCodePre>
  </div>
</template>

<style lang="scss" scoped>
@keyframes metronome-example {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}

.v-avatar--metronome {
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-name: metronome-example;
}
</style>
