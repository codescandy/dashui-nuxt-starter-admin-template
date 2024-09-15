export const Basic = `<template>
  <v-row align="center" justify="center">
    <v-col cols="auto">
      <v-card
        class="ma-2"
        color="primary"
        elevation="0"
        max-width="344"
        title="App Name"
        subtitle="Card with primary color - 0 elevation and outlined button."
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <v-card-actions>
          <v-btn color="white" variant="outlined">Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card
        class="ma-2"
        loading
        elevation="5"
        max-width="344"
        title="App Name"
        subtitle="Card with 5 elevation, flat button and progress loader."
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <v-card-actions>
          <v-btn variant="flat">Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>`;

export const CardBody = `<template>
  <v-card
    color="background"
    elevation="0"
    text="This is some text within a card body."
  />
</template>`;

export const Variant = `<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-card
        class="ma-1"
        title="Elevated"
        subtitle="App Name"
        text="Greyhound divisely hello coldly fonwderfully"
      >
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card
        class="ma-1"
        title="Tonal"
        variant="tonal"
        subtitle="App Name"
        text="Greyhound divisely hello coldly fonwderfully"
      >
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card
        class="ma-1"
        title="Outlined"
        variant="outlined"
        subtitle="App Name"
        text="Greyhound divisely hello coldly fonwderfully"
      >
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>`;

export const Color = `<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-card
        class="ma-1"
        color="primary"
        title="Primary"
        subtitle="App Name"
        text="Greyhound divisely hello coldly fonwderfully"
      >
        <v-card-actions>
          <v-btn color="white">Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card
        class="ma-1"
        color="error"
        title="Error"
        variant="tonal"
        subtitle="App Name"
        text="Greyhound divisely hello coldly fonwderfully"
      >
        <v-card-actions>
          <v-btn color="error">Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card
        class="ma-1"
        title="Success"
        variant="outlined"
        color="success"
        subtitle="App Name"
        text="Greyhound divisely hello coldly fonwderfully"
      >
        <v-card-actions>
          <v-btn color="success">Click me</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>`;

export const Elevation = `<template>
  <v-card class="mx-auto my-8" max-width="344" elevation="16">
    <v-card-item>
      <v-card-title> Card title </v-card-title>
      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card>
</template>`;

export const Hover = `<template>
  <v-card class="mx-auto my-8" max-width="344" hover>
    <v-card-item>
      <v-card-title> Card title </v-card-title>
      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card>
</template>`;

export const Href = `<template>
  <v-card
    class="mx-auto my-4"
    variant="tonal"
    max-width="400"
    title="DashUi on Codescandy"
    prepend-icon="tabler-brand-vue"
    append-icon="tabler-link"
    href="https://dashui.codescandy.com/"
    target="_blank"
    rel="noopener"
  />
</template>`;

export const Link = `<template>
  <v-card
    color="primary"
    class="mx-auto my-8"
    max-width="344"
    title="Hover and click me"
    subtitle="Same looks, no anchor"
    link
  />
</template>`;

export const Disabled = `<template>
  <v-card
    color="error"
    class="mx-auto my-8"
    max-width="344"
    title="Disabled card"
    subtitle="The card stays disabled"
    link
    disabled
  />
</template>`;

export const Image = `<script setup>
  import card1 from '/images/components/card/1.jpg'
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="200"
    height="200"
    :image="card1"
    title="Card Title"
    theme="dark"
  />
</template>`;

export const Slots = `<script setup>
  import blandLogo from '/images/brand/logo/brand-logo.png'
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar3 from '/images/avatar/avatar-3.jpg'
</script>

<template>
  <v-row align="center" justify="center">
    <v-col cols="auto">
      <v-card
        class="mx-auto ma-2"
        max-width="344"
        variant="outlined"
        title="Icons"
        subtitle="prepend-icon and append-icon"
        prepend-icon="tabler-user"
        append-icon="tabler-check"
      >
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="mx-auto ma-2"
        max-width="344"
        title="Icons"
        variant="tonal"
        subtitle="prepend and append"
      >
        <template #prepend>
          <v-icon icon="tabler-user" color="primary"></v-icon>
        </template>
        <template #append>
          <v-icon icon="tabler-check" color="success"></v-icon>
        </template>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="mx-auto ma-2"
        max-width="344"
        title="Avatars"
        color="warning"
        subtitle="prepend-avatar and append-avatar"
        :prepend-avatar="blandLogo"
        :append-avatar="avatar1"
      >
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card
        class="mx-auto ma-2"
        class="mx-auto"
        max-width="344"
        title="Avatars"
        color="primary"
        subtitle="prepend and append"
      >
        <template #prepend>
          <v-avatar color="white">
            <v-icon color="primary" icon="tabler-alarm"></v-icon>
          </v-avatar>
        </template>
        <template #append>
          <v-avatar size="30">
            <v-img :src="avatar3" alt="John"></v-img>
          </v-avatar>
        </template>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.</v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>`;

