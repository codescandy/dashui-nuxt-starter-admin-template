export const Basic = `<script setup>
  const radioGroup = ref(1)
</script>

<template>
  <v-radio-group v-model="radioGroup">
    <v-radio v-for="n in 2" :key="n" :label="Radio +n}" :value="n" />
  </v-radio-group>
</template>`;

export const Colors = `<script setup>
  const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
  const selectedRadio = ref('primary')
</script>

<template>
  <v-radio-group v-model="selectedRadio">
    <v-radio
      v-for="radio in colorsRadio"
      :key="radio"
      :label="radio"
      :color="radio.toLocaleLowerCase()"
      :value="radio.toLocaleLowerCase()"
    />
  </v-radio-group>
</template>`;

export const Density = `<script setup>
  const columnRadio = ref('radio-1')
  const inlineRadio = ref('radio-1')
</script>

<template>
  <v-radio-group v-model="columnRadio">
    <v-radio density="compact" label="Option 1" value="radio-1" />
    <v-radio density="compact" label="Option 2" value="radio-2" />
  </v-radio-group>

  <v-divider class="my-4" />

  <v-radio-group v-model="inlineRadio" inline>
    <v-radio density="compact" label="Option 1" value="radio-1" />
    <v-radio density="compact" label="Option 2" value="radio-2" />
  </v-radio-group>
</template>`;

export const Icon = `<script setup>
  const radioGroup = ref(1)
</script>

<template>
  <v-radio-group v-model="radioGroup" false-icon="tabler-bell-off" true-icon="tabler-bell">
    <v-radio v-for="n in 2" :key="n" :label="Radio +n}" :value="n" />
  </v-radio-group>
</template>`;

export const Inline = `<script setup>
  const columnRadio = ref('radio-1')
  const inlineRadio = ref('radio-1')
</script>

<template>
  <v-radio-group v-model="columnRadio">
    <v-radio label="Option 1" value="radio-1" />
    <v-radio label="Option 2" value="radio-2" />
  </v-radio-group>

  <v-divider class="my-4" />

  <v-radio-group v-model="inlineRadio" inline>
    <v-radio label="Option 1" value="radio-1" />
    <v-radio label="Option 2" value="radio-2" />
  </v-radio-group>
</template>`;

export const LabelSlot = `<script setup>
  const radios = ref('DuckDuckGo')
</script>

<template>
  <v-radio-group v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <v-radio value="Google">
      <template #label>
        <div>Of course it's <span class="text-success"> Google </span></div>
      </template>
    </v-radio>

    <v-radio value="DuckDuckGo">
      <template #label>
        <div>Definitely <span class="text-primary"> DuckDuckGo </span></div>
      </template>
    </v-radio>
  </v-radio-group>
</template>`;

export const Validation = `<script setup>
  const rules = [(value) => (value !== 3 ? true : 'Do not select the third one!')]
</script>

<template>
    <v-radio-group v-model="radioGroup" inline :rules="rules">
      <v-radio
        v-for="n in 3"
        :key="n"
        :error="radioGroup === 3"
        :label="Radio + n"
        :value="n"
      />
    </v-radio-group>
</template>`;
