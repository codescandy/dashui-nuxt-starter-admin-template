export const Basic = `<script setup>
  const page = ref(1)
  const items = Array.from({ length: 50 }, (k, v) => ({
    title: 'Item ' + v + 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!'
  }))
</script>

<template>
  <v-data-iterator :items="items" :page="page">
    <template v-slot:default="{ items }">
      <template v-for="(item, i) in items" :key="i">
        <v-card v-bind="item.raw"></v-card>

        <br />
      </template>
    </template>
    <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
      <div class="d-flex align-center justify-center pa-4">
        <v-btn
          :disabled="page === 1"
          icon="tabler-arrow-left"
          density="comfortable"
          variant="tonal"
          rounded
          @click="prevPage"
        ></v-btn>

        <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>

        <v-btn
          :disabled="page >= pageCount"
          icon="tabler-arrow-right"
          density="comfortable"
          variant="tonal"
          rounded
          @click="nextPage"
        ></v-btn>
      </div>
    </template>
  </v-data-iterator>
</template>`;

export const Slots = `<scritp setup>
  const desserts = [
    {
      name: 'Frozen Yogurt',
      description:
        'A tangy and creamy dessert made from yogurt and sometimes fruit, Frozen Yogurt is a lighter alternative to ice cream. Perfect for those who crave a sweet treat but want to keep it on the healthier side.',
      icon: 'tabler-ice-cream',
      color: '#6EC1E4',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    },
    {
      name: 'Ice cream sandwich',
      description:
        "A classic treat featuring a layer of creamy ice cream sandwiched between two cookies or cake layers. Ideal for those hot summer days when you can't decide between a cookie and ice cream.",
      icon: 'tabler-cookie',
      color: '#F4A261',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: '8%',
      iron: '1%'
    },
    {
      name: 'Eclair',
      description:
        'A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.',
      icon: 'tabler-cake',
      color: '#6D4C41',
      calories: 262,
      fat: 16,
      carbs: 23,
      protein: 6,
      sodium: 337,
      calcium: '6%',
      iron: '7%'
    },
    {
      name: 'Cupcake',
      description:
        'A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.',
      color: '#FFADAD',
      icon: 'tabler-cup',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: '3%',
      iron: '8%'
    }
  ]
</script>

<template>
  <v-data-iterator :items="desserts" item-value="name">
    <template v-slot:default="{ items, isExpanded, toggleExpand }">
      <v-row>
        <v-col v-for="item in items" :key="item.raw.name" cols="12" sm="12" md="6">
          <v-card class="pa-2">
            <v-card-title class="d-flex align-center">
              <v-icon :color="item.raw.color" :icon="item.raw.icon" start size="18"></v-icon>

              <h4>{{ item.raw.name }}</h4>
            </v-card-title>

            <v-card-text>
              {{ item.raw.description }}
            </v-card-text>

            <div class="px-4">
              <v-switch
                :model-value="isExpanded(item)"
                :label="isExpanded(item) ? 'Hide' : 'Show'+'details'"
                density="compact"
                inset
                @click="() => toggleExpand(item)"
              ></v-switch>
            </div>

            <v-expand-transition>
              <div v-if="isExpanded(item)">
                <v-divider></v-divider>

                <v-list density="compact" :lines="false">
                  <v-list-item
                    :title="'🔥 Calories: '+item.raw.calories"
                    active
                  ></v-list-item>
                  <v-list-item :title="'🍔 Fat: '+item.raw.fat"></v-list-item>
                  <v-list-item :title="'🍞 Carbs: '+item.raw.carbs"></v-list-item>
                  <v-list-item :title="'🍗 Protein: '+item.raw.protein"></v-list-item>
                  <v-list-item :title="'🧂 Sodium: '+item.raw.sodium"></v-list-item>
                  <v-list-item :title="'🦴 Calcium: '+item.raw.calcium"></v-list-item>
                  <v-list-item :title="'🧲 Iron: '+item.raw.iron"></v-list-item>
                </v-list>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>`;

