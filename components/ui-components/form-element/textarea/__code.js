export const Basic = `<template>
  <global-textarea label="Default" placeholder="Placeholder Text" />
</template>`;

export const AutoGrow = `<script setup>
  const textareaValue = ref(
    'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.'
  )
</script>

<template>
  <global-textarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>`;

export const Variant = `<template>
  <global-textarea label="Default" rows="2" placeholder="Placeholder Text" />
  <global-textarea label="Solo" placeholder="Placeholder Text" rows="2" variant="solo" />
  <global-textarea label="Filled" rows="2" placeholder="Placeholder Text" variant="filled" />
  <global-textarea
    label="Outlined"
    rows="2"
    placeholder="Placeholder Text"
    variant="outlined"
  />
  <global-textarea
    label="Underlined"
    rows="2"
    placeholder="Placeholder Text"
    variant="underlined"
  />
  <global-textarea label="Plain" rows="2" placeholder="Placeholder Text" variant="plain" />
</template>`;

export const States = `<template>
  <global-textarea
    disabled
    label="Disabled"
    hint="Hint text"
    placeholder="Placeholder Text"
    rows="2"
  />

  <global-textarea
    readonly
    rows="2"
    label="Readonly"
    placeholder="Placeholder Text"
    hint="Hint text"
  />
</template>`;

export const BrowserAutocomplete = `<template>
  <global-textarea autocomplete="email" label="Email" placeholder="johndoe@email.com" />
</template>`;

export const Clearable = `<script setup>
  const textareaValue = ref('This is clearable text.')
</script>

<template>
  <global-textarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>`;

export const Counter = `<script setup>
  const textareaValue = ref('Hello!')
</script>

<template>
  <global-textarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>`;

export const Icons = `<template>
  <global-textarea
    label="prepend-icon"
    rows="1"
    placeholder="Placeholder Text"
    prepend-icon="tabler-message-2"
  />

  <global-textarea
    append-icon="tabler-message-2"
    placeholder="Placeholder Text"
    label="append-icon"
    rows="1"
  />

  <global-textarea
    prepend-inner-icon="tabler-message-2"
    label="prepend-inner-icon"
    placeholder="Placeholder Text"
    rows="1"
  />

  <global-textarea
    append-inner-icon="tabler-message-2"
    label="append-inner-icon"
    placeholder="Placeholder Text"
    rows="1"
  />
</template>`;

export const Rows = `<template>
  <global-textarea
    label="One row"
    auto-grow
    rows="1"
    row-height="15"
    placeholder="Placeholder Text"
  />

  <global-textarea
    auto-grow
    label="Two rows"
    rows="2"
    placeholder="Placeholder Text"
    row-height="20"
  />

  <global-textarea
    label="Three rows"
    auto-grow
    rows="3"
    placeholder="Placeholder Text"
    row-height="25"
  />

  <global-textarea
    auto-grow
    label="Four rows"
    placeholder="Placeholder Text"
    rows="4"
    row-height="30"
  />
</template>`;

export const NoResize = `<script setup>
  const value = ref(
    'Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.'
  )
</script>

<template>
  <global-textarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>`;

export const Validation = `<script setup>
  const rules = [(v) => v.length <= 25 || 'Max 25 characters']

  const textareaValue = ref('Hello!')
</script>

<template>
  <global-textarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>`;
