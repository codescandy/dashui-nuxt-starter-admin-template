export const Basic = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import timeline1 from '/images/components/timeline/1.png'
  import timeline2 from '/images/components/timeline/2.jpeg'
</script>

<template>
  <v-timeline
    side="end"
    align="start"
    line-inset="8"
    truncate-line="both"
    density="compact"
  >
    <!-- SECTION Timeline Item: Flight -->
    <v-timeline-item dot-color="error" size="x-small">
      <!-- 👉 Header -->
      <div class="d-flex justify-space-between align-center gap-2 flex-wrap">
        <span class="app-timeline-title"> Get on the flight </span>
        <span class="app-timeline-meta">3rd October</span>
      </div>

      <!-- 👉 Content -->
      <div class="app-timeline-text mb-1">
        <span>Charles de Gaulle Airport, Paris</span>
        <VIcon icon="tabler-arrow-right" class="mx-2" />
        <span>Heathrow Airport, London</span>
      </div>

      <p class="app-timeline-meta mb-2">6:30 AM</p>

      <div class="app-timeline-text d-flex align-center gap-2">
        <div>
          <v-img :src="timeline1" :width="22" />
        </div>

        <span>booking-card.pdf</span>
      </div>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Timeline Item: Interview Schedule -->
    <v-timeline-item size="x-small" dot-color="primary">
      <!-- 👉 Header -->
      <div class="d-flex justify-space-between align-center flex-wrap mb-1">
        <div class="app-timeline-title">Interview Schedule</div>
        <span class="app-timeline-meta">4th October</span>
      </div>

      <div class="app-timeline-text">
        Bonbon gummies caramels brownie topping fruitcake gingerbread jelly-o marzipan.
      </div>

      <!-- 👉 Divider -->
      <VDivider class="my-2" />

      <!-- 👉 Person -->
      <div class="d-flex justify-space-between align-center flex-wrap">
        <!-- 👉 Avatar & Personal Info -->
        <div class="d-flex align-center mt-2">
          <VAvatar size="32" class="me-2" :image="avatar2" />
          <div class="d-flex flex-column">
            <p class="text-body-1 font-weight-medium text-high-emphasis mb-0">Rebecca Godman</p>
            <span class="text-body-2">Javascript Developer</span>
          </div>
        </div>

        <!-- 👉 Person Actions -->
        <div>
          <IconBtn>
            <VIcon size="20" icon="tabler-message" />
          </IconBtn>
          <IconBtn>
            <VIcon size="20" icon="tabler-phone" />
          </IconBtn>
        </div>
      </div>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Timeline Item: Puma Shoes -->
    <v-timeline-item size="x-small" dot-color="info">
      <div class="d-flex align-start flex-sm-row flex-column mb-3 gap-y-2">
        <v-img height="62" width="62" :src="timeline2" class="rounded me-4" />

        <div>
          <!-- Header -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title"> Sold Puma POPX Blue Color </span>
            <span class="app-timeline-meta">January, 10</span>

            <span class="app-timeline-meta">January, 10</span>
          </div>

          <span class="app-timeline-text"
            >PUMA presents the latest shoes from its collection. Light &amp; comfortable
            made with highly durable material.</span
          >
        </div>
      </div>

      <!-- 👉 Timeline Item: Meta Content -->
      <div class="d-flex justify-space-between flex-column flex-sm-row gap-3">
        <div class="text-body-1-center">
          <h6 class="text-body-1 font-weight-medium">Customer</h6>
          <span class="text-body-2">Micheal Scott</span>
        </div>
        <div class="text-body-1-center">
          <h6 class="text-body-1 font-weight-medium">Price</h6>
          <span class="text-body-2">$375.00</span>
        </div>
        <div class="text-body-1-center">
          <h6 class="text-body-1 font-weight-medium">Quantity</h6>
          <span class="text-body-2">1</span>
        </div>
      </div>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Design Review -->
    <v-timeline-item size="x-small" dot-color="success">
      <!-- 👉 Header -->
      <div class="d-flex justify-space-between">
        <span class="app-timeline-title"> Design Review </span>
        <span class="app-timeline-meta">September, 20</span>
        <span class="app-timeline-meta">September, 20</span>
      </div>

      <!-- 👉 Content -->
      <p class="app-timeline-text">
        Weekly review of freshly prepared design for our new application.
      </p>

      <div class="d-flex align-center">
        <VAvatar size="32" :image="avatar1" class="me-2" />
        <h6 class="text-body-1 font-weight-medium">John Doe (Client)</h6>
      </div>
    </v-timeline-item>
    <!-- !SECTION -->
  </v-timeline>