export const HeaderAndFooter = `<script setup>
  import dataIterators9 from '/images/components/data-iterators/9.png'
  import dataIterators10 from '/images/components/data-iterators/10.png'
  import dataIterators11 from '/images/components/data-iterators/11.png'
  import dataIterators12 from '/images/components/data-iterators/12.png'
  import dataIterators13 from '/images/components/data-iterators/13.png'
  import dataIterators14 from '/images/components/data-iterators/14.png'
  import dataIterators15 from '/images/components/data-iterators/15.png'
  import dataIterators16 from '/images/components/data-iterators/16.png'
  import dataIterators17 from '/images/components/data-iterators/17.png'
  import dataIterators18 from '/images/components/data-iterators/18.png'
  import dataIterators19 from '/images/components/data-iterators/19.png'
  import dataIterators20 from '/images/components/data-iterators/20.png'
  import dataIterators21 from '/images/components/data-iterators/21.png'
  import dataIterators22 from '/images/components/data-iterators/22.png'
  import dataIterators23 from '/images/components/data-iterators/23.png'

  const mice = [
    {
      name: 'Logitech G Pro X',
      color: '14, 151, 210',
      dpi: 16000,
      buttons: 8,
      weight: '63g',
      wireless: true,
      price: 149.99,
      description: 'Logitech G Pro X',
      src: dataIterators9
    },
    {
      name: 'Razer DeathAdder V2',
      color: '12, 146, 47',
      dpi: 20000,
      buttons: 8,
      weight: '82g',
      wireless: false,
      price: 69.99,
      description: 'Razer DeathAdder V2',
      src: dataIterators10
    },
    {
      name: 'Corsair Dark Core RGB',
      color: '107, 187, 226',
      dpi: 18000,
      buttons: 9,
      weight: '133g',
      wireless: true,
      price: 89.99,
      description: 'Corsair Dark Core RGB',
      src: dataIterators11
    },
    {
      name: 'SteelSeries Rival 3',
      color: '228, 196, 69',
      dpi: 8500,
      buttons: 6,
      weight: '77g',
      wireless: false,
      price: 29.99,
      description: 'SteelSeries Rival 3',
      src: dataIterators12
    },
    {
      name: 'HyperX Pulsefire FPS Pro',
      color: '156, 82, 251',
      dpi: 16000,
      buttons: 6,
      weight: '95g',
      wireless: false,
      price: 44.99,
      description: 'HyperX Pulsefire FPS Pro',
      src: dataIterators13
    },
    {
      name: 'Zowie EC2',
      color: '166, 39, 222',
      dpi: 3200,
      buttons: 5,
      weight: '90g',
      wireless: false,
      price: 69.99,
      description: 'Zowie EC2',
      src: dataIterators14
    },
    {
      name: 'Roccat Kone AIMO',
      color: '131, 9, 10',
      dpi: 16000,
      buttons: 10,
      weight: '130g',
      wireless: false,
      price: 79.99,
      description: 'Roccat Kone AIMO',
      src: dataIterators15
    },
    {
      name: 'Logitech G903',
      color: '232, 94, 102',
      dpi: 12000,
      buttons: 11,
      weight: '110g',
      wireless: true,
      price: 129.99,
      description: 'Logitech G903',
      src: dataIterators16
    },
    {
      name: 'Cooler Master MM711',
      color: '58, 192, 239',
      dpi: 16000,
      buttons: 6,
      weight: '60g',
      wireless: false,
      price: 49.99,
      description: 'Cooler Master MM711',
      src: dataIterators17
    },
    {
      name: 'Glorious Model O',
      color: '161, 252, 250',
      dpi: 12000,
      buttons: 6,
      weight: '67g',
      wireless: false,
      price: 49.99,
      description: 'Glorious Model O',
      src: dataIterators18
    },
    {
      name: 'HP Omen Photon',
      color: '201, 1, 2',
      dpi: 16000,
      buttons: 11,
      weight: '128g',
      wireless: true,
      price: 99.99,
      description: 'HP Omen Photon',
      src: dataIterators19
    },
    {
      name: 'Asus ROG Chakram',
      color: '10, 181, 19',
      dpi: 16000,
      buttons: 9,
      weight: '121g',
      wireless: true,
      price: 159.99,
      description: 'Asus ROG Chakram',
      src: dataIterators20
    },
    {
      name: 'Razer Naga X',
      color: '100, 101, 102',
      dpi: 16000,
      buttons: 16,
      weight: '85g',
      wireless: false,
      price: 79.99,
      description: 'Razer Naga X',
      src: dataIterators21
    },
    {
      name: 'Mad Catz R.A.T. 8+',
      color: '136, 241, 242',
      dpi: 16000,
      buttons: 11,
      weight: '145g',
      wireless: false,
      price: 99.99,
      description: 'Mad Catz R.A.T. 8+',
      src: dataIterators22
    },
    {
      name: 'Alienware 610M',
      color: '109, 110, 114',
      dpi: 16000,
      buttons: 7,
      weight: '120g',
      wireless: true,
      price: 99.99,
      description: 'Alienware 610M',
      src: dataIterators23
    }
  ]

  const itemsPerPage = ref(4)

  const onClickSeeAll = () => {
    itemsPerPage.value = itemsPerPage.value === 4 ? mice.length : 4
  }
</script>


<template>
  <v-data-iterator :items="mice" :items-per-page="itemsPerPage">
    <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
      <h1 class="d-flex justify-space-between mb-4 align-center">
        <div class="text-h5 font-weight-bold">Most popular mice</div>

        <div class="d-flex align-center">
          <v-btn class="me-8 text-button" @click="onClickSeeAll"> View All </v-btn>

          <div class="d-inline-flex">
            <v-btn
              :disabled="page === 1"
              icon="tabler-arrow-left"
              size="small"
              variant="tonal"
              class="me-2"
              @click="prevPage"
            ></v-btn>

            <v-btn
              :disabled="page === pageCount"
              icon="tabler-arrow-right"
              size="small"
              variant="tonal"
              @click="nextPage"
            ></v-btn>
          </div>
        </div>
      </h1>
    </template>

    <template v-slot:default="{ items }">
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
          <v-sheet border>
            <v-img
              :gradient="to top right, rgba(255, 255, 255, .1), rgba('+item.raw.color+, .15)"
              :src="item.raw.src"
              cover
              height="150"
            ></v-img>

            <v-list-item
              :title="item.raw.name"
              lines="two"
              density="comfortable"
              subtitle="Lorem ipsum dil orei namdie dkaf"
            >
              <template v-slot:title>
                <strong class="text-h6">
                  {{ item.raw.name }}
                </strong>
              </template>
            </v-list-item>

            <v-table density="compact" class="text-caption">
              <tbody>
                <tr align="right">
                  <th>DPI:</th>

                  <td>{{ item.raw.dpi }}</td>
                </tr>

                <tr align="right">
                  <th>Buttons:</th>

                  <td>{{ item.raw.buttons }}</td>
                </tr>

                <tr align="right">
                  <th>Weight:</th>

                  <td>{{ item.raw.weight }}</td>
                </tr>

                <tr align="right">
                  <th>Wireless:</th>

                  <td>{{ item.raw.wireless ? 'Yes' : 'No' }}</td>
                </tr>

                <tr align="right">
                  <th>Price:</th>

                  <td>{{ item.raw.price }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-sheet>
        </v-col>
      </v-row>
    </template>

    <template v-slot:footer="{ page, pageCount }">
      <v-footer color="surface-variant" class="justify-space-between text-body-1 mt-4">
        Total mice: {{ mice.length }}

        <div>Page {{ page }} of {{ pageCount }}</div>
      </v-footer>
    </template>
  </v-data-iterator>
</template>`;

