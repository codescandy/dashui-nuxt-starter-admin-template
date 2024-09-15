export const Basic = `<script setup>
  const currentTab = ref('item-1')
  const tabItemContent =
    'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab">
      <v-tab>Tab One</v-tab>
      <v-tab>Tab Two</v-tab>
      <v-tab>Tab Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in 3" :key="item" :value="'item'+item">
          {{ tabItemContent }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>`;

export const Stacked = `<script setup>
  const currentTab = ref('item-1')
  const tabItemText =
    'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab" grow stacked>
      <v-tab>
        <v-icon icon="tabler-phone" class="mb-2" />
        <span>Recent</span>
      </v-tab>

      <v-tab>
        <v-icon icon="tabler-heart" class="mb-2" />
        <span>Favorites</span>
      </v-tab>

      <v-tab>
        <v-icon icon="tabler-user" class="mb-2" />
        <span>Nearby</span>
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in 3" :key="item" :value="'item'+item">
          {{ tabItemText }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>`;

export const Vertical = `<script setup>
  const currentTab = ref('tab-1')
</script>

<template>
  <v-card>
    <div class="d-flex">
      <div>
        <v-tabs v-model="currentTab" direction="vertical">
          <v-tab>
            <v-icon start icon="tabler-user" />
            Option 1
          </v-tab>

          <v-tab>
            <v-icon start icon="tabler-lock" />
            Option 2
          </v-tab>

          <v-tab>
            <v-icon start icon="tabler-access-point" />
            Option 3
          </v-tab>
        </v-tabs>
      </div>

      <v-card-text>
        <v-window v-model="currentTab" class="ms-3">
          <v-window-item value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam
              feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero
              tortor, tincidunt et, tincidunt eget.
            </p>
          </v-window-item>

          <v-window-item value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
              convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices
              tempus, mauris ipsum aliquam libero.
            </p>
          </v-window-item>

          <v-window-item value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui.
              Proin viverra, ligula sit amet ultrices semper.
            </p>
          </v-window-item>
        </v-window>
      </v-card-text>
    </div>
  </v-card>
</template>`;

export const Alignment = `<template>
  <v-card>
    <v-card-text class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <v-tabs>
          <v-tab>Home</v-tab>
          <v-tab>Service</v-tab>
          <v-tab>Account</v-tab>
        </v-tabs>
      </div>

      <!-- Center -->
      <div>
        <v-tabs align-tabs="center">
          <v-tab>Home</v-tab>
          <v-tab>Service</v-tab>
          <v-tab>Account</v-tab>
        </v-tabs>
      </div>

      <!-- End -->
      <div>
        <v-tabs align-tabs="end">
          <v-tab>Home</v-tab>
          <v-tab>Service</v-tab>
          <v-tab>Account</v-tab>
        </v-tabs>
      </div>
    </v-card-text>
  </v-card>
</template>`;

export const Pagination = `<script setup>
  const currentTab = ref('item-1')
  const tabItemContent =
    'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab">
      <v-tab v-for="i in 10" :key="i"> Item {{ i }} </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in 10" :key="item" :value="'item'+item">
          {{ tabItemContent }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>`;

export const CustomIcons = `<script setup>
  const currentTab = ref('item-1')
  const tabItemContent =
    'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab" next-icon="tabler-arrow-right" prev-icon="tabler-arrow-left">
      <v-tab v-for="i in 10" :key="i"> Item {{ i }} </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in 10" :key="item" :value="'item'+item">
          {{ tabItemContent }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>`;

export const Fixed = `<script setup>
  const currentTab = ref('Appetizers')

  const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']

  const tabItemText =
    'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab" fixed-tabs>
      <v-tab v-for="item in items" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in items" :key="item" :value="item">
          {{ tabItemText }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>`;

export const Grow = `<script setup>
  const currentTab = ref('Appetizers')

  const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']

  const tabItemText =
    'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in items" :key="item" :value="item">
          {{ tabItemText }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>`;

export const ProgrammaticNavigation = `<script setup>
  const currentTab = ref(0)

  const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']

  const tabItemText =
    'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
  const totalTabs = items.length

  const preTab = () => {
    if (currentTab.value !== 1) currentTab.value -= 1
  }

  const nextTab = () => {
    if (currentTab.value !== totalTabs) currentTab.value += 1
  }
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab" grow>
      <v-tab v-for="item in items.length" :key="item" :value="item">
        {{ items[item - 1] }}
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in items.length" :key="item" :value="item">
          {{ tabItemText }}
        </v-window-item>
      </v-window>

      <div class="d-flex justify-center gap-4 mt-3">
        <v-btn
          :disabled="currentTab === 1"
          :variant="currentTab === 1 ? 'tonal' : undefined"
          @click="preTab"
          class="ma-2"
        >
          Previous
        </v-btn>

        <v-btn
          :disabled="currentTab === totalTabs"
          :variant="currentTab === totalTabs ? 'tonal' : undefined"
          @click="nextTab"
          class="ma-2"
        >
          Next
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>`;

export const Dynamic = `<script setup>
  const totalTabs = ref(3)
  const currentTab = ref(0)

  watch(totalTabs, (newValue) => {
    currentTab.value = newValue - 1
  })
</script>

<template>
  <v-card>
    <v-tabs v-model="currentTab">
      <v-tab v-for="n in totalTabs" :key="n" :value="n"> Tab {{ n }} </v-tab>
    </v-tabs>

    <v-card-text>
      <v-btn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </v-btn>

      <v-btn @click="totalTabs++"> Add Tab </v-btn>
    </v-card-text>
  </v-card>
</template>`;

export const BasicPill = `<script setup>
  const currentTab = ref('window1')
  const tabItemContent =
    'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
</script>

<template>
  <v-tabs v-model="currentTab" class="v-tabs-pill">
    <v-tab>Tab One</v-tab>
    <v-tab>Tab Two</v-tab>
    <v-tab>Tab Three</v-tab>
  </v-tabs>

  <v-card>
    <v-card-text>
      <v-window v-model="currentTab">
        <v-window-item v-for="item in 3" :key="'window'+item">
          {{ tabItemContent }}
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>`;

export const VerticalPill = `<scritp setup>
  const currentTab = ref('window-1')
</scritp>

<template>
  <div class="d-flex gap-6">
    <div>
      <v-tabs v-model="currentTab" direction="vertical" class="v-tabs-pill">
        <v-tab>
          <v-icon start icon="tabler-user" />
          Option 1
        </v-tab>

        <v-tab>
          <v-icon start icon="tabler-lock" />
          Option 2
        </v-tab>

        <v-tab>
          <v-icon start icon="tabler-access-point" />
          Option 3
        </v-tab>
      </v-tabs>
    </div>

    <v-card>
      <v-card-text>
        <v-window v-model="currentTab" class="ms-3">
          <v-window-item value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam
              feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero
              tortor, tincidunt et, tincidunt eget.
            </p>
          </v-window-item>

          <v-window-item value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
              convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices
              tempus, mauris ipsum aliquam libero.
            </p>
          </v-window-item>

          <v-window-item value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui.
              Proin viverra, ligula sit amet ultrices semper.
            </p>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>`;