</template>`;

export const Card = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import timeline1 from '/images/components/timeline/1.png'
  import timeline2 from '/images/components/timeline/2.jpeg'
</script>

<template>
  <v-timeline
    side="end"
    align="start"
    truncate-line="both"
    density="compact"
    class="v-timeline-density-compact v-timeline-icon-only"
  >
    <!-- SECTION Flight -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-send" color="primary" />
      </template>

      <v-card class="bg-light-error" variant="text">
        <v-card-text>
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title">Get on the flight</span>
            <small class="app-timeline-meta">Wednesday</small>
          </div>

          <div class="app-timeline-text mb-1">
            <span>Charles de Gaulle Airport, Paris</span>
            <v-icon size="20" icon="tabler-arrow-right" class="mx-2" />
            <span>Heathrow Airport, London</span>
          </div>
          <p class="app-timeline-meta mb-1">6:30 AM</p>

          <div class="app-timeline-text d-flex align-center gap-2">
            <div>
              <v-img :src="timeline1" :width="22" />
            </div>

            <span>booking-card.pdf</span>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Interview Schedule -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-brush" color="success" />
      </template>

      <v-card class="bg-light-primary" variant="text">
        <v-card-text>
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title">Interview Schedule</span>
            <span class="app-timeline-meta">April, 18</span>
          </div>

          <p class="app-timeline-text mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos,
            voluptates voluptas rem veniam expedita.
          </p>

          <!-- 👉 Divider -->
          <v-divider class="my-4" />

          <!-- 👉 Person -->
          <div class="d-flex justify-space-between align-center">
            <!-- 👉 Avatar & Personal Info -->
            <span class="d-flex align-center">
              <v-avatar size="40" :image="avatar2" class="me-2" />

              <div>
                <h6 class="text-body-1 font-weight-medium">Rebecca Godman</h6>
                <span class="text-body-2">Javascript Developer</span>
              </div>
            </span>

            <!-- 👉 Person Actions -->
            <div>
              <icon-btn>
                <v-icon size="20" icon="tabler-message" />
              </icon-btn>
              <icon-btn>
                <v-icon size="20" icon="tabler-phone" />
              </icon-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Puma Shoes -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-basket" color="error" />
      </template>

      <v-card class="bg-light-info" variant="text">
        <!-- 👉 content -->
        <v-card-text>
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title">Sold Puma POPX Blue Color</span>
            <span class="app-timeline-meta">January, 10</span>
          </div>

          <div class="d-flex align-sm-center flex-sm-row flex-column mb-3 gap-y-2">
            <v-img height="62" width="62" :src="timeline2" class="rounded me-4" />

            <div>
              <span class="app-timeline-text">
                PUMA presents the latest shoes from its collection. Light &amp; comfortable
                made with highly durable material.
              </span>
            </div>
          </div>

          <div class="d-flex justify-space-between flex-column flex-sm-row gap-3">
            <div class="text-body-1-center">
              <p class="text-high-emphasis text-body-1 font-weight-medium mb-0">Customer</p>
              <span class="text-body-2">Micheal Scott</span>
            </div>
            <div class="text-body-1-center">
              <p class="text-high-emphasis text-body-1 font-weight-medium mb-0">Price</p>
              <span class="text-body-2">$375.00</span>
            </div>
            <div class="text-body-1-center">
              <p class="text-high-emphasis text-body-1 font-weight-medium mb-0">Quantity</p>
              <span class="text-body-2">1</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- 👉 Design Review -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-user-circle" color="info" />
      </template>

      <v-card class="bg-light-success" variant="text">
        <v-card-text>
          <div class="d-flex justify-space-between mb-1">
            <span class="app-timeline-title">Design Review</span>
            <span class="app-timeline-meta">September, 20</span>
          </div>

          <p class="app-timeline-text mb-2">
            Weekly review of freshly prepared design for our new application.
          </p>
          <div class="d-flex align-center">
            <v-avatar size="40" class="me-2">
              <v-img :src="avatar1" />
            </v-avatar>

            <h6 class="text-body-1 font-weight-medium">John Doe (Client)</h6>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>`;

export const WithIcon = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import timeline1 from '/images/components/timeline/1.png'
  import timeline2 from '/images/components/timeline/2.jpeg'
</script>

