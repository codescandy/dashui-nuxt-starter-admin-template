export const Basic = `<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>

<template>
  <global-select :items="items" label="Standard" placeholder="Select Item" />
</template>`;

export const Density = `<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>

<template>
  <global-select :items="items" label="Density" density="compact" placeholder="Select Item" />
</template>`;

export const Variant = `<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>

<template>
  <global-select :items="items" label="Outlined" placeholder="Select Item" />
  <global-select :items="items" label="Filled" placeholder="Select Item" variant="filled" />
  <global-select :items="items" label="Solo" placeholder="Select Item" variant="solo" />
  <global-select
    :items="items"
    label="Underlined"
    variant="underlined"
    placeholder="Select Item"
  />
  <global-select :items="items" label="Plain" placeholder="Select Item" variant="plain" />
</template>`;

export const CustomTextAndValue = `<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL'
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL'
  },
  {
    state: 'Georgia',
    abbr: 'GA'
  },
  {
    state: 'Nebraska',
    abbr: 'NE'
  },
  {
    state: 'California',
    abbr: 'CA'
  },
  {
    state: 'New York',
    abbr: 'NY'
  }
]
</script>

<template>
  <global-select
    v-model="selectedOption"
    :hint="selectedOption.state +,+ selectedOption.abbr"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>`;

export const Icons = `<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam'
]
</script>

<template>
  <global-select
    v-model="selectedOption1"
    :items="states"
    label="Select"
    prepend-icon="tabler-map"
    single-line
    variant="filled"
    placeholder="Select State"
  />

  <global-select
    v-model="selectedOption2"
    :items="states"
    append-icon="tabler-map"
    label="Select"
    single-line
    variant="filled"
    placeholder="Select State"
  />
</template>`;

export const Chips = `<script setup>
  const items = ['foo', 'bar', 'fizz', 'buzz']

  const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
</script>

<template>
  <global-select
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>`;

export const MenuProps = `<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>

<template>
  <global-select
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>`;

export const Multiple = `<script setup>
  const selectedOptions = ref(['Alabama'])

  const states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam'
  ]
</script>

<template>
  <global-select
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>`;
