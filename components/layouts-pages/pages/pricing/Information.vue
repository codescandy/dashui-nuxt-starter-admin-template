<script setup>
const faq = [
  {
    title: 'Create and Edit Projects',
    description:
      'Donec posuere felis sit amet felis max imus roin consectetur quis leo id eleifuet, sapien quis fringilla finibus. ',
    icon: 'tabler-edit'
  },

  {
    title: 'Search and Filter',
    description:
      'Vestibulum in neque augue. Vivamus sed tempor mi. Integer dolor urna, dictum a arcu vitae, efficitur semper lorem. ',
    icon: 'tabler-filter'
  },
  {
    title: 'Real Time Updates',
    description:
      'Maecenas nec mauris dui. Sed ut mi a nibh rhoncus blandit. Cras accumsan, eros in malesuada convallis. ',
    icon: 'tabler-rotate-clockwise'
  },
  {
    title: 'Meta Information ',
    description:
      'Aenean justo lorem, semper non lectus quis, porta semper enim. Integer posuere lorem eu neque pellentesque. ',
    icon: 'tabler-tag'
  },
  {
    title: 'Pre rendered Results ',
    description:
      'Donec cursus libero non nibh consectetur sodales tincidunt vitae turpis. Duis feugiat at lorem id iaculis. ',
    icon: 'tabler-file-text'
  },
  {
    title: 'Simple Analytics ',
    description:
      'Nulla imperdiet sem quis ipsum condi mentum po ris sit amet libero et turpis vestibulum faucibus at nec lacus. ',
    icon: 'tabler-trending-up'
  }
]
</script>
<template>
  <v-row>
    <v-col cols="12">
      <div class="mb-14">
        <h2 class="text-h2">Everything you need to build efficiently</h2>
        <p class="text-body-1">
          Start building your app using our tools, be efficient, spend less time with details more
          time with your business.
        </p>
      </div>
    </v-col>
    <v-col cols="12" sm="6" lg="4" v-for="item in faq" :key="item.title">
      <div class="size-12 rounded bg-primary d-flex align-center justify-center mb-5">
        <v-icon :icon="item.icon" size="30" />
      </div>
      <h4 class="text-h4">{{ item.title }}</h4>
      <p class="text-body-1">
        {{ item.description }}
      </p>
    </v-col>
  </v-row>
</template>
