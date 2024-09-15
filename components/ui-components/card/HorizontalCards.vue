<script setup>
import { HorizontalCards } from "./__code";
import card7 from "/images/components/card/7.jpg";
import card8 from "/images/components/card/8.png";
</script>

<template>
  <div id="horizontal-cards">
    <GlobalsIntro title="Horizontal cards">
      Using a combination of flex and utility classes, cards can be made horizontal in a
      mobile-friendly and responsive way.
    </GlobalsIntro>
    <GlobalsCodePre :code="HorizontalCards">
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" theme="dark" class="my-2">
            <v-card-title> Unlimited music now </v-card-title>
            <v-card-subtitle
              >Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-subtitle>
            <v-card-actions>
              <v-btn variant="text" color="white"> Listen Now </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="#1F7087" theme="dark" class="my-2">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title> Supermodel </v-card-title>
                <v-card-subtitle>Foster the People</v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" color="white" variant="outlined" size="small">
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img :src="card7"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" class="my-1">
          <v-card color="#952175" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title> Halcyon Days </v-card-title>

                <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                <v-card-actions>
                  <icon-btn icon="tabler-play" />
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img :src="card8"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
