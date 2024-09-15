export const Basic = `<template>
  <v-footer>
  <v-row justify="center" no-gutters>
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
    </v-col>
  </v-row>
  </v-footer>
</template>`

export const Border = `<template>
  <v-footer border>
  <v-row justify="center" no-gutters>
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
    </v-col>
  </v-row>
  </v-footer>
</template>`

export const Elevation = `<template>
  <v-footer elevation="10">
  <v-row justify="center" no-gutters>
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
    </v-col>
  </v-row>
  </v-footer>
</template>`

export const Height = `<template>
  <v-footer height="100" color="error">
  <v-row justify="center" no-gutters>
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
    </v-col>
  </v-row>
  </v-footer>
</template>`

export const Rounded = `<template>
  <v-footer rounded color="primary">
  <v-row justify="center" no-gutters>
    <v-col class="text-center mt-4" cols="12">
      {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
    </v-col>
  </v-row>
  </v-footer>
</template>`

export const Company = `<script setup>
  const links = ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
</script>

<template>
  <v-footer color="background">
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" variant="text" class="mx-2" rounded="xl">
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>`

export const Primary = `<script setup>
  const icons = [
    'tabler-brand-facebook',
    'tabler-brand-twitter',
    'tabler-brand-linkedin',
    'tabler-brand-instagram'
  ]
</script>

<template>
  <v-footer class="text-center d-flex flex-column" color="primary">
    <div>
      <icon-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        size="large"
      />
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
      commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed
      at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et
      faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
      cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel
      ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Dash UI</strong></div>
  </v-footer>
</template>`

export const Secondary = `<script setup>
const icons = [
  'tabler-brand-facebook',
  'tabler-brand-twitter',
  'tabler-brand-linkedin',
  'tabler-brand-instagram'
]
</script>

<template>
  <v-footer class="d-flex flex-column">
    <div class="bg-grey-400 d-flex w-100 align-center pa-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <icon-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" />
    </div>

    <div class="px-4 py-2 bg-secondary text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>`
