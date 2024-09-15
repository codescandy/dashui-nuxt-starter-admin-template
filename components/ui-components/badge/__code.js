export const Style = `<script setup>
  import avatar2 from '/images/avatar/avatar-2.jpg'
</script>

<template>
  <!-- default -->
  <v-badge content="1">
    <v-btn variant="tonal"> Default </v-btn>
  </v-badge>

  <!-- bordered -->
  <v-badge content="5" bordered>
    <v-btn variant="tonal"> Border </v-btn>
  </v-badge>

  <!-- dot -->
  <v-badge dot location="bottom end" offset-x="3" offset-y="3">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>

  <!-- inline -->
  <v-badge inline content="5">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>

  <!-- Rounded -->
  <v-badge rounded="sm" content="5">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
</template>`;

export const Color = `<template>
  <v-badge dot color="primary">
    <v-icon size="25" icon="tabler-brand-vue" />
  </v-badge>
  <v-badge dot color="success">
    <v-icon size="25" icon="tabler-brand-vue" />
  </v-badge>
  <v-badge dot color="info">
    <v-icon size="25" icon="tabler-brand-vue" />
  </v-badge>
  <v-badge dot color="warning">
    <v-icon size="25" icon="tabler-brand-vue" />
  </v-badge>
</template>`;

export const Position = `<script setup>
  import avatar2 from '/images/avatar/avatar-2.jpg'
</script>

<template>
  <v-badge content="1" location="end top">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
  <v-badge content="1" location="bottom start">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
  <v-badge content="1" location="bottom end">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
  <v-badge content="1" location="start top">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
</template>`;

export const Icon = `<script setup>
  import avatar2 from '/images/avatar/avatar-2.jpg'
</script>

<template>
  <v-badge>
    <template #badge>
      <v-icon icon="tabler-brand-vue" />
    </template>

    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>

  <v-badge icon="tabler-brand-vue">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
</template>`;

export const AvatarStatus = `<script setup>
  import avatar2 from '/images/avatar/avatar-2.jpg'
</script>

<template>
  <v-badge
    dot
    bordered
    color="success"
    location="bottom end"
    :offset-x="5"
    :offset-y="1"
  >
    <v-avatar size="small">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>

  <v-badge
    dot
    bordered
    color="error"
    location="bottom end"
    :offset-x="5"
    :offset-y="1"
  >
    <v-avatar>
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>

  <v-badge
    dot
    bordered
    color="primary"
    location="bottom end"
    :offset-x="5"
    :offset-y="1"
  >
    <v-avatar size="large">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
</template>`;

export const DynamicNotifications = `<script setup>
  const notifications = ref()
</script>

<template>
  <v-badge
    :content="notifications"
    :model-value="!!notifications"
    color="primary"
    class="me-5"
  >
    <v-icon size="40" icon="tabler-brand-vue" />
  </v-badge>

  <v-btn @click="notifications = (notifications || 0) + 1">
    Send Message
  </v-btn>

  <v-btn color="error" @click="notifications = 0">
    Clear Notifications
  </v-btn>
</template>`;

export const ShowOnHover = `<script setup>  
  const badgeHover = ref()
  const showBadgeOnHover = useElementHover(badgeHover)
</script>

<template>
  <v-badge
    content="5"
    transition="scale-transition"
    :model-value="showBadgeOnHover"
  >
    <v-icon ref="badgeHover" size="25" icon="tabler-brand-vue" />
  </v-badge>
</template>`;

export const Tabs = `<script setup>
  const tabs = [
    {
      badge: '1',
      content: 'Item One'
    },
    {
      badge: '2',
      content: 'Item Two'
    },
    {
      badge: '3',
      content: 'Item Three'
    }
  ]
</script>

<template>
  <v-tabs grow>
    <v-tab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <v-badge :content="tab.badge" :offset-x="-18" :offset-y="6">
        {{ tab.content }}
      </v-badge>
    </v-tab>
  </v-tabs>
</template>`;

export const MaximumValue = `<script setup>
  import avatar2 from '/images/avatar/avatar-2.jpg'
</script>

<template>
  <v-badge content="99" max="99" offset-x="5" offset-y="-1">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
  <v-badge content="100" max="99" offset-x="5" offset-y="-1">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
  <v-badge content="1000" max="999" offset-x="5" offset-y="-1">
    <v-avatar size="48">
      <v-img :src="avatar2" />
    </v-avatar>
  </v-badge>
</template>`;
