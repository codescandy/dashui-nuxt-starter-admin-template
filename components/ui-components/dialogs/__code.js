export const Basic = `<script setup>
  const basicDialogs = ref(false)
</script>

<template>
  <v-dialog v-model="basicDialogs" width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props"> Click Me </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        Privacy Policy
        <icon-btn @click="basicDialogs = !basicDialogs">
          <v-icon icon="tabler-x" />
        </icon-btn>
      </v-card-title>

      <v-card-text>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate
        cake shortbread bonbon biscuit sweet. Lemon drops cupcake
        muffin brownie fruitcake. Pastry pastry tootsie roll jujubes
        chocolate cake gummi bears muffin pudding caramels. Jujubes
        lollipop gummies croissant shortbread. Cupcake dessert
        marzipan topping gingerbread apple pie chupa chups powder.
        Cake croissant halvah candy canes gummies.
      </v-card-text>

      <v-card-text class="d-flex justify-end">
        <v-btn @click="basicDialogs = false"> I accept </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>`;

export const Persistent = `<script setup>
  const persistentDialogs = ref(false)
</script>

<template>
  <v-dialog
    v-model="persistentDialogs"
    persistent
    class="v-dialog-sm"
    width="600"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props"> Open Dialog </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        Privacy Policy
        <icon-btn @click="persistentDialogs = !persistentDialogs">
          <v-icon icon="tabler-x" />
        </icon-btn>
      </v-card-title>
      <v-card-text>
        Let Google help apps determine location. This means sending
        anonymous location data to Google, even when no apps are
        running.
      </v-card-text>

      <v-card-text class="d-flex justify-end gap-3 flex-wrap">
        <v-btn
          color="secondary"
          variant="tonal"
          class="ma-1"
          @click="persistentDialogs = false"
        >
          Disagree
        </v-btn>
        <v-btn class="ma-1" @click="persistentDialogs = false">
          Agree
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>`;

export const Scrollable = `<script setup>
  const countryList = [
    {
      label: 'Bahamas, The',
      value: 'bahamas'
    },
    {
      label: 'Bahrain',
      value: 'bahrain'
    },
    {
      label: 'Bangladesh',
      value: 'bangladesh'
    },
    {
      label: 'Barbados',
      value: 'barbados'
    },
    {
      label: 'Belarus',
      value: 'belarus'
    },
    {
      label: 'Belgium',
      value: 'belgium'
    },
    {
      label: 'Belize',
      value: 'belize'
    },
    {
      label: 'Benin',
      value: 'benin'
    },
    {
      label: 'Bhutan',
      value: 'bhutan'
    },
    {
      label: 'Bolivia',
      value: 'bolivia'
    },
    {
      label: 'Bosnia and Herzegovina',
      value: 'bosnia'
    },
    {
      label: 'Botswana',
      value: 'botswana'
    },
    {
      label: 'Brazil',
      value: 'brazil'
    },
    {
      label: 'Brunei',
      value: 'brunei'
    },
    {
      label: 'Bulgaria',
      value: 'bulgaria'
    },
    {
      label: 'Burkina Faso',
      value: 'burkina'
    }
  ]
  const selectedCountry = ref('')
  const scrollableDialogs = ref(false)
</script>

<template>
  <v-dialog v-model="scrollableDialogs" scrollable max-width="350">
    <!-- Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props"> Open Dialog</v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        Select Country
        <icon-btn @click="scrollableDialogs = !scrollableDialogs">
          <v-icon icon="tabler-x" />
        </icon-btn>
      </v-card-title>

      <v-divider />

      <v-card-text style="block-size: 300px">
        <v-radio-group v-model="selectedCountry" :inline="false">
          <v-radio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </v-radio-group>
      </v-card-text>

      <v-divider />

      <v-card-text class="d-flex justify-end flex-wrap gap-3 pt-5">
        <v-btn
          color="secondary"
          variant="tonal"
          class="ma-1"
          @click="scrollableDialogs = false"
        >
          Close
        </v-btn>
        <v-btn class="ma-1" @click="scrollableDialogs = false">
          Save
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>`;

