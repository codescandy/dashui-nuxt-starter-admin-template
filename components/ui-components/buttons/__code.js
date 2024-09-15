export const Colors = `<template>
  <v-btn color="primary"> Primary </v-btn>
  <v-btn color="secondary"> Secondary </v-btn>
  <v-btn color="success"> Success </v-btn>
  <v-btn color="error"> Error </v-btn>
  <v-btn color="warning"> Warning </v-btn>
  <v-btn color="info"> Info </v-btn>
</template>`;

export const Outlined = `<template>
  <v-btn color="primary" variant="outlined"> Primary </v-btn>
  <v-btn color="secondary" variant="outlined"> Secondary </v-btn>
  <v-btn color="success" variant="outlined"> Success </v-btn>
  <v-btn color="error" variant="outlined"> Error </v-btn>
  <v-btn color="warning" variant="outlined"> Warning </v-btn>
</template>`;

export const Elevated = `<template>
  <v-btn color="primary" variant="elevated"> Primary </v-btn>
  <v-btn color="secondary" variant="elevated"> Secondary </v-btn>
  <v-btn color="success" variant="elevated"> Success </v-btn>
  <v-btn color="error" variant="elevated"> Error </v-btn>
  <v-btn color="warning" variant="elevated"> Warning </v-btn>
</template>`;

export const Rounded = `<template>
  <v-btn color="primary" variant="elevated"> Normal Button </v-btn>
  <v-btn color="secondary" rounded="lg"> Rounded Button </v-btn>
  <v-btn color="success" rounded="0"> Tile Button </v-btn>
  <v-btn color="error" rounded="pill"> Pill Button </v-btn>
</template>`;

export const Text = `<template>
  <v-btn color="primary" variant="text"> Primary </v-btn>
  <v-btn color="secondary" variant="text"> Secondary </v-btn>
  <v-btn color="success" variant="text"> Success </v-btn>
  <v-btn color="error" variant="text"> Error </v-btn>
  <v-btn color="warning" variant="text"> Warning </v-btn>
</template>`;

export const Plain = `<template>
  <v-btn color="primary" variant="plain"> Primary </v-btn>
  <v-btn color="secondary" variant="plain"> Secondary </v-btn>
  <v-btn color="success" variant="plain"> Success </v-btn>
  <v-btn color="error" variant="plain"> Error </v-btn>
  <v-btn color="warning" variant="plain"> Warning </v-btn>
</template>`;

export const Tonal = `<template>
  <v-btn color="primary" variant="tonal"> Primary </v-btn>
  <v-btn color="secondary" variant="tonal"> Secondary </v-btn>
  <v-btn color="success" variant="tonal"> Success </v-btn>
  <v-btn color="error" variant="tonal"> Error </v-btn>
  <v-btn color="warning" variant="tonal"> Warning </v-btn>
  <v-btn color="info" variant="tonal"> Info </v-btn>
</template>`;

export const Icon = `<template>
  <v-btn>
    Accept
    <v-icon end icon="tabler-checkbox" />
  </v-btn>

  <v-btn color="secondary">
    <v-icon start icon="tabler-circle-minus" />Cancel
  </v-btn>

  <v-btn color="success">
    Upload
    <v-icon end icon="tabler-cloud-upload" />
  </v-btn>

  <v-btn color="info">
    <v-icon start icon="tabler-arrow-left" />
    Back
  </v-btn>

  <v-btn color="warning">
    <v-icon icon="tabler-settings" />
  </v-btn>

  <v-btn color="error">
    <v-icon icon="tabler-circle-off" />
  </v-btn>
</template>`;

export const IconOnly = `<template>
  <v-btn size="38">
    <v-icon icon="tabler-briefcase" size="22" />
  </v-btn>

  <v-btn size="38" color="secondary">
    <v-icon icon="tabler-user-plus" size="22" />
  </v-btn>

  <v-btn size="38" color="success">
    <v-icon icon="tabler-search" size="22" />
  </v-btn>

  <v-btn size="38" color="info">
    <v-icon icon="tabler-thumb-up" size="22" />
  </v-btn>

  <v-btn size="38" color="warning">
    <v-icon icon="tabler-star" size="22" />
  </v-btn>

  <v-btn size="38" color="error">
    <v-icon icon="tabler-heart" size="22" />
  </v-btn>
</template>`;

export const Size = `<template>
  <v-btn> size="x-large"> Extra Large Button </v-btn>
  <v-btn> size="large"> Large Button </v-btn>
  <v-btn> Default Button </v-btn>
  <v-btn> size="sm"> Small Button </v-btn>
  <v-btn> size="x-small"> Extra Small Button </v-btn>
</template>`;

export const Block = `<template>
  <v-btn block> Block Button </v-btn>
  <v-btn rounded="0" block> Block Button </v-btn>
</template>`;

export const Loader = `<script setup>
  const loadings = ref([])

  const load = (i) => {
    loadings.value[i] = true
    setTimeout(() => {
      loadings.value[i] = false
    }, 3000)
  }

</script>

<template>
  <v-btn
    :loading="loadings[0]"
    :disabled="loadings[0]"
    color="primary"
    @click="load(0)"
  >
    Accept Terms
  </v-btn>

  <v-btn
    :loading="loadings[1]"
    :disabled="loadings[1]"
    color="secondary"
    @click="load(1)"
  >
    Upload
    <v-icon end icon="tabler-cloud-upload" />
  </v-btn>

  <v-btn
    :loading="loadings[2]"
    :disabled="loadings[2]"
    color="success"
    @click="load(2)"
  >
    Loader slot
    <template #loader>
      <span>Loading...</span>
    </template>
  </v-btn>

  <v-btn
    :loading="loadings[3]"
    :disabled="loadings[3]"
    color="info"
    @click="load(3)"
  >
    Icon Loader
    <template #loader>
      <span class="custom-loader">
        <v-icon icon="tabler-refresh" />
      </span>
    </template>
  </v-btn>

  <v-btn
    :loading="loadings[4]"
    :disabled="loadings[4]"
    color="warning"
    icon="tabler-cloud-upload"
    @click="load(4)"
  />
</template>


<style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0)
    }

    to {
      transform: rotate(360deg)
    }
  }
</style>
`;

export const Router = `<template>
  <v-btn to="/coming-soon"> String Literal </v-btn>

  <v-btn color="warning" :to="{ path: '/coming-soon' }">
    Object Path
  </v-btn>

  <v-btn color="success" :to="{ name: 'coming-soon' }">
    Named Router
  </v-btn>

  <v-btn
    color="secondary"
    :to="{
      path: '/coming-soon',
      query: { plan: 'private' }
    }"
  >
    With Query
  </v-btn>
</template>`;

export const Link = `<template>
  <v-btn href="https://dashui.codescandy.com/">
    String Literal
  </v-btn>

  <v-btn
    href="https://dashui.codescandy.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Open New Tab
  </v-btn>
</template>`;

export const ToggleButton = `<script setup>
  const toggleExclusive = ref(0)
</script>

<template>
  <v-btn-toggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <v-btn> Left </v-btn>
    <v-btn> Center </v-btn>
    <v-btn> Right </v-btn>
    <v-btn> Justified </v-btn>
  </v-btn-toggle>
</template>`;
