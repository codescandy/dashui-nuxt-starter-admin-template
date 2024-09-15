<script setup>
import { Card } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import timeline1 from "/images/components/timeline/1.png";
import timeline2 from "/images/components/timeline/2.jpeg";
</script>
<template>
  <div id="card">
    <GlobalsIntro title="Card Timeline"> </GlobalsIntro>
    <GlobalsCodePre :code="Card" background>
      <v-card class="mx-auto" max-width="450">
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
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
