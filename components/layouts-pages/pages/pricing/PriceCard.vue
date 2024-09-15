<template>
  <v-row>
    <v-col cols="12" md="6" lg="4">
      <v-card class="h-100">
        <v-card-title>
          <h2 class="text-h2 mb-3">Standard</h2>
          <p class="text-body-1">
            For early-stage startups that want to spend more time developing and less on manual
            operations.
          </p>

          <h1 class="text-h1 mt-6 mb-3">
            $49
            <sub class="text-body-1"> /mo </sub>
          </h1>
          <v-btn variant="outlined"> Buy Standard </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-item>
          <p class="text-body-1 mb-2">All core features, including:</p>
          <ul>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Only Basic Components
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              12+ Adv. Components
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              5 - Landing page
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              3 Dashboard Layouts
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Documentation
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Access to support forums
            </li>
          </ul>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" lg="4">
      <v-card class="h-100">
        <v-card-title class="price-card-title">
          <div class="price-card-title__tag">
            <v-chip color="primary" label size="small" class="font-weight-7 rounded-0 rounded-bs">
              Most Popular
            </v-chip>
          </div>
          <h2 class="text-h2 mb-3">Multisite</h2>
          <p class="text-body-1">
            For agile startups that want to grow their revenue with quick experiments and
            data-driven decision making.
          </p>

          <h1 class="text-h1 mt-6 mb-3">
            $149
            <sub class="text-body-1"> /mo </sub>
          </h1>
          <v-btn> Buy Multisite </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-item>
          <p class="text-body-1 mb-2">Everything in Standard +:</p>
          <ul>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Basic + 30+ New Components
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              12+ Adv. Components
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              5 - Landing page
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              3 Dashboard Layouts
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Documentation
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Access to support forums
            </li>
          </ul>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" lg="4">
      <v-card class="h-100">
        <v-card-title>
          <h2 class="text-h2 mb-3">Standard</h2>
          <p class="text-body-1">
            For early-stage startups that want to spend more time developing and less on manual
            operations.
          </p>

          <h1 class="text-h1 mt-6 mb-3">
            $490
            <sub class="text-body-1"> /mo </sub>
          </h1>
          <v-btn variant="outlined"> Buy Extended</v-btn>
        </v-card-title>
        <v-divider />
        <v-card-item>
          <p class="text-body-1 mb-2">Everything in Multisite +</p>
          <ul>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              All Bootstrap 5 Components
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              12+ Adv. Components
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              5 - Landing page
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              3 Dashboard Layouts
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Documentation
            </li>
            <li class="d-flex align-center ga-1 py-1">
              <v-icon icon="tabler-progress-check" size="18" color="success" />
              Access to support forums
            </li>
          </ul>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.price-card-title {
  position: relative;
  &__tag {
    position: absolute;
    top: -5px;
    right: 0;
  }
}
</style>
