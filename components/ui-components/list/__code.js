export const Basic = `<script setup>
  const items = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac'
  ]
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list :items="items" />
  </v-card>
</template>`;

export const Rounded = `<script setup>
  const items = [
    {
      title: 'Cupcake sesame snaps dessert marzipan.',
      value: 1,
      props: {
        prependIcon: 'tabler-brand-instagram',
        rounded: 'xl'
      }
    },
    {
      title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
      value: 2,
      props: {
        prependIcon: 'tabler-brand-facebook',
        rounded: 'xl'
      }
    },
    {
      title: 'Bonbon macaroon gummies pie jelly',
      value: 3,
      props: {
        prependIcon: 'tabler-brand-twitter',
        rounded: 'xl'
      }
    },
    {
      title: 'halvah icing marshmallow',
      value: 4,
      props: {
        prependIcon: 'tabler-brand-instagram',
        rounded: 'xl'
      }
    }
  ]
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list :items="items" />
  </v-card>
</template>`;

export const Density = `<script setup>
  const items = [
    {
      title: 'halvah icing marshmallow',
      value: 1
    },
    {
      title: 'Cake caramels donut danish muffin biscuit',
      value: 2
    },
    {
      title: 'Chocolate cake pie lollipop',
      value: 3
    },
    {
      title: 'Apple pie toffee pudding gummi bears',
      value: 4
    },
    {
      title: 'Jujubes chupa chups cheesecake tart',
      value: 5
    },
    {
      title: 'Candy fruitcake bonbon sesame snaps dessert',
      value: 6
    },
    {
      title: 'Candy wafer tiramisu sugar plum sweet.',
      value: 7
    },
    {
      title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
      value: 8
    }
  ]
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list :items="items" />
  </v-card>
</template>`;

export const Nav = `<script setup>
  const items = [
    {
      title: 'My Files',
      value: 1,
      prependIcon: 'tabler-folder'
    },
    {
      title: 'Shared with me',
      value: 2,
      prependIcon: 'tabler-users'
    },
    {
      title: 'Starred',
      value: 3,
      prependIcon: 'tabler-star'
    },
    {
      title: 'Recent',
      value: 4,
      prependIcon: 'tabler-history'
    },
    {
      title: 'Offline',
      value: 5,
      prependIcon: 'tabler-circle-check'
    },
    {
      title: 'Uploads',
      value: 6,
      prependIcon: 'tabler-upload'
    },
    {
      title: 'Backups',
      value: 7,
      prependIcon: 'tabler-cloud-upload'
    }
  ]
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list nav :lines="false">
      <v-list-item v-for="item in items" :key="item.value" :value="item.value">
        <template #prepend>
          <v-icon :icon="item.prependIcon" />
        </template>

        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>`;

export const ActionAndItemGroup = `<template>
  <v-card class="mx-auto" max-width="374">
    <v-list
      lines="three"
      density="compact"
      select-strategy="classic"
      class="action-item-group-list"
    >
      <v-list-subheader>General</v-list-subheader>

      <v-list-item value="notifications">
        <template #prepend="{ isActive }">
          <v-list-item-action start>
            <VCheckbox :model-value="isActive" color="primary" class="mt-2" />
          </v-list-item-action>
        </template>

        <v-list-item-title>Notifications</v-list-item-title>
        <v-list-item-subtitle
          >Notify me about updates to apps or games that I downloaded</v-list-item-subtitle
        >
      </v-list-item>

      <v-list-item value="sound">
        <template #prepend="{ isActive }">
          <v-list-item-action start>
            <VCheckbox :model-value="isActive" color="primary" class="mt-2" />
          </v-list-item-action>
        </template>

        <v-list-item-title>Sound</v-list-item-title>
        <v-list-item-subtitle
          >Auto-update apps at any time. Data charges may apply</v-list-item-subtitle
        >
      </v-list-item>

      <v-list-item value="widgets">
        <template #prepend="{ isActive }">
          <v-list-item-action start>
            <VCheckbox :model-value="isActive" color="primary" class="mt-2" />
          </v-list-item-action>
        </template>

        <v-list-item-title>Auto-add widgets</v-list-item-title>
        <v-list-item-subtitle
          >Automatically add home screen widgets when downloads complete</v-list-item-subtitle
        >
      </v-list-item>
    </v-list>
  </v-card>
</template>`;

export const SubGroup = `<script setup>
  const open = ref(['Users', 'Admin'])

  const admins = [
    ['Management', 'tabler-users'],
    ['Settings', 'tabler-settings']
  ]

  const cruds = [
    ['Create', 'tabler-plus'],
    ['Read', 'tabler-file'],
    ['Update', 'tabler-reload'],
    ['Delete', 'tabler-trash']
  ]
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list v-model:opened="open">
      <v-list-item prepend-icon="tabler-home" title="Home" value="Home" />

      <v-list-group value="Users">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="tabler-users" title="Users" />
        </template>

        <v-list-group value="Admin">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Admin" />
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          />
        </v-list-group>

        <v-list-group value="Actions">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Actions" />
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          />
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>`;

