export const Basic = `<script setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

const items = [
  {
    title: 'Option 1',
    value: 'Option 1'
  },
  {
    title: 'Option 2',
    value: 'Option 2'
  },
  {
    title: 'Option 3',
    value: 'Option 3'
  }
]
</script>

<template>
  <v-menu v-for="menu in menusVariant" :key="menu">
    <template #activator="{ props }">
      <v-btn :color="menu" v-bind="props">
        {{ menu }}
      </v-btn>
    </template>

    <v-list :items="items" />
  </v-menu>
</template>`;

export const CustomTransitions = `<script setup>
  const items = [
    {
      title: 'Option 1',
      value: 'Option 1'
    },
    {
      title: 'Option 2',
      value: 'Option 2'
    },
    {
      title: 'Option 3',
      value: 'Option 3'
    }
  ]
</script>

<template>
  <v-menu transition="scale-transition">
    <template #activator="{ props }">
      <v-btn v-bind="props"> Scale Transition </v-btn>
    </template>

    <v-list :items="items" />
  </v-menu>

  <v-menu transition="slide-x-transition">
    <template #activator="{ props }">
      <v-btn v-bind="props"> Slide X Transition </v-btn>
    </template>

    <v-list :items="items" />
  </v-menu>

  <v-menu transition="slide-y-transition">
    <template #activator="{ props }">
      <v-btn v-bind="props"> Slide Y Transition </v-btn>
    </template>

    <v-list :items="items" />
  </v-menu>
</template>`;

export const Location = `<script setup>
  const items = [
    {
      title: 'Option 1',
      value: 'Option 1'
    },
    {
      title: 'Option 2',
      value: 'Option 2'
    },
    {
      title: 'Option 3',
      value: 'Option 3'
    }
  ]
</script>

<template>
  <v-menu transition="scale-transition">
    <template #activator="{ props }">
      <v-btn v-bind="props"> Scale Transition </v-btn>
    </template>

    <v-list :items="items" />
    </v-menu>

    <v-menu transition="slide-x-transition">
    <template #activator="{ props }">
      <v-btn v-bind="props"> Slide X Transition </v-btn>
    </template>

    <v-list :items="items" />
    </v-menu>

    <v-menu transition="slide-y-transition">
    <template #activator="{ props }">
      <v-btn v-bind="props"> Slide Y Transition </v-btn>
    </template>

    <v-list :items="items" />
  </v-menu>
</template>`;

export const OpenOnHover = `<script setup>
  const items = [
    {
      title: 'Option 1',
      value: 'Option 1'
    },
    {
      title: 'Option 2',
      value: 'Option 2'
    },
    {
      title: 'Option 3',
      value: 'Option 3'
    }
  ]
</script>

<template>
  <v-menu open-on-hover>
    <template #activator="{ props }">
      <v-btn v-bind="props"> On hover </v-btn>
    </template>

    <v-list :items="items" />
  </v-menu>
</template>`;

export const Popover = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'

  const menu = ref(false)
</script>

<template>
  <v-menu v-model="menu" location="top">
    <template #activator="{ props }">
      <v-btn v-bind="props"> Menu as Popover </v-btn>
    </template>

    <v-card max-width="300">
      <v-list>
        <v-list-item
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </v-list>

      <VDivider />

      <v-card-text>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert
        candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </v-card-text>

      <v-card-actions>
        <icon-btn icon="tabler-heart" />
        <icon-btn icon="tabler-bookmark" />
        <icon-btn icon="tabler-thumb-down" />
      </v-card-actions>
    </v-card>
  </v-menu>
</template>`;

export const ActivatorAndTooltip = `<script setup>
  const items = [
    {
      title: 'Option 1',
      value: 'Option 1',
    },
    {
      title: 'Option 2',
      value: 'Option 2',
    },
    {
      title: 'Option 3',
      value: 'Option 3',
    },
  ]
</script>

<template>
  <v-menu location="top">
    <template #activator="{ props: menuProps }">
      <v-tooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <v-btn v-bind="mergeProps(menuProps, tooltipProps)"> Dropdown w/ Tooltip </v-btn>
        </template>
        <span>I am a Tooltip</span>
      </v-tooltip>
    </template>

    <v-list :items="items" />
  </v-menu>
</template>
`;