export const Loader = `<script setup>
  const loadingDialogs = ref(false)
  watch(loadingDialogs, (value) => {
    if (!value) return
    setTimeout(() => {
      loadingDialogs.value = false
    }, 4000)
  })
</script>

<template>
  <v-btn :disabled="loadingDialogs" @click="loadingDialogs = true">
    Start loading
  </v-btn>

  <v-dialog v-model="loadingDialogs" width="300">
    <v-card color="primary" width="300">
      <v-card-text class="pt-3">
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          :height="8"
          class="mb-0 mt-4"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>`;

export const Nesting = `<script setup>
  const nestingDialogs = ref(false)
  const nestingDialogsChild = ref(false)
</script>

<template>
  <v-dialog v-model="nestingDialogs" width="500">
    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        Dialog
        <icon-btn @click="nestingDialogs = !nestingDialogs">
          <v-icon icon="tabler-x" />
        </icon-btn>
      </v-card-title>
      <v-card-text>
        <v-btn
          variant="tonal"
          color="secondary"
          class="ma-1"
          @click="nestingDialogs = false"
        >
          Close
        </v-btn>
        <v-btn
          class="ma-1"
          @click="nestingDialogsChild = !nestingDialogsChild"
        >
          Open Child Dialog
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>

  <!-- Child Dialog -->
  <v-dialog v-model="nestingDialogsChild" width="500">
    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        Child Dialog
        <icon-btn @click="nestingDialogsChild = !nestingDialogsChild">
          <v-icon icon="tabler-x" />
        </icon-btn>
      </v-card-title>
      <v-card-text> I'm a nested dialog </v-card-text>
      <v-card-text>
        <v-spacer />
        <v-btn @click="nestingDialogsChild = false"> Close </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>`;

export const Overflow = `<script setup>
  const overflowedDialogs = ref(false)
</script>

<template>
  <v-dialog v-model="overflowedDialogs" width="500">
    <!-- Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props"> Open Dialog</v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        Terms of service?
        <icon-btn @click="overflowedDialogs = !overflowedDialogs">
          <v-icon icon="tabler-x" />
        </icon-btn>
      </v-card-title>
      <v-card-text>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate
        cake shortbread bonbon biscuit sweet. Lemon drops cupcake
        muffin brownie fruitcake. Pastry pastry tootsie roll jujubes
        chocolate cake gummi bears muffin pudding caramels. Jujubes
        lollipop gummies croissant shortbread. Cupcake dessert
        marzipan topping gingerbread apple pie chupa chups powder.
        Cake croissant halvah candy canes gummies. Candy tootsie roll
        sweet lemon drops tart cotton candy jujubes topping chupa
        chups. Biscuit icing pastry chocolate bar lollipop. Lemon
        drops oat cake chocolate cake dessert chocolate. Carrot cake
        ice cream bonbon tart tootsie roll cupcake dessert
        gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum
        gummies powder brownie dessert candy canes candy canes candy.
        Sweet liquorice danish jujubes tart marshmallow cake. Danish
        chocolate bar icing dessert bonbon. Chocolate liquorice candy
        donut shortbread bonbon jujubes tart. Marshmallow cupcake
        marzipan icing pie dragée toffee. Cupcake soufflé pastry oat
        cake icing sesame snaps oat cake. Lollipop cheesecake cake
        tiramisu chocolate cake croissant. Donut candy canes sweet
        roll ice cream toffee gingerbread. Jelly-o biscuit oat cake
        cheesecake jujubes. Pudding chocolate biscuit gummies sesame
        snaps. Lemon drops candy canes chupa chups pudding muffin
        jujubes cupcake danish. Wafer chocolate oat cake sweet
        chocolate muffin. Pie dragée soufflé oat cake toffee dragée
        gummi bears. Jelly-o chocolate jelly fruitcake tart muffin
        icing sweet. Gummies pie lollipop carrot cake gingerbread
        sweet. Marshmallow tiramisu chocolate cake cake marshmallow.
        Pudding fruitcake shortbread biscuit powder cake. Dragée
        cookie cheesecake chupa chups toffee wafer. Wafer donut
        pudding chocolate shortbread cheesecake. Cupcake sweet roll
        lollipop chupa chups donut croissant carrot cake chocolate
        cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly
        beans pudding jelly-o gingerbread apple pie ice cream. Muffin
        halvah cookie topping muffin sugar plum. Bonbon dessert cake
        tiramisu marzipan apple pie. Jelly beans caramels icing cake
        cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton
        candy chupa chups cheesecake pudding cheesecake cupcake
        gummies. Croissant cookie candy canes cake chocolate. Pie
        cotton candy caramels sweet cake liquorice. Bear claw oat cake
        candy danish jelly-o fruitcake muffin sugar plum cupcake.
        Pudding cake cake lollipop chupa chups topping apple pie jelly
        oat cake. Pie candy canes tiramisu gummies icing cotton candy
        fruitcake marshmallow dragée. Pudding caramels muffin cookie
        cookie cupcake brownie ice cream. Liquorice lemon drops lemon
        drops cotton candy biscuit jelly-o jujubes topping. Lemon
        drops sweet dragée dessert sugar plum chocolate topping sugar
        plum oat cake. Muffin candy canes bonbon cotton candy
        liquorice gingerbread sesame snaps chocolate bar. Muffin
        gingerbread sesame snaps cake donut pie gingerbread soufflé
        croissant. Topping tart shortbread toffee jelly-o gingerbread
        cheesecake cupcake cake. Pudding powder icing marshmallow bear
        claw sesame snaps carrot cake. Jelly beans dessert tiramisu
        shortbread gummi bears gummies cotton candy. Tiramisu
        liquorice cookie pastry caramels icing tootsie roll. Pudding
        croissant tootsie roll jelly-o jelly beans gummi bears.
        Shortbread candy canes biscuit candy donut marshmallow candy
        canes. Fruitcake marshmallow chocolate bar sweet roll tart
        gummi bears brownie cupcake dragée. Cheesecake gummies sesame
        snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame
        snaps marzipan cupcake candy cheesecake lollipop. Donut candy
        jelly-o liquorice topping gummi bears halvah. Pie sweet sweet
        jujubes bear claw marshmallow pudding lollipop tiramisu.
        Tiramisu tootsie roll topping chocolate cake tootsie roll
        cotton candy brownie. Jelly beans biscuit caramels cake toffee
        toffee lemon drops dessert. Toffee chupa chups tart bonbon
        brownie cake shortbread. Gummies marshmallow topping dragée
        chocolate bar. Chupa chups donut cheesecake cookie fruitcake
        muffin. Jelly-o cupcake cheesecake chocolate bar cupcake
        wafer. Liquorice muffin marzipan cotton candy cake lemon drops
        cake brownie.
      </v-card-text>

      <v-card-text class="d-flex justify-end flex-wrap gap-3 pt-5">
        <v-btn
          color="secondary"
          variant="tonal"
          class="ma-1"
          @click="overflowedDialogs = false"
        >
          Disagree
        </v-btn>
        <v-btn class="ma-1" @click="overflowedDialogs = false">
          Agree
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>`;

