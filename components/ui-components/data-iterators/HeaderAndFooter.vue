<script setup>
import { HeaderAndFooter } from "./__code";
import dataIterators9 from "/images/components/data-iterators/9.png";
import dataIterators10 from "/images/components/data-iterators/10.png";
import dataIterators11 from "/images/components/data-iterators/11.png";
import dataIterators12 from "/images/components/data-iterators/12.png";
import dataIterators13 from "/images/components/data-iterators/13.png";
import dataIterators14 from "/images/components/data-iterators/14.png";
import dataIterators15 from "/images/components/data-iterators/15.png";
import dataIterators16 from "/images/components/data-iterators/16.png";
import dataIterators17 from "/images/components/data-iterators/17.png";
import dataIterators18 from "/images/components/data-iterators/18.png";
import dataIterators19 from "/images/components/data-iterators/19.png";
import dataIterators20 from "/images/components/data-iterators/20.png";
import dataIterators21 from "/images/components/data-iterators/21.png";
import dataIterators22 from "/images/components/data-iterators/22.png";
import dataIterators23 from "/images/components/data-iterators/23.png";

const mice = [
  {
    name: "Logitech G Pro X",
    color: "14, 151, 210",
    dpi: 16000,
    buttons: 8,
    weight: "63g",
    wireless: true,
    price: 149.99,
    description: "Logitech G Pro X",
    src: dataIterators9,
  },
  {
    name: "Razer DeathAdder V2",
    color: "12, 146, 47",
    dpi: 20000,
    buttons: 8,
    weight: "82g",
    wireless: false,
    price: 69.99,
    description: "Razer DeathAdder V2",
    src: dataIterators10,
  },
  {
    name: "Corsair Dark Core RGB",
    color: "107, 187, 226",
    dpi: 18000,
    buttons: 9,
    weight: "133g",
    wireless: true,
    price: 89.99,
    description: "Corsair Dark Core RGB",
    src: dataIterators11,
  },
  {
    name: "SteelSeries Rival 3",
    color: "228, 196, 69",
    dpi: 8500,
    buttons: 6,
    weight: "77g",
    wireless: false,
    price: 29.99,
    description: "SteelSeries Rival 3",
    src: dataIterators12,
  },
  {
    name: "HyperX Pulsefire FPS Pro",
    color: "156, 82, 251",
    dpi: 16000,
    buttons: 6,
    weight: "95g",
    wireless: false,
    price: 44.99,
    description: "HyperX Pulsefire FPS Pro",
    src: dataIterators13,
  },
  {
    name: "Zowie EC2",
    color: "166, 39, 222",
    dpi: 3200,
    buttons: 5,
    weight: "90g",
    wireless: false,
    price: 69.99,
    description: "Zowie EC2",
    src: dataIterators14,
  },
  {
    name: "Roccat Kone AIMO",
    color: "131, 9, 10",
    dpi: 16000,
    buttons: 10,
    weight: "130g",
    wireless: false,
    price: 79.99,
    description: "Roccat Kone AIMO",
    src: dataIterators15,
  },
  {
    name: "Logitech G903",
    color: "232, 94, 102",
    dpi: 12000,
    buttons: 11,
    weight: "110g",
    wireless: true,
    price: 129.99,
    description: "Logitech G903",
    src: dataIterators16,
  },
  {
    name: "Cooler Master MM711",
    color: "58, 192, 239",
    dpi: 16000,
    buttons: 6,
    weight: "60g",
    wireless: false,
    price: 49.99,
    description: "Cooler Master MM711",
    src: dataIterators17,
  },
  {
    name: "Glorious Model O",
    color: "161, 252, 250",
    dpi: 12000,
    buttons: 6,
    weight: "67g",
    wireless: false,
    price: 49.99,
    description: "Glorious Model O",
    src: dataIterators18,
  },
  {
    name: "HP Omen Photon",
    color: "201, 1, 2",
    dpi: 16000,
    buttons: 11,
    weight: "128g",
    wireless: true,
    price: 99.99,
    description: "HP Omen Photon",
    src: dataIterators19,
  },
  {
    name: "Asus ROG Chakram",
    color: "10, 181, 19",
    dpi: 16000,
    buttons: 9,
    weight: "121g",
    wireless: true,
    price: 159.99,
    description: "Asus ROG Chakram",
    src: dataIterators20,
  },
  {
    name: "Razer Naga X",
    color: "100, 101, 102",
    dpi: 16000,
    buttons: 16,
    weight: "85g",
    wireless: false,
    price: 79.99,
    description: "Razer Naga X",
    src: dataIterators21,
  },
  {
    name: "Mad Catz R.A.T. 8+",
    color: "136, 241, 242",
    dpi: 16000,
    buttons: 11,
    weight: "145g",
    wireless: false,
    price: 99.99,
    description: "Mad Catz R.A.T. 8+",
    src: dataIterators22,
  },
  {
    name: "Alienware 610M",
    color: "109, 110, 114",
    dpi: 16000,
    buttons: 7,
    weight: "120g",
    wireless: true,
    price: 99.99,
    description: "Alienware 610M",
    src: dataIterators23,
  },
];

const itemsPerPage = ref(4);

const onClickSeeAll = () => {
  itemsPerPage.value = itemsPerPage.value === 4 ? mice.length : 4;
};
</script>

<template>
  <div id="header-and-footer">
    <GlobalsIntro title="Header and footer">
      The <code>v-data-iterator</code> has both a <code>header</code> and <code>footer</code> slot
      for adding extra content.
    </GlobalsIntro>
    <GlobalsCodePre :code="HeaderAndFooter">
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
                  :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
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

                      <td>{{ item.raw.wireless ? "Yes" : "No" }}</td>
                    </tr>

                    <tr align="right">
                      <th>Price:</th>

                      <td>${{ item.raw.price }}</td>
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
    </GlobalsCodePre>
  </div>
</template>
