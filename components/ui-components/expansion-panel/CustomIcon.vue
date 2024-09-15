<script setup>
import { CustomIcon } from "./__code";

const panel = ref(0);
</script>
<template>
  <div id="custom-icon">
    <GlobalsIntro title="Custom Icon">
      Expand action icon can be customized with <code>expand-icon</code> prop or the
      <code>actions</code> slot. Also, use the <code>.no-icon-rotate</code> class in conjunction
      with the <code>v-expansion-panels</code> component to disable icon rotation.
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomIcon" background>
      <v-expansion-panels v-model="panel" class="no-icon-rotate">
        <v-expansion-panel>
          <v-expansion-panel-title disable-icon-rotate>
            Server Down
            <template #actions>
              <v-icon size="18" icon="tabler-alert-circle" color="error" />
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy
            wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan
            topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice
            cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut
            gummi bears caramels icing marzipan.
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title disable-icon-rotate>
            Sales report generated
            <template #actions>
              <v-icon size="18" icon="tabler-check" color="success" />
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake
            macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar
            biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop.
            Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy
            toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream
            danish jelly-o brownie powde
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title disable-icon-rotate>
            High Memory usage
            <template #actions>
              <v-icon size="18" icon="tabler-alert-triangle" color="warning" />
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake
            chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans
            danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish.
            Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice
            cream danish chocolate cake topping ice cream. Brownie muffin gingerbread.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </GlobalsCodePre>
  </div>
</template>