<template>
  <v-timeline
    align="start"
    justify="center"
    truncate-line="both"
    :density="$vuetify.display.smAndDown ? 'compact' : 'default'"
    class="v-timeline-icon-only"
  >
    <!-- SECTION Timeline Item: Flight -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-plane-tilt" color="primary" />
      </template>

      <v-card>
        <v-card-text>
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title"> Get on the flight </span>
            <span class="app-timeline-meta">Wednesday</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-1">
            <span>Charles de Gaulle Airport, Paris</span>
            <v-icon size="20" icon="tabler-arrow-right" class="mx-2" />
            <span>Heathrow Airport, London</span>
          </p>

          <p class="app-timeline-meta mb-2">6:30 AM</p>

          <div class="app-timeline-text d-flex align-center gap-2">
            <div>
              <v-img :src="timeline1" :width="22" />
            </div>

            <span>booking-card.pdf</span>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Timeline Item: Interview -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-clock" color="success" />
      </template>

      <v-card>
        <v-card-text>
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title"> Interview Schedule </span>
            <span class="app-timeline-meta">April, 18</span>
          </div>

          <p class="app-timeline-text mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates
            voluptas rem veniam expedita.
          </p>

          <!-- 👉 Divider -->
          <v-divider class="my-4" />

          <!-- 👉 Person -->
          <div class="d-flex justify-space-between align-center flex-wrap gap-4">
            <!-- 👉 Avatar & Personal Info -->
            <span class="d-flex align-bottom">
              <v-avatar size="40" :image="avatar2" class="me-3" />
              <div class="d-flex flex-column">
                <h6 class="text-body-1 font-weight-medium">Rebecca Godman</h6>
                <span class="text-body-2">Javascript Developer</span>
              </div>
            </span>

            <!-- 👉 Person Actions -->
            <div>
              <icon-btn>
                <v-icon icon="tabler-message" size="20" />
              </icon-btn>
              <icon-btn>
                <v-icon icon="tabler-phone" size="20" />
              </icon-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Timeline Item: Puma Shoes -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-shopping-cart" color="warning" />
      </template>

      <v-card>
        <v-card-text>
          <div class="d-flex align-start flex-sm-row flex-column mb-3 gap-y-2">
            <v-img height="62" width="62" :src="timeline2" class="rounded me-4" />

            <div>
              <!-- 👉 Header -->
              <div class="d-flex justify-space-between align-center mb-1">
                <span class="app-timeline-title"> Sold Puma POPX Blue Color </span>
                <span class="app-timeline-meta">January, 10 </span>
              </div>
              <span class="app-timeline-text"
                >PUMA presents the latest shoes from its collection. Light &amp; comfortable
                made with highly durable material.</span
              >
            </div>
          </div>

          <!-- 👉 Timeline Item: Meta Content -->
          <div class="d-flex justify-space-between flex-sm-row flex-column gap-3">
            <div class="text-body-1-center">
              <h6 class="text-body-1 font-weight-medium">Customer</h6>
              <span class="text-body-2">Micheal Scott</span>
            </div>

            <div class="text-body-1-center">
              <h6 class="text-body-1 font-weight-medium">Price</h6>
              <span class="text-body-2">$375.00</span>
            </div>

            <div class="text-body-1-center">
              <h6 class="text-body-1 font-weight-medium">Quantity</h6>
              <span class="text-body-2">1</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Timeline Item: Design Review -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-edit" color="info" />
      </template>

      <v-card>
        <v-card-text>
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center">
            <span class="app-timeline-title"> Design Review </span>
            <span class="app-timeline-meta">September, 20</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text">
            Weekly review of freshly prepared design for our new application.
          </p>

          <div class="d-flex align-center">
            <v-avatar size="40" :image="avatar1" class="me-3" />
            <h6 class="text-body-1 font-weight-medium">John Doe (Client)</h6>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Timeline Item: Ubuntu Server -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-server" color="error" />
      </template>

      <v-card>
        <v-card-text>
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title"> Ubuntu Server </span>

            <v-chip color="error" size="small"> Inactive </v-chip>
          </div>

          <!-- 👉 Content -->
          <table class="text-body-1 w-100 mt-3">
            <tr>
              <td class="d-flex align-center pb-2">
                <v-icon icon="tabler-world" class="me-1" />
                <span>IP Address</span>
              </td>

              <td class="text-right">192.654.8.566</td>
            </tr>

            <tr>
              <td class="d-flex align-center pb-2">
                <v-icon icon="tabler-cpu" class="me-1" />
                <span>CPU</span>
              </td>

              <td class="text-right">4 Cores</td>
            </tr>

            <tr>
              <td class="d-flex align-center pb-2">
                <v-icon icon="tabler-cpu-2" class="me-1" />
                <span>Memory</span>
              </td>

              <td class="text-right">2 GB</td>
            </tr>
          </table>

          <v-divider class="my-3" />

          <div class="d-flex justify-space-between align-center">
            <div>
              <icon-btn>
                <v-icon icon="tabler-share" size="20" />
              </icon-btn>
              <icon-btn>
                <v-icon icon="tabler-reload" size="20" />
              </icon-btn>
            </div>

            <v-switch v-model="serverSwitch" />
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->

    <!-- SECTION Timeline Item: Location -->
    <v-timeline-item>
      <template #icon>
        <v-icon size="20" icon="tabler-map-pin" color="success" />
      </template>

      <v-card>
        <v-card-text>
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <div class="d-flex align-end mb-3">
              <v-icon icon="tabler-map-pin" class="me-1" />

              <span class="app-timeline-title">Location</span>
            </div>

            <v-chip color="error" size="small"> High </v-chip>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-0">Find location for the company celebration.</p>
          <p class="app-timeline-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <v-divider />

          <div class="d-flex justify-space-between mt-4 flex-wrap">
            <div>
              <icon-btn>
                <v-icon size="20" icon="tabler-link" />
              </icon-btn>

              <icon-btn>
                <v-icon size="20" icon="tabler-message" />
              </icon-btn>
              <icon-btn>
                <v-icon size="20" icon="tabler-user" />
              </icon-btn>
            </div>

            <span class="app-timeline-meta">Due date: 15th Jan</span>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!-- !SECTION -->
  </v-timeline>
</template>`;