export const CardReveal = `<script setup>
  const reveal = ref(false)
</script>

<template>
  <v-card class="mx-auto" max-width="344" color="primary">
    <v-card-text class="text-white">
      <div>Word of the Day</div>
      <p class="text-h4 text-white">el·ee·mos·y·nar·y</p>
      <p>adjective</p>
      <div>
        relating to or dependent on charity charitable charitable
        donations. Pertaining to alms.<br />
        "an eleemosynary educational institution."
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="reveal = true"
      >
        Click Me
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="v-card--reveal"
        style="height: 100%"
        color="secondary"
      >
        <v-card-text class="pb-0 text-white">
          <p class="text-h4 text-white">Origin</p>
          <p>
            late 16th century (as a noun denoting a place where alms
            were distributed): from medieval Latin eleemosynarius,
            from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
            ‘compassion’
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            variant="text"
            color="teal-accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
</style>
`;

export const ContentWraping = `<script setup>
  import card2 from '/images/components/card/2.jpg'

  const messages = [
    {
      from: 'You',
      message: "Sure, I'll see you later.",
      time: '10:42am',
      color: 'primary'
    },
    {
      from: 'John Doe',
      message: 'Yeah, sure. Does 1:00pm work?',
      time: '10:37am',
      color: 'error'
    },
    {
      from: 'You',
      message: 'Did you still want to grab lunch today?',
      time: '9:47am',
      color: 'info'
    }
  ]
</script>

<template>
  <v-row justify="space-around">
    <v-card width="400" color="background">
      <v-img height="200" :src="card2" cover class="text-white">
        <v-toolbar color="rgba(0, 0, 0, 0.5)" theme="dark">
          <template #prepend>
            <icon-btn class="ml-2" icon="tabler-menu-2" />
          </template>

          <v-toolbar-title class="text-h5">
            Messages
          </v-toolbar-title>

          <template #append>
            <icon-btn icon="tabler-dots-vertical" />
          </template>
        </v-toolbar>
      </v-img>

      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2">Today</div>

        <v-timeline density="compact" align="start">
          <v-timeline-item
            v-for="message in messages"
            :key="message.time"
            :dot-color="message.color"
            size="x-small"
          >
            <div class="mb-4">
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong> @{{
                  message.time
                }}
              </div>
              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-row>
</template>`;

export const CustomActions = `<script setup>
  import card3 from '/images/components/card/3.jpg'

  const show = ref(false)
</script>

<template>
  <v-card color="background" class="mx-auto" max-width="344">
    <v-img :src="card3" height="200px" cover />

    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'tabler-chevron-up' : 'tabler-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more
          than he could deliver. You won't have time for sleeping,
          soldier, not with all the bed making you'll be doing. Then
          we'll go with that data file! Hey, you add a one and two
          zeros to that or we walk! You're going to do his laundry?
          I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>`;

export const Grids = `<script setup>
  import card4 from '/images/components/card/4.webp'
  import card5 from '/images/components/card/5.png'
  import card6 from '/images/components/card/6.jpg'

  const cards = [
    {
      title: 'Pre-fab homes',
      src: card6,
      flex: 12
    },
    {
      title: 'Favorite road trips',
      src: card4,
      flex: 6
    },
    {
      title: 'Best airlines',
      src: card5,
      flex: 6
    }
  ]
</script>

<template>
  <v-card class="mx-auto pa-3" color="background" max-width="500">
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <v-card class="ma-2">
          <v-img
            :src="card.src"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            cover
          >
            <v-card-title class="text-white">
              {{ card.title }}
            </v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <icon-btn
              color="error"
              size="small"
              icon="tabler-heart"
            />
            <icon-btn
              color="primary"
              size="small"
              icon="tabler-bookmark"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
<template>`;

