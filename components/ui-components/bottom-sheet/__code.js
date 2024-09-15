export const Basic = `<template>
  <v-bottom-sheet>
    <template #activator="{ props }">
      <v-btn v-bind="props" text="Show bottom sheet"></v-btn>
    </template>

    <v-card
      title="Bottom Sheet"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
    />
  </v-bottom-sheet>
</template>`;

export const Model = `<script setup>
  const isVisible = ref(false)
</script>

<template>
  <v-btn text="Show bottom sheet" @click="isVisible = !isVisible" />

  <v-bottom-sheet v-model="isVisible">
    <v-card
      title="Bottom Sheet"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
    />
  </v-bottom-sheet>
</template>`;

export const Inset = `<template>
  <v-bottom-sheet inset>
    <template #activator="{ props }">
      <v-btn v-bind="props" text="Show bottom sheet"></v-btn>
    </template>

    <v-card
      title="Bottom Sheet"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
    />
  </v-bottom-sheet>
</template>`;

export const Example = `<script setup>
  import { useDisplay } from 'vuetify'

  const display = useDisplay()
</script>

<template>
  <v-bottom-sheet inset>
    <template #activator="{ props }">
      <v-btn v-bind="props" text="Click Me"></v-btn>
    </template>

    <v-sheet>
      <v-progress-linear
        color="primary"
        model-value="20"
        rounded="0"
      ></v-progress-linear>

      <v-list>
        <v-list-item>
          <v-list-item-title>The Walker</v-list-item-title>

          <v-list-item-subtitle
            >Fitz & The Trantrums</v-list-item-subtitle
          >

          <template #append>
            <v-btn
              icon="tabler-player-track-prev-filled"
              variant="text"
            ></v-btn>

            <v-btn
              :class="{ 'mx-5': display.mdAndUp.value }"
              icon="tabler-pause"
              variant="text"
            ></v-btn>

            <v-btn
              :class="{ 'me-3': display.mdAndUp.value }"
              class="ms-0"
              icon="tabler-player-track-next-filled"
              variant="text"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-bottom-sheet>
</template>`;

export const Example2 = `<script setup>
  import google from '/images/components/bottom-sheet/google.png'
  import hangouts from '/images/components/bottom-sheet/hangouts.png'
  import inbox from '/images/components/bottom-sheet/inbox.png'
  import keep from '/images/components/bottom-sheet/keep.png'
  import messenger from '/images/components/bottom-sheet/messenger.png'

  const listSheet = ref(false)
  const listItem = [
    { img: keep, title: 'Keep' },
    { img: inbox, title: 'Inbox' },
    { img: hangouts, title: 'Hangouts' },
    { img: messenger, title: 'Messenger' },
    { img: google, title: 'Google+' }
  ]
</script>

<template>
  <v-bottom-sheet v-model="listSheet">
    <template #activator="{ props }">
      <v-btn v-bind="props" text="Click Me" />
    </template>
    <v-sheet>
      <v-list>
        <v-list-subheader>Open in</v-list-subheader>

        <v-list-item
          v-for="tile in listItem"
          :key="tile.title"
          :prepend-avatar="tile.img"
          :title="tile.title"
          @click="listSheet = false"
        ></v-list-item>
      </v-list>
    </v-sheet>
  </v-bottom-sheet>
</template>`;
