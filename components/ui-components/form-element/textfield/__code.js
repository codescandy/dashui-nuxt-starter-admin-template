export const Basic = `<template>
  <global-text-field label="Regular" placeholder="Placeholder Text" />
</template>`;

export const Density = `<template>
  <global-text-field label="Regular" density="compact" placeholder="Placeholder Text" />
</template>`;

export const Variant = `<template>
  <global-text-field label="Outlined" variant="outlined" />
  <global-text-field label="Filled" variant="filled" />
  <global-text-field label="Solo" variant="solo" />
  <global-text-field label="Plain" variant="plain" />
  <global-text-field label="Underlined" variant="underlined" />
</template>`;

export const State = `<template>
  <global-text-field label="Disabled" placeholder="Placeholder Text" disabled />
  <global-text-field placeholder="Placeholder Text" label="Readonly" readonly />
</template>`;

export const Counter = `<script setup>
  const rules = [(v) => v.length <= 25 || 'Max 25 characters']

  const title = ref('Preliminary report')
  const description = ref('California is a state in the western United States')
</script>

<template>
  <global-text-field
    v-model="title"
    :rules="rules"
    counter="25"
    placeholder="Placeholder Text"
    hint="This field uses counter prop"
    label="Regular"
  />

  <global-text-field
    v-model="description"
    :rules="rules"
    counter
    maxlength="25"
    placeholder="Placeholder Text"
    hint="This field uses maxlength attribute"
    label="Limit exceeded"
  />
</template>`;

export const Clearable = `<template>
  <global-text-field
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>`;

export const CustomColors = `<template>
  <global-text-field color="success" label="First name" placeholder="Placeholder Text" />
</template>`;

export const Icons = `<template>
  <global-text-field
    label="Prepend"
    prepend-icon="tabler-map-pin"
    placeholder="Placeholder Text"
  />

  <global-text-field
    label="Prepend Inner"
    prepend-inner-icon="tabler-map-pin"
    placeholder="Placeholder Text"
  />

  <global-text-field
    label="Append"
    append-icon="tabler-map-pin"
    placeholder="Placeholder Text"
  />

  <global-text-field
    label="Append Inner"
    append-inner-icon="tabler-map-pin"
    placeholder="Placeholder Text"
  />
</template>`;

export const PrefixesAndSuffixes = `<script setup>
  const amount = ref(10.05)
  const weight = ref(28.02)
  const email = ref('example')
  const time = ref('04:56')
</script>


<template>
  <global-text-field
    v-model="amount"
    label="Amount"
    prefix="$"
    type="number"
    placeholder="10.05"
  />

  <global-text-field
    v-model="weight"
    label="Weight"
    suffix="lbs"
    type="number"
    placeholder="28.02"
  />

  <global-text-field
    v-model="email"
    label="Email address"
    suffix="@gmail.com"
    placeholder="example"
  />

  <global-text-field
    v-model="time"
    label="Label Text"
    type="time"
    suffix="PST"
    placeholder="04:56"
  />
</template>`;

export const SingleLine = `<template>
  <global-text-field label="Regular" placeholder="Placeholder Text" single-line />
</template>`;

export const Validation = `<script setup>
  const rules = {
    required: (value) => !!value || 'Email field is required'
  }

  const email = ref('')
</script>

<template>
  <global-text-field
    v-model="email"
    :rules="[rules.required]"
    placeholder="johnedoe@email.com"
    label="E-mail"
  />
</template>`;

export const IconEvents = `<script setup>
  const message = ref('Hey!')
  const marker = ref(true)
  const iconIndex = ref(0)

  const toggleMarker = () => {
    marker.value = !marker.value
  }

  const clearMessage = () => {
    message.value = ''
  }

  const resetIcon = () => {
    iconIndex.value = 0
  }

  const sendMessage = () => {
    resetIcon()
    clearMessage()
  }
</script>

<template>
  <global-text-field
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="
      message
        ? $vuetify.locale.isRtl
          ? 'tabler-arrow-big-left-lines'
          : 'tabler-arrow-big-right-lines'
        : 'tabler-microphone'
    "
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>`;

export const PasswordInput = `<script setup>
  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref('Password')
  const confirmPassword = ref('wqfasds')

  const rules = {
    required: (value) => !!value || 'Required.',
    min: (v) => v.length >= 8 || 'Min 8 characters'
  }
</script>

<template>
  <global-text-field
    v-model="password"
    :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye'"
    :rules="[rules.required, rules.min]"
    :type="show1 ? 'text' : 'password'"
    name="input-10-1"
    label="Normal with hint text"
    hint="At least 8 characters"
    placeholder="············"
    counter
    @click:append-inner="show1 = !show1"
  />

  <global-text-field
    v-model="confirmPassword"
    :rules="[rules.required, rules.min]"
    :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye'"
    :type="show2 ? 'text' : 'password'"
    name="input-10-2"
    placeholder="············"
    label="Visible"
    hint="At least 8 characters"
    @click:append-inner="show2 = !show2"
  />
</template>`;
