export const Basic = `<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="i in 4" :key="i">
      <v-expansion-panel-title> Item {{ i }} </v-expansion-panel-title>
      <v-expansion-panel-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>`;

export const Accordion = `<template>
  <v-expansion-panels multiple>
    <v-expansion-panel v-for="i in 4" :key="i">
      <v-expansion-panel-title> Accordion {{ i }} </v-expansion-panel-title>
      <v-expansion-panel-text>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake
        gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing
        danish pie.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>`;

export const Inset = `<template>
  <v-expansion-panels inset>
    <v-expansion-panel v-for="i in 4" :key="i">
      <v-expansion-panel-title> Inset {{ i }} </v-expansion-panel-title>
      <v-expansion-panel-text>
        Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate
        cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu
        I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut
        chocolate cake oat cake I love gummi bears.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
`;
export const Popout = `<template>
  <v-expansion-panels popout>
    <v-expansion-panel v-for="i in 4" :key="i">
      <v-expansion-panel-title> Popout {{ i }} </v-expansion-panel-title>
      <v-expansion-panel-text>
        Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes
        gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes
        bonbon candy.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
`;
export const CustomIcon = `<script setup>
  const panel = ref(0)
</script>

<template>
  <v-expansion-panels v-model="panel" class="no-icon-rotate">
    <v-expansion-panel>
      <v-expansion-panel-title disable-icon-rotate>
        Server Down
        <template #actions>
          <v-icon size="18" icon="tabler-alert-circle" color="error" />
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy
        wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan
        topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice
        cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut
        gummi bears caramels icing marzipan.
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title disable-icon-rotate>
        Sales report generated
        <template #actions>
          <v-icon size="18" icon="tabler-check" color="success" />
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake
        macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar
        biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop.
        Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy
        toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream
        danish jelly-o brownie powde
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title disable-icon-rotate>
        High Memory usage
        <template #actions>
          <v-icon size="18" icon="tabler-alert-triangle" color="warning" />
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake
        chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans
        danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish.
        Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice
        cream danish chocolate cake topping ice cream. Brownie muffin gingerbread.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
`;
export const Model = `<script setup>
  const openedPanels = ref([])
  const items = ref(5)

  const all = () => {
    // [...Array(5).keys()] => [0, 1, 2, 3, 4]
    openedPanels.value = [...Array(items.value).keys()]
  }

  const none = () => {
    openedPanels.value = []
  }
</script>

<template>
  <div class="mb-4">
    <v-btn class="me-4" @click="all"> all </v-btn>
    <v-btn color="error" @click="none"> none </v-btn>

    <div class="mt-3"><span class="font-weight-bold">Selected: </span>{{ openedPanels }}</div>
  </div>

  <v-expansion-panels v-model="openedPanels" multiple>
    <v-expansion-panel v-for="item in items" :key="item">
      <v-expansion-panel-title> Header {{ item }} </v-expansion-panel-title>
      <v-expansion-panel-text>
        I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love
        bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie
        roll.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>`;

export const WithBorder = `<template>
  <v-expansion-panels variant="accordion" class="expansion-panels-width-border">
    <v-expansion-panel v-for="i in 4" :key="i">
      <v-expansion-panel-title> Accordion {{ i }} </v-expansion-panel-title>
      <v-expansion-panel-text>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake
        gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing
        danish pie.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>`;