export const FullScreen = `<script setup>
  const fullscreenDialogs = ref(false)
</script>

<template>
  <v-btn @click="fullscreenDialogs = true"> Open Dialog </v-btn>

  <v-dialog
    v-model="fullscreenDialogs"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <!-- Toolbar -->
      <v-toolbar color="primary">
        <icon-btn @click="fullscreenDialogs = false">
          <v-icon color="white" icon="tabler-x" />
        </icon-btn>

        <v-toolbar-title>Settings</v-toolbar-title>

        <v-spacer />

        <v-toolbar-items>
          <v-btn variant="text" @click="fullscreenDialogs = false">
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-list lines="two">
        <v-list-subheader>User Controls</v-list-subheader>
        <v-list-item
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <v-list-item
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </v-list>

      <v-divider />
    </v-card>
  </v-dialog>
</template>`;

export const Form = `<script setup>
  const formDialogs = ref(false)
  const firstName = ref('')
  const middleName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const age = ref()
  const interest = ref([])
</script>

<template>
  <v-dialog v-model="formDialogs" max-width="600">
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props"> Open Dialog </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        User Profile
        <icon-btn @click="formDialogs = !formDialogs">
          <v-icon icon="tabler-x" />
        </icon-btn>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <global-text-field
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <global-text-field
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <global-text-field
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </v-col>
          <v-col cols="12">
            <global-text-field
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </v-col>
          <v-col cols="12">
            <global-text-field
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <global-text-field
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <global-text-field
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text class="d-flex justify-end flex-wrap gap-3">
        <v-btn
          variant="tonal"
          color="secondary"
          class="ma-1"
          @click="formDialogs = false"
        >
          Close
        </v-btn>
        <v-btn class="ma-1" @click="formDialogs = false">
          Save
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>`;