export const HorizontalCards = `<script setup>
  import card7 from '/images/components/card/7.jpg'
  import card8 from '/images/components/card/8.png'
</script>

<template>
  <v-row dense>
    <v-col cols="12">
      <v-card color="#385F73" theme="dark" class="my-2">
        <v-card-title> Unlimited music now </v-card-title>
        <v-card-subtitle
          >Listen to your favorite artists and albums whenever and
          wherever, online and offline.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn variant="text" color="white"> Listen Now </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card color="#1F7087" theme="dark" class="my-2">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title> Supermodel </v-card-title>
            <v-card-subtitle>Foster the People</v-card-subtitle>

            <v-card-actions>
              <v-btn
                class="ms-2"
                color="white"
                variant="outlined"
                size="small"
              >
                START RADIO
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="card7"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>

    <v-col cols="12" class="my-1">
      <v-card color="#952175" theme="dark">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title> Halcyon Days </v-card-title>

            <v-card-subtitle>Ellie Goulding</v-card-subtitle>

            <v-card-actions>
              <icon-btn icon="tabler-play" />
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="card8"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
`;

export const MediaWithText = `<script setup>
  import card9 from '/images/components/card/9.jpg'
</script>

<template>
  <v-card class="mx-auto" max-width="400" color="background">
    <v-img
      class="align-end text-white"
      height="200"
      :src="card9"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" variant="flat"> Share </v-btn>
      <v-btn color="secondary"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>`;

export const TwiterCard = `<script setup>
  import avatar4 from '/images/avatar/avatar-4.jpg'
</script>

<template>
  <v-card
    class="mx-auto"
    color="dark"
    theme="dark"
    max-width="400"
    title="Twitter"
  >
    <template #prepend>
      <v-icon
        size="x-large"
        color="white"
        icon="tabler-brand-twitter"
      />
    </template>

    <v-card-text class="py-2">
      "Turns out semicolon-less style is easier and safer in TS
      because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template #prepend>
          <v-avatar color="grey-darken-3" :image="avatar4"></v-avatar>
        </template>

        <v-list-item-title>Jon Dey</v-list-item-title>

        <v-list-item-subtitle>Vue Developer</v-list-item-subtitle>

        <template #append>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="tabler-heart"></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon class="me-1" icon="tabler-share"></v-icon>
            <span class="subheading">45</span>
          </div>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>`;

export const WeatehrCard = `<script setup>
  const labels = {
    0: 'SU',
    1: 'MO',
    2: 'TU',
    3: 'WED',
    4: 'TH',
    5: 'FR',
    6: 'SA'
  }
  const expand = ref(false)
  const time = ref(0)
  const forecast = [
    { day: 'Tuesday', icon: 'tabler-sun-low', temp: '24\xB0/12\xB0' },
    { day: 'Wednesday', icon: 'tabler-sun-high', temp: '22\xB0/14\xB0' },
    { day: 'Thursday', icon: 'tabler-cloud', temp: '25\xB0/15\xB0' }
  ]
</script>

<template>
  <v-card class="mx-auto" max-width="368" color="background">
    <v-card-item title="Florida">
      <template #subtitle>
        <v-icon
          icon="tabler-alert-triangle"
          size="18"
          color="error"
          class="me-1 pb-1"
        />

        Extreme Weather Alert
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="text-h2" cols="6"> 64&degF </v-col>

        <v-col cols="6" class="text-right">
          <v-icon
            color="error"
            icon="tabler-storm"
            size="88"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="tabler-wind">
        <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item density="compact" prepend-icon="tabler-cloud-rain">
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
          <v-slider
            v-model="time"
            :max="6"
            :step="1"
            :ticks="labels"
            class="mx-4"
            color="primary"
            density="compact"
            hide-details
            show-ticks="always"
            thumb-size="10"
          ></v-slider>
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="expand = !expand">
        {{ !expand ? 'Full Report' : 'Hide Report' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>`;

export const Loading = `<script setup>
  import card10 from '/images/components/card/10.avif'

  const loading = ref(false)
  const selection = ref(1)
  const reserve = () => {
    loading.value = true

    setTimeout(() => (loading.value = false), 2000)
  }
</script>

<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    color="background"
  >
    <template #loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="primary"
        height="6"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img cover height="250" :src="card10" />

    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="tabler-flame"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          density="compact"
          half-increments
          readonly
          size="small"
        />
        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with
        12 indoor seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection" color="primary">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn variant="flat" @click="reserve"> Reserve </v-btn>
    </v-card-actions>
  </v-card>
<template>`;
