export const Basic = `<template>
  <v-file-input label="File input" />
</template>`;

export const Density = `<template>
  <v-file-input label="File input" density="compact" />
</template>`;

export const Variant = `<template>
  <v-file-input label="Outlined" />
  <v-file-input label="Filled" variant="filled" />
  <v-file-input label="Solo" variant="solo" />
  <v-file-input label="Plain" variant="plain" />
  <v-file-input label="Underlined" variant="underlined" density="default" />
</template>`;

export const Accept = `<template>
  <v-file-input accept="image/*" label="File input" />
</template>`;

export const Chips = `<template>
  <v-file-input chips label="File input w/ chips" />
</template>`;

export const Counter = `<template>
  <v-file-input show-size counter multiple label="File input" />
</template>`;

export const Multiple = `<template>
  <v-file-input multiple label="File input" />
</template>`;

export const PrependIcon = `<template>
  <v-file-input label="File input" prepend-icon="tabler-camera" />
</template>`;

export const ShowSize = `<template>
  <v-file-input show-size label="File input" />
</template>`;

export const Validation = `<script setup>
  const rules = [
    (fileList) =>
      !fileList ||
      !fileList.length ||
      fileList[0].size < 1000000 ||
      'Avatar size should be less than 1 MB!'
  ]
</script>

<template>
  <v-file-input
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>`;

export const SelectionSlot = `<script setup>
  const files = ref([])
</script>

<template>
  <v-file-input
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
    >
    <template #selection="{ fileNames }">
      <template v-for="fileName in fileNames" :key="fileName">
        <VChip label size="small" variant="outlined" color="primary" class="me-2">
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </v-file-input>
</template>`;

export const Loading = `<script setup>
  const file = ref()
  const loading = ref(true)

  watch(file, () => {
    loading.value = !file.value[0]
  })
</script>

<template>
  <v-file-input v-model="file" :loading="loading" color="primary" label="File input" />
</template>`;
