<script setup>
import OverView from "@/components/dashboard/project/OverView.vue";
import TasksPerformance from "@/components/dashboard/project/TasksPerformance.vue";
import ActiveProjects from "@/components/dashboard/project/ActiveProjects.vue";
import MyTask from "@/components/dashboard/project/MyTask.vue";
import Teams from "@/components/dashboard/project/Teams.vue";
const route = useRoute();

const layoutClassic = route.path.includes("horizontal");
</script>
<template>
  <div class="project-dashboard ma-n1">
    <div :class="`project-dashboard__background-${layoutClassic ? 'horizontal' : 'classic'}`" />
  </div>

  <v-container fluid>
    <GlobalsHeader title="Projects" is-btn btn-color="light" btn-text="Create New Project" />
    <over-view />

    <div class="pb-5">
      <v-row>
        <v-col lg="8" cols="12">
          <active-projects />
        </v-col>
        <v-col lg="4" cols="12">
          <tasks-performance />
        </v-col>
      </v-row>
    </div>

    <div class="pb-5">
      <v-row>
        <v-col lg="6" cols="12">
          <my-task />
        </v-col>
        <v-col lg="6" cols="12">
          <teams />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.project-dashboard-background {
  background: rgba(var(--v-theme-primary));
  padding-bottom: 8.5rem;
  padding-top: 3rem;
  position: absolute;
  top: 0;
}

.project-dashboard {
  position: relative;
  &__background-classic {
    @extend .project-dashboard-background;
    width: 100%;
    left: 0px;
  }

  &__background-horizontal {
    @extend .project-dashboard-background;
    width: 200%;
    transform: translate(-20%);
  }
}
</style>
