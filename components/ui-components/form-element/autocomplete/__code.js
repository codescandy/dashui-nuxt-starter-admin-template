export const Basic = `<script setup>
  const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
</script>

<template>
  <global-autocomplete label="States" :items="items" placeholder="Select State" />
</template>`;

export const Density = `<script setup>
  const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
  const select = ref('Florida')
</script>

<template>
  <global-autocomplete
    v-model="select"
    label="States"
    :items="items"
    density="compact"
    placeholder="Select State"
  />
</template>`;

export const Variant = `<script setup>
  const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
</script>

<template>
  <global-autocomplete variant="solo" label="solo" :items="items" placeholder="Select State" />
  <global-autocomplete
    variant="outlined"
    label="outlined"
    placeholder="Select State"
    :items="items"
  />

  <global-autocomplete
    variant="underlined"
    label="underlined"
    placeholder="Select State"
    :items="items"
  />

  <global-autocomplete
    variant="filled"
    label="filled"
    placeholder="Select State"
    :items="items"
  />

  <global-autocomplete
    variant="plain"
    label="plain"
    placeholder="Select State"
    :items="items"
  />
</template>`;

export const Multiple = `<script setup>
  const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
</script>

<template>
  <global-autocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>`;

export const Clearable = `<script setup>
  const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
</script>

<template>
  <global-autocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>`;

export const Chips = `<script setup>
  const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
</script>

<template>
  <global-autocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>`;

export const CustomFilter = `<script setup>
  const states = [
    {
      name: 'Florida',
      abbr: 'FL',
      id: 1
    },
    {
      name: 'Georgia',
      abbr: 'GA',
      id: 2
    },
    {
      name: 'Nebraska',
      abbr: 'NE',
      id: 3
    },
    {
      name: 'California',
      abbr: 'CA',
      id: 4
    },
    {
      name: 'New York',
      abbr: 'NY',
      id: 5
    }
  ]

  function customFilter(item, queryText, itemText) {
    const textOne = itemText.title.toLowerCase()
    const textTwo = itemText.value.toLowerCase()
    const searchText = queryText.toLocaleLowerCase()

    return textOne.includes(searchText) || textTwo.includes(searchText)
  }
</script>

<template>
  <global-autocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>`;

export const AsyncItems = `<script setup>
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
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ]

  const items = ref(states)
  const loading = ref(false)
  const search = ref()
  const select = ref(null)

  const querySelections = (query) => {
    loading.value = true

    // Simulated ajax query
    setTimeout(() => {
      items.value = states.filter((state) =>
        (state || '').toLowerCase().includes((query || '').toLowerCase())
      )
      loading.value = false
    }, 500)
  }

  watch(search, (query) => {
    query && query !== select.value && querySelections(query)
  })
</script>

<template>
  <global-autocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>`;

export const Validation = `<script setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v) => !!v.length || 'Select at least one option.']
</script>

<template>
  <global-autocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>`;
