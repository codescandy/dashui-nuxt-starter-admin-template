export const Color = `<template>
  <v-avatar color="primary"> PI </v-avatar>
  <v-avatar color="secondary"> SE </v-avatar>
  <v-avatar color="success"> SU </v-avatar>
  <v-avatar color="info"> IN </v-avatar>
  <v-avatar color="warning"> WA </v-avatar>
  <v-avatar color="error"> ER </v-avatar>
</template>`;

export const Tonal = `<template>
  <v-avatar color="primary" variant="tonal"> PI </v-avatar>
  <v-avatar color="secondary" variant="tonal"> SE </v-avatar>
  <v-avatar color="success" variant="tonal"> SU </v-avatar>
  <v-avatar color="info" variant="tonal"> IN </v-avatar>
  <v-avatar color="warning" variant="tonal"> WA </v-avatar>
  <v-avatar color="error" variant="tonal"> ER </v-avatar>
</temlate>`;

export const Size = `<template>
  <v-avatar color="primary" size="x-small"> PI </v-avatar>
  <v-avatar color="secondary" size="small"> SE </v-avatar>
  <v-avatar color="success"> SU </v-avatar>
  <v-avatar color="info" size="large"> IN </v-avatar>
  <v-avatar color="warning" size="x-large"> WA </v-avatar>
</template>`;

export const Icon = `<template>
  <v-avatar color="primary" icon="tabler-garden-cart" />
  <v-avatar color="secondary" icon="tabler-home" />
  <v-avatar color="info" icon="tabler-arrow-left" />
  <v-avatar color="error" icon="tabler-stethoscope" />
  <v-avatar color="warning" icon="tabler-telescope" />
</template>`;

export const Roundend = `<template>
  <v-avatar color="primary" icon="tabler-brand-vue" rounded="0" />
  <v-avatar color="secondary" icon="tabler-brand-vue" rounded="sm" />
  <v-avatar color="info" icon="tabler-brand-vue" rounded />
  <v-avatar color="warning" icon="tabler-brand-vue" rounded="lg" />
  <v-avatar color="error" icon="tabler-brand-vue" rounded="xl" />
  <v-avatar color="success" icon="tabler-brand-vue" />
</template>`;

export const Images = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import avatar3 from '/images/avatar/avatar-3.jpg'
  import avatar4 from '/images/avatar/avatar-4.jpg'
  import avatar5 from '/images/avatar/avatar-5.jpg'
  import avatar6 from '/images/avatar/avatar-6.jpg'
</script>

<template>
  <v-avatar :image="avatar1" />
  <v-avatar :image="avatar2" />
  <v-avatar :image="avatar3" />
  <v-avatar :image="avatar4" />
  <v-avatar :image="avatar5" />
  <v-avatar :image="avatar6" />
</template>`;

export const Group = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import avatar3 from '/images/avatar/avatar-3.jpg'
  import avatar4 from '/images/avatar/avatar-4.jpg'
  import avatar5 from '/images/avatar/avatar-5.jpg'
  import avatar6 from '/images/avatar/avatar-6.jpg'
</script>

<template>
  <div class="v-avatar-group">
    <v-avatar :size="42">
      <v-img :src="avatar1" />
      <v-tooltip activator="parent" location="top">
        John Doe 1
      </v-tooltip>
    </v-avatar>

    <v-avatar :size="42">
      <v-img :src="avatar2" />
      <v-tooltip activator="parent" location="top">
        John Doe 2
      </v-tooltip>
    </v-avatar>

    <v-avatar :size="42">
      <v-img :src="avatar3" />
      <v-tooltip activator="parent" location="top">
        John Doe 3
      </v-tooltip>
    </v-avatar>

    <v-avatar :size="42">
      <v-img :src="avatar4" />
      <v-tooltip activator="parent" location="top">
        John Doe 4
      </v-tooltip>
    </v-avatar>

    <v-avatar :size="42">
      <v-img :src="avatar5" />
      <v-tooltip activator="parent" location="top">
        John Doe 5
      </v-tooltip>
    </v-avatar>

    <v-avatar :size="42">
      <v-img :src="avatar6" />
      <v-tooltip activator="parent" location="top">
        John Doe 6
      </v-tooltip>
    </v-avatar>
  </div>
</template>`;
