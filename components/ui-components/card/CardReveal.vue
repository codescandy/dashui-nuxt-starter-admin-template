<script setup>
import { CardReveal } from "./__code";

const reveal = ref(false);
</script>

<template>
  <div id="card-reveal">
    <GlobalsIntro title="Card Reveal">
      Using <code>v-expand-transition</code> and a <code>@click</code> event you can have a card
      that reveals more information once the button is clicked, activating the hidden card to be
      revealed.
    </GlobalsIntro>
    <GlobalsCodePre :code="CardReveal">
      <v-card class="mx-auto" max-width="344" color="primary">
        <v-card-text class="text-white">
          <div>Word of the Day</div>
          <p class="text-h4 text-white">el·ee·mos·y·nar·y</p>
          <p>adjective</p>
          <div>
            relating to or dependent on charity; charitable; charitable donations. Pertaining to
            alms.<br />
            "an eleemosynary educational institution."
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="text" color="teal-accent-4" @click="reveal = true"> Click Me </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card v-if="reveal" class="v-card--reveal" style="height: 100%" color="secondary">
            <v-card-text class="pb-0 text-white">
              <p class="text-h4 text-white">Origin</p>
              <p>
                late 16th century (as a noun denoting a place where alms were distributed): from
                medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek
                eleēmosunē ‘compassion’
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="teal-accent-4" @click="reveal = false"> Close </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
