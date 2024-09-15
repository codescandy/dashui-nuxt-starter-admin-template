<script setup>
import { LabelSlot } from "./__code";

const checkbox = ref(false);
</script>

<template>
  <div id="label-slot">
    <GlobalsIntro title="Label Slot">
      Checkbox labels can be defined in <code>label</code> slot - that will allow to use HTML
      content.
    </GlobalsIntro>
    <GlobalsCodePre :code="LabelSlot" flex>
      <v-checkbox v-model="checkbox">
        <template #label>
          <div>
            I agree that
            <v-tooltip location="bottom">
              <template #activator="{ props }">
                <a
                  href="https://vuetifyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-bind="props"
                  @click.stop
                >
                  Vuetify
                </a>
              </template>
              Opens in new window
            </v-tooltip>
            is awesome
          </div>
        </template>
      </v-checkbox>
    </GlobalsCodePre>
  </div>
</template>
