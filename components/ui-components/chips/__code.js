export const Color = `<template>
  <v-chip> Default </v-chip>
  <v-chip color="primary"> Primary </v-chip>
  <v-chip color="secondary"> Secondary </v-chip>
  <v-chip color="success"> Success </v-chip>
  <v-chip color="info"> Info </v-chip>
  <v-chip color="warning"> Warning </v-chip>
  <v-chip color="error"> Error </v-chip>
</template>`;

export const Elevated = `<template>
  <v-chip variant="elevated"> Default </v-chip>
  <v-chip color="primary" variant="elevated"> Primary </v-chip>
  <v-chip color="secondary" variant="elevated"> Secondary </v-chip>
  <v-chip color="success" variant="elevated"> Success </v-chip>
  <v-chip color="info" variant="elevated"> Info </v-chip>
  <v-chip color="warning" variant="elevated"> Warning </v-chip>
  <v-chip color="error" variant="elevated"> Error </v-chip>
</template>`;

export const Outlined = `<template>
  <v-chip variant="outlined"> Default </v-chip>
  <v-chip color="primary" variant="outlined"> Primary </v-chip>
  <v-chip color="secondary" variant="outlined"> Secondary </v-chip>
  <v-chip color="success" variant="outlined"> Success </v-chip>
  <v-chip color="info" variant="outlined"> Info </v-chip>
  <v-chip color="warning" variant="outlined"> Warning </v-chip>
  <v-chip color="error" variant="outlined"> Error </v-chip>
</template>`;

export const Label = `<template>
  <v-chip label> Default </v-chip>
  <v-chip label color="primary"> Primary </v-chip>
  <v-chip label color="secondary"> Secondary </v-chip>
  <v-chip label color="success"> Success </v-chip>
  <v-chip label color="info"> Info </v-chip>
  <v-chip label color="warning"> Warning </v-chip>
  <v-chip label color="error"> Error </v-chip>
</template>`;

export const Closable = `<script setup>
  const defaultChip = ref(true)
  const primaryChip = ref(true)
  const secondaryChip = ref(true)
  const successChip = ref(true)
  const infoChip = ref(true)
  const warningChip = ref(true)
  const errorChip = ref(true)
</script>

<template>
  <v-chip closable @click:close="defaultChip = !defaultChip">
    Default
  </v-chip>

  <v-chip
    color="primary"
    closable
    @click:close="primaryChip = !primaryChip"
  >
    Primary
  </v-chip>

  <v-chip
    color="secondary"
    closable
    @click:close="secondaryChip = !secondaryChip"
  >
    Secondary
  </v-chip>

  <v-chip
    color="success"
    closable
    @click:close="successChip = !successChip"
  >
    Success
  </v-chip>

  <v-chip color="info" closable @click:close="infoChip = !infoChip">
    Info
  </v-chip>

  <v-chip
    color="warning"
    closable
    @click:close="warningChip = !warningChip"
  >
    Warning
  </v-chip>

  <v-chip
    color="error"
    closable
    @click:close="errorChip = !errorChip"
  >
    Error
  </v-chip>
</template>`;

export const Icon = `<template>
  <v-chip>
    <v-icon start size="16" icon="tabler-user" />
    Account
  </v-chip>

  <v-chip color="primary">
    <v-icon start size="16" icon="tabler-arrow-left" />
    Left
  </v-chip>

  <v-chip color="secondary">
    <v-icon start size="16" icon="tabler-clock" />
    1 Hour
  </v-chip>

  <v-chip color="success">
    <v-icon start size="16" icon="tabler-bell" />
    Notification
  </v-chip>

  <v-chip color="info">
    <v-icon start size="16" icon="tabler-message" />
    Message
  </v-chip>

  <v-chip color="warning">
    <v-icon start size="16" icon="tabler-alert-triangle" />
    Warning
  </v-chip>

  <v-chip color="error">
    <v-icon start size="16" icon="tabler-face-id-error" />
    Check
  </v-chip>
</template>`;

export const Avatar = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import avatar3 from '/images/avatar/avatar-3.jpg'
  import avatar4 from '/images/avatar/avatar-4.jpg'
</script>

<template>
  <v-chip pill>
    <v-avatar start :image="avatar1" />
    <span>John Doe</span>
  </v-chip>

  <v-chip pill>
    <v-avatar start :image="avatar2" />
    <span>Darcy Nooser</span>
  </v-chip>

  <v-chip pill>
    <v-avatar start :image="avatar3" />
    <span>Felicia Risker</span>
  </v-chip>

  <v-chip pill>
    <v-avatar start :image="avatar4" />
    <span>Minnie Mostly</span>
  </v-chip>
</template>`;

export const Size = `<template>
  <v-chip size="x-small"> x-small chip </v-chip>
  <v-chip size="small"> small chip </v-chip>
  <v-chip> Default </v-chip>
  <v-chip size="large"> large chip </v-chip>
  <v-chip size="x-large"> x-large chip </v-chip>
</template>`;

export const Selects = `<script setup>
  const chips = ref(['Programming', 'Playing games', 'Sleeping'])

  const items = ref([
    'Streaming',
    'Eating',
    'Programming',
    'Playing games',
    'Sleeping'
  ])
</script>

<template>
  <global-combobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-square-rounded-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>`;

export const Expandable = `<script setup>
  const isMenuVisible = ref(false)
</script>

<template>
  <v-menu v-model="isMenuVisible" transition="scale-transition">
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <v-chip v-bind="props"> VueJS </v-chip>
    </template>

    <!-- v-menu list -->
    <v-list>
      <v-list-item>
        <v-list-item-title class="mb-2"> VueJS </v-list-item-title>
        <v-list-item-subtitle>
          The Progressive JavaScript Framework
        </v-list-item-subtitle>

        <template #append>
          <v-list-item-action class="ms-3">
            <v-btn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <v-icon size="20" icon="tabler-square-rounded-x" />
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>`;
