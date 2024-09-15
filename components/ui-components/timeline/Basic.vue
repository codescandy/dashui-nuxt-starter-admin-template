<script setup>
import { Basic } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import timeline1 from "/images/components/timeline/1.png";
import timeline2 from "/images/components/timeline/2.jpeg";
</script>
<template>
  <div id="basic">
    <GlobalsIntro title="Basic Timeline"> </GlobalsIntro>

    <GlobalsCodePre :code="Basic" background>
      <v-card class="mx-auto" max-width="450">
        <v-card-text>
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
                    <p class="text-body-1 font-weight-medium text-high-emphasis mb-0">
                      Rebecca Godman
                    </p>
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
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
