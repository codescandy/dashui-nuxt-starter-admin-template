export const Basic = `<script setup>
import { Basic } from './__code'

const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <global-combobox v-model="selectedItem" :items="items" placeholder="deployment" />
</template>`;

export const Density = `<script setup>
  const select = ref(['Vuetify', 'Programming'])
  const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <global-combobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>`;

export const Variant = `<script setup>
  const selectedItem = ref(['Programming'])
  const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <global-combobox
    v-model="selectedItem"
    :items="items"
    multiple
    placeholder="deployment"
    variant="solo"
    label="solo"
  />

  <global-combobox
    v-model="selectedItem"
    multiple
    :items="items"
    placeholder="deployment"
    variant="outlined"
    label="Outlined"
  />

  <global-combobox
    v-model="selectedItem"
    multiple
    :items="items"
    placeholder="deployment"
    variant="underlined"
    label="Underlined"
  />

  <global-combobox
    v-model="selectedItem"
    multiple
    :items="items"
    placeholder="deployment"
    variant="filled"
    label="Filled"
  />

  <global-combobox
    v-model="selectedItem"
    multiple
    :items="items"
    variant="plain"
    placeholder="deployment"
    label="Plain"
  />
</template>`;

export const NoDataWithChips = `<script setup>
  const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
  const selectedList = ref(['Vuetify'])
  const search = ref(null)

  watch(selectedList, (value) => {
    if (value.length > 5) nextTick(() => selectedList.value.pop())
  })
</script>

<template>
  <global-combobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <v-list-item>
        <v-list-item-title>
          No results matching "<strong>{{ search }}</strong
          >". Press <kbd>enter</kbd> to create a new one
        </v-list-item-title>
      </v-list-item>
    </template>
  </global-combobox>
</template>`;

export const Clearable = `<script setup>
  const select = ref(['Vuetify', 'Programming'])
  const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <global-combobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>`;