export const ControllableProps = `<script setup>
  import { ControllableProps } from './__code'
  import dataIterators1 from '/images/components/data-iterators/1.png'
  import dataIterators2 from '/images/components/data-iterators/2.png'
  import dataIterators3 from '/images/components/data-iterators/3.png'
  import dataIterators4 from '/images/components/data-iterators/4.png'
  import dataIterators5 from '/images/components/data-iterators/5.png'
  import dataIterators6 from '/images/components/data-iterators/6.png'
  import dataIterators7 from '/images/components/data-iterators/7.png'
  import dataIterators8 from '/images/components/data-iterators/8.png'

  const search = ref('')
  const games = [
    {
      img: dataIterators1,
      title: 'Underwater VR Exploration Adventure',
      subtitle: 'Dive deep into the ocean and discover the mysteries of the underwater world.',
      advanced: true,
      duration: '11 minutes'
    },
    {
      img: dataIterators2,
      title: 'Epic Adventures in Open Worlds',
      subtitle: 'Embark on a journey through vast, immersive landscapes and quests.',
      advanced: true,
      duration: '10 minutes'
    },
    {
      img: dataIterators3,
      title: 'Surviving the Space Station Horror',
      subtitle: 'Navigate a haunted space station in this chilling survival horror game.',
      advanced: false,
      duration: '9 minutes'
    },
    {
      img: dataIterators4,
      title: 'The Sci-Fi Shooter Experience',
      subtitle: 'Dive into a futuristic world of intense battles and alien encounters.',
      advanced: false,
      duration: '8 minutes'
    },
    {
      img: dataIterators5,
      title: 'Neon-Lit High-Speed Racing Thrills',
      subtitle: 'Experience adrenaline-pumping races in a futuristic, neon-soaked city.',
      advanced: true,
      duration: '12 minutes'
    },
    {
      img: dataIterators6,
      title: 'Retro-Style Platformer Adventures',
      subtitle: 'Jump and dash through pixelated worlds in this classic-style platformer.',
      advanced: false,
      duration: '11 minutes'
    },
    {
      img: dataIterators7,
      title: 'Medieval Strategic War Campaigns',
      subtitle: 'Lead armies into epic battles and conquer kingdoms in this strategic game.',
      advanced: true,
      duration: '10 minutes'
    },
    {
      img: dataIterators8,
      title: '1920s Mystery Detective Chronicles',
      subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
      advanced: false,
      duration: '9 minutes'
    }
  ]
</script>

<template>
  <v-data-iterator :items="games" :items-per-page="3" :search="search">
    <template v-slot:header>
      <v-toolbar class="px-2 mb-4">
        <v-text-field
          v-model="search"
          clearable
          density="comfortable"
          hide-details
          placeholder="Search"
          prepend-inner-icon="tabler-search"
          style="max-width: 300px"
          variant="solo"
        ></v-text-field>
      </v-toolbar>
    </template>

    <template v-slot:default="{ items }">
      <v-container class="pa-2" fluid>
        <v-row dense>
          <v-col v-for="item in items" :key="item.title" cols="auto" md="4">
            <v-card class="pb-3" border flat>
              <v-img :src="item.raw.img"></v-img>

              <v-list-item class="mb-2" :subtitle="item.raw.subtitle">
                <template v-slot:title>
                  <strong class="text-body-1 font-weight-bold mb-2">{{
                    item.raw.title
                  }}</strong>
                </template>
              </v-list-item>

              <div class="d-flex justify-space-between px-4">
                <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                  <v-icon icon="tabler-clock" start></v-icon>

                  <div class="text-truncate">{{ item.raw.duration }}</div>
                </div>

                <v-btn border flat size="small" class="text-none" text="Read"> </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
      <div class="d-flex align-center justify-center pa-4">
        <v-btn
          :disabled="page === 1"
          icon="tabler-arrow-left"
          density="comfortable"
          variant="tonal"
          rounded
          @click="prevPage"
        ></v-btn>

        <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>

        <v-btn
          :disabled="page >= pageCount"
          icon="tabler-arrow-right"
          density="comfortable"
          variant="tonal"
          rounded
          @click="nextPage"
        ></v-btn>
      </div>
    </template>
  </v-data-iterator>
</template>`;