export const TwoLinesAndSubheader = `<script setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary'
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel'
  }
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos'
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes'
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work'
  }
]
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list lines="two">
      <v-list-subheader inset> Folders </v-list-subheader>

      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        :title="folder.title"
        :subtitle="folder.subtitle"
      >
        <template #prepend>
          <v-avatar color="secondary" variant="tonal">
            <v-icon :size="26" icon="tabler-folder" />
          </v-avatar>
        </template>

        <template #append>
          <v-btn variant="text" color="default" size="small" icon="tabler-info-circle" />
        </template>
      </v-list-item>

      <v-divider inset />

      <v-list-subheader inset> Files </v-list-subheader>

      <v-list-item
        v-for="file in files"
        :key="file.title"
        :title="file.title"
        :subtitle="file.subtitle"
      >
        <template #prepend>
          <v-avatar color="secondary" variant="tonal">
            <v-icon :size="26" :icon="file.icon" />
          </v-avatar>
        </template>

        <template #append>
          <v-btn variant="text" color="default" size="small" icon="tabler-info-circle" />
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>`;

export const ThreeLine = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import avatar3 from '/images/avatar/avatar-3.jpg'
  import avatar4 from '/images/avatar/avatar-4.jpg'

  const items = [
    {
      type: 'subheader',
      title: 'Today'
    },
    {
      prependAvatar: avatar1,
      title: 'Brunch this weekend?',
      subtitle:
        '<span class="text-primary">Ali Connors</span> &mdash; I be in your neighborhood doing errands this weekend. Do you want to hang out?'
    },
    {
      type: 'divider',
      inset: true
    },
    {
      prependAvatar: avatar2,
      title: 'Summer BBQ',
      subtitle:
        '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I am out of town this weekend.'
    },
    {
      type: 'divider',
      inset: true
    },
    {
      prependAvatar: avatar3,
      title: 'Oui oui',
      subtitle:
        '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
    },
    {
      type: 'divider',
      inset: true
    },
    {
      prependAvatar: avatar4,
      title: 'Birthday gift',
      subtitle:
        '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
    }
  ]
</script>
  <v-card class="mx-auto" max-width="374">
    <v-list lines="three" :items="items" item-props>
      <template #subtitle="{ subtitle }">
        <div v-html="subtitle" />
      </template>
    </v-list>
  </v-card>
<template>`;

export const UserList = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import avatar3 from '/images/avatar/avatar-3.jpg'
  import avatar4 from '/images/avatar/avatar-4.jpg'

  const users = [
    {
      avatar: avatar1,
      name: 'Caroline Black',
      status: 'Online',
      lastVisited: '13 minutes ago'
    },
    {
      avatar: avatar2,
      name: 'Alfred Copeland',
      status: 'Away',
      lastVisited: '11 minutes ago'
    },
    {
      avatar: avatar3,
      name: 'Celia Schneider',
      status: 'Offline',
      lastVisited: '9 minutes ago'
    },
    {
      avatar: avatar4,
      name: 'Max Rogan',
      status: 'In Meeting',
      lastVisited: '28 minutes ago'
    }
  ]

  const resolveStatusColor = {
    Online: 'success',
    Away: 'warning',
    Offline: 'secondary',
    'In Meeting': 'error'
  }
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list lines="two" border>
      <template v-for="(user, index) of users" :key="user.name">
        <v-list-item>
          <template #prepend>
            <v-avatar :image="user.avatar" />
          </template>
          <v-list-item-title>
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="mt-1">
            <v-badge
              dot
              location="start center"
              offset-x="2"
              :color="resolveStatusColor[user.status]"
              class="me-3"
            >
              <span class="ms-4">{{ user.status }}</span>
            </v-badge>

            <span class="text-body-2 text-disabled">{{ user.lastVisited }}</span>
          </v-list-item-subtitle>

          <template #append>
            <v-btn size="small"> Add </v-btn>
          </template>
        </v-list-item>
        <v-divider v-if="index !== users.length - 1" />
      </template>
    </v-list>
  </v-card>
</template>`;

export const ProgressList = `<script setup>
const languageProgress = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70
  }
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning'
}
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list lines="two" border>
      <template v-for="(progress, index) of languageProgress" :key="progress.language">
        <v-list-item>
          <template #prepend>
            <VAvatar
              size="36"
              rounded
              variant="tonal"
              :icon="progress.avatar"
              :color="resolveStatusColor[progress.language]"
            />
          </template>

          <v-list-item-title>
            {{ progress.title }}
          </v-list-item-title>

          <v-list-item-subtitle class="mt-2">
            <v-progress-linear
              height="6"
              rounded
              :model-value="progress.amount"
              bg-color="secondary"
              :color="resolveStatusColor[progress.language]"
            />
          </v-list-item-subtitle>
        </v-list-item>

        <v-divider v-if="index !== languageProgress.length - 1" />
      </template>
    </v-list>
  </v-card>
</template>
`;
export const Shaped = `<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'tabler-brand-instagram'
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'tabler-brand-facebook'
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'tabler-brand-twitter'
  }
]
</script>

<template>
  <v-card class="mx-auto" max-width="374">
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item.text" rounded="shaped">
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title>
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>`;
