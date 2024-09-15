<script setup>
import { useDisplay } from "vuetify";
import { Example, Example2 } from "./__code";
import google from "/images/components/bottom-sheet/google.png";
import hangouts from "/images/components/bottom-sheet/hangouts.png";
import inbox from "/images/components/bottom-sheet/inbox.png";
import keep from "/images/components/bottom-sheet/keep.png";
import messenger from "/images/components/bottom-sheet/messenger.png";

const display = useDisplay();

const listSheet = ref(false);

const listItem = [
  { img: keep, title: "Keep" },
  { img: inbox, title: "Inbox" },
  { img: hangouts, title: "Hangouts" },
  { img: messenger, title: "Messenger" },
  { img: google, title: "Google+" },
];
</script>

<template>
  <div id="example">
    <GlobalsIntro title="Example">
      The following are a collection of examples that demonstrate more advanced and real world use
      of the
      <code>v-bottom-sheet</code> component.
    </GlobalsIntro>

    <!-- Music Player -->
    <div>
      <GlobalsIntro title="Music Player">
        Using a inset bottom sheet, you can make practical components such as this simple music
        player.
      </GlobalsIntro>
      <GlobalsCodePre :code="Example">
        <v-bottom-sheet inset>
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Click Me"></v-btn>
          </template>

          <v-sheet>
            <v-progress-linear color="primary" model-value="20" rounded="0"></v-progress-linear>

            <v-list>
              <v-list-item>
                <v-list-item-title>The Walker</v-list-item-title>

                <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>

                <template #append>
                  <v-btn icon="tabler-player-track-prev-filled" variant="text"></v-btn>

                  <v-btn
                    :class="{ 'mx-5': display.mdAndUp.value }"
                    icon="tabler-pause"
                    variant="text"
                  ></v-btn>

                  <v-btn
                    :class="{ 'me-3': display.mdAndUp.value }"
                    class="ms-0"
                    icon="tabler-player-track-next-filled"
                    variant="text"
                  ></v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-bottom-sheet>
      </GlobalsCodePre>
    </div>

    <!-- List -->
    <div>
      <GlobalsIntro title="Open In List">
        By combining a functional list into a bottom sheet, you can create a simple ‘open in’
        component.
      </GlobalsIntro>
      <GlobalsCodePre :code="Example2">
        <v-bottom-sheet v-model="listSheet">
          <template #activator="{ props }">
            <v-btn v-bind="props" text="Click Me" />
          </template>
          <v-sheet>
            <v-list>
              <v-list-subheader>Open in</v-list-subheader>

              <v-list-item
                v-for="tile in listItem"
                :key="tile.title"
                :prepend-avatar="tile.img"
                :title="tile.title"
                @click="listSheet = false"
              ></v-list-item>
            </v-list>
          </v-sheet>
        </v-bottom-sheet>
      </GlobalsCodePre>
    </div>
  </div>
</template>
