export const Basic = `<script setup>
  const sliderValue = ref(30)
</script>

<template>
  <v-slider />
  <v-slider v-model="sliderValue" />
</template>`;

export const DisabledAndReadonly = `<template>
  <v-slider disabled label="Disabled" :model-value="30" />
  <v-slider readonly label="Readonly" :model-value="30" />
</template>`;

export const Colors = `<script setup>
  const sliderColorValue = ref(25)
  const sliderTrackColorValue = ref(75)
  const sliderThumbColorValue = ref(50)
</script>

<template>
  <div class="text-caption">color</div>
  <v-slider v-model="sliderColorValue" color="error" />

  <div class="text-caption">track-color</div>
  <v-slider v-model="sliderTrackColorValue" track-color="error" />

  <div class="text-caption">thumb-color</div>
  <v-slider v-model="sliderThumbColorValue" thumb-color="error" thumb-label="always" />
</template>`;

export const Icons = `<script setup>
  const mediaSlider = ref(0)
  const alarmSlider = ref(0)
  const zoomInOut = ref(10)
</script>

<template>
  <v-slider v-model="mediaSlider" prepend-icon="tabler-volume" />
  <v-slider v-model="alarmSlider" append-icon="tabler-alarm" />
  <v-slider v-model="zoomInOut" append-icon="tabler-minus" prepend-icon="tabler-plus" />
</template>`;

export const Step = `<script setup>
  const value = ref(0)
</script>

<template>
  <v-slider v-model="value" :min="0" :max="1" :step="0.2" thumb-label />
</template>`;

export const Validation = `<script setup>
  const value = ref(30)
  const rules = [(v) => v <= 40 || 'Only 40 in stock']
</script>

<template>
  <v-slider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>`;

export const MinAndMax = `<script setup>
  const min = ref(-50)
  const max = ref(90)
  const slider = ref(40)
</script>

<template>
  <v-slider v-model="slider" :max="max" :min="min" :step="1" />

  <global-text-field
    v-model="slider"
    type="number"
    placeholder="10"
    style="max-inline-size: 5rem"
  />
</template>`;

export const Size = `<template>
  <v-slider :step="10" show-ticks :thumb-size="18" :tick-size="3" :track-size="2" />
</template>`;

export const Thumb = `<script setup>
  const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']

  const slider = ref(45)
</script>

<template>
  <div class="text-caption">Show thumb when using slider</div>
  <v-slider v-model="slider" thumb-label />
  <div class="text-caption">Always show thumb label</div>
  <v-slider v-model="slider" thumb-label="always" />
  <div class="text-caption">Custom thumb size</div>
  <v-slider v-model="slider" :thumb-size="30" thumb-label="always" />
  <div class="text-caption">Custom thumb label</div>
  <v-slider v-model="slider" thumb-label="always">
    <template #thumb-label="{ modelValue }">
      {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
    </template>
  </v-slider>
</template>`;

export const Ticks = `<script setup>
  const value = ref(0)
  const fruits = ref(1)

  const ticksLabels = {
    0: 'Figs',
    1: 'Lemon',
    2: 'Pear',
    3: 'Apple'
  }
</script>

<template>
  <div class="text-caption">Show ticks when using slider</div>
  <v-slider v-model="value" :step="10" show-ticks />
  <div class="text-caption">Always show ticks</div>
  <v-slider v-model="value" :step="10" show-ticks="always" />
  <div class="text-caption">Tick size</div>
  <v-slider v-model="value" :step="10" show-ticks="always" tick-size="4" />
  <div class="text-caption">Tick labels</div>
  <v-slider
    v-model="fruits"
    :ticks="ticksLabels"
    :max="3"
    step="1"
    show-ticks="always"
    tick-size="4"
  />
</template>`;

export const Vertical = `<script setup>
  const value = ref(10)
</script>

<template>
  <v-slider v-model="value" direction="vertical" />
</template>`;

export const AppendTextField = `<script setup>
  const redColorValue = ref(161)
  const greenColorValue = ref(105)
  const blueColorValue = ref(225)
</script>

<template>
  <v-responsive
    :style="{ background: rgb(+redColorValue+,+greenColorValue+,+blueColorValue+)}"
    height="150px"
  />

  <v-row class="mt-5">
    <v-col cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <v-slider v-model="redColorValue" :max="255" :step="1" prepend-icon="tabler-letter-r" />

        <v-text-field
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem"
        />
      </div>
    </v-col>

    <v-col cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <v-slider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <v-text-field
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem"
        />
      </div>
    </v-col>

    <v-col cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <v-slider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <v-text-field
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem"
        />
      </div>
    </v-col>
  </v-row>
</template>`;

export const AppendAndPrepend = `<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100) return 'primary'
  if (bpm.value < 125) return 'success'
  if (bpm.value < 140) return 'info'
  if (bpm.value < 175) return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return 60 / bpm.value+'s'
})

const decrement = () => {
  if (bpm.value > min) bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max) bpm.value += 1
}
</script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span class="text-h1 font-weight-bold" v-text="bpm" />
      <span class="subheading font-weight-light me-1">BPM</span>

      <v-fade-transition>
        <v-avatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration
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
`;
