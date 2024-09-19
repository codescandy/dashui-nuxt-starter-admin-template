<script setup>
const { themeColors } = themeConfig();

const options = {
  labels: ["Quara", "Twitter", "Facebook", "Yourube", "Linkedin", "Reddit"],
  chart: {
    type: "donut",
    toolbar: { show: false },
  },

  colors: [themeColors.primary, themeColors.success, themeColors.error],

  stroke: { lineCap: "round" },

  plotOptions: {
    radialBar: {
      startAngle: -168,
      endAngle: -450,
      hollow: { size: "55%" },
      track: { background: "transaprent" },
      dataLabels: { show: !1 },
    },
  },
  responsive: [
    {
      breakpoint: 340,
      options: { chart: { height: 250 } },
    },
  ],
};

const series = [100, 78, 89];

const menuList = [
  { title: "Action" },
  { title: "Another Action" },
  { title: "Something elese here" },
];
</script>

<template>
  <ClientOnly>
    <v-card class="h-100">
      <v-card-title class="d-flex align-center justify-space-between">
        <h4 class="text-h4">Tasks Performance</h4>
        <v-menu location="start">
          <template v-slot:activator="{ props }">
            <icon-btn size="small" icon="tabler-dots-vertical" v-bind="props" />
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in menuList" :key="i" :value="item.title">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-divider />
      <v-card-item>
        <div class="d-flex aligin-center justify-center">
          <apexchart height="320" type="radialBar" :options="options" :series="series" />
        </div>
        <div class="d-flex aligin-center justify-space-around flex-wrap pt-5 pa-2">
          <div class="text-center">
            <v-icon icon="tabler-progress-check" size="30" class="text-success" />
            <h2 class="text-h2 font-weight-8">76%</h2>
            <p class="text-body-1">Completed</p>
          </div>
          <div class="text-center">
            <v-icon icon="tabler-trending-up" size="30" class="text-warning" />
            <h2 class="text-h2 font-weight-8">32%</h2>
            <p class="text-body-1">In-Progress</p>
          </div>
          <div class="text-center">
            <v-icon icon="tabler-trending-down" size="30" class="text-error" />
            <h2 class="text-h2 font-weight-8">13%</h2>
            <p class="text-body-1">Behind</p>
          </div>
        </div>
      </v-card-item>
    </v-card>
  </ClientOnly>
</template>
