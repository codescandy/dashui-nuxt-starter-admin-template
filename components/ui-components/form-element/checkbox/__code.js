export const Basic = `<script setup>

const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
</script>

<template>
  <v-checkbox v-model="checkboxOne" :label="capitalizedLabel(checkboxOne)" />
  <v-checkbox v-model="checkboxTwo" :label="capitalizedLabel(checkboxTwo)" />
</template>`;

export const Density = `<script setup>

const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
</script>

<template>
  <v-checkbox
    v-model="checkboxOne"
    density="comfortable"
    :label="capitalizedLabel(checkboxOne)"
  />
  <v-checkbox
    v-model="checkboxTwo"
    density="comfortable"
    :label="capitalizedLabel(checkboxTwo)"
  />
</template>`;

export const Colors = `<script setup>

  const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])

  const selectedCheckbox = ref([])
</script>

<template>
  <v-checkbox
    v-for="color in colorCheckbox"
    :key="color"
    v-model="selectedCheckbox"
    :label="color"
    :color="color.toLowerCase()"
    :value="color"
  />
</template>`;

export const ModelAsArray = `<script setup>

const selected = ref(['John'])
</script>

<template>
  <div class="d-flex">
    <v-checkbox v-model="selected" label="John" value="John" />
    <v-checkbox v-model="selected" label="Jacob" color="success" value="Jacob" />
    <v-checkbox v-model="selected" label="Johnson" color="info" value="Johnson" />
  </div>

  <div class="mt-3">
    {{ selected }}
  </div>
</template>`;

export const Icon = `<script setup>

  const toggleCheckboxOne = ref(true)
  const toggleCheckboxTwo = ref(true)
  const toggleCheckboxThree = ref(true)

  const capitalizedLabel = (label) => {
    const convertLabelText = label.toString()

    return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
  }
</script>

<template>
  <v-checkbox
    v-model="toggleCheckboxOne"
    :label="capitalizedLabel(toggleCheckboxOne)"
    true-icon="tabler-check"
    false-icon="tabler-x"
  />

  <v-checkbox
    v-model="toggleCheckboxTwo"
    :label="capitalizedLabel(toggleCheckboxTwo)"
    true-icon="tabler-alarm"
    false-icon="tabler-alarm"
    color="success"
  />

  <v-checkbox
    v-model="toggleCheckboxThree"
    :label="capitalizedLabel(toggleCheckboxThree)"
    true-icon="tabler-check"
    false-icon="tabler-circle-x"
    color="error"
  />
</template>`;

export const CheckboxValue = `<script setup>

  const checkbox = ref(1)
  const checkboxString = ref('Show')
</script>

<template>
  <v-checkbox
    v-model="checkbox"
    :true-value="1"
    :false-value="0"
    :label="checkbox.toString()"
   />

  <v-checkbox
    v-model="checkboxString"
    true-value="Show"
    false-value="Hide"
    color="success"
    :label="checkboxString.toString()"
  />
</template>`;

export const States = `<script setup>

  const toggleCheckbox = ref(true)
  const toggleIndeterminateCheckbox = ref(true)
  const disabledCheckbox = ref(true)
  const toggleOffCheckbox = ref(false)
</script>

<template>
  <v-checkbox v-model="toggleCheckbox" label="On" />

  <v-checkbox v-model="toggleOffCheckbox" label="Off" />

  <v-checkbox
    v-model:indeterminate="toggleIndeterminateCheckbox"
    v-model="toggleIndeterminateCheckbox"
    label="Indeterminate"
  />

  <v-checkbox :model-value="disabledCheckbox" disabled label="On disabled" />

  <v-checkbox disabled label="Off disabled" />
</template>`;

export const LabelSlot = `<script setup>

  const checkbox = ref(false)
</script>

<template>
  <v-checkbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </v-tooltip>
        is awesome
      </div>
    </template>
  </v-checkbox>
</template>`;

export const InlineTextField = `<script setup>
  const includeFiles = ref(true)
  const isInputEnabled = ref(false)
</script>

<template>
  <v-row>
    <v-col sm="1" cols="2" class="d-flex align-end">
      <v-checkbox v-model="includeFiles" />
    </v-col>

    <v-col sm="11" cols="10">
      <global-text-field label="Include files" placeholder="Placeholder Text" />
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="2" sm="1" class="d-flex align-end">
      <v-checkbox v-model="isInputEnabled" />
    </v-col>

    <v-col cols="10" sm="11">
      <global-text-field
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </v-col>
  </v-row>
</template>`;
