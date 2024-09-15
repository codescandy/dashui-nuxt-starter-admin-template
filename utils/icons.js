import { Icon } from "@iconify/vue";

const aliases = {
  collapse: "tabler-chevron-up",
  complete: "tabler-check",
  cancel: "tabler-x",
  close: "tabler-x",
  delete: "tabler-x",
  clear: "tabler-x",
  success: "tabler-circle-check",
  info: "tabler-info-circle",
  warning: "tabler-alert-circle",
  error: "tabler-x",
  prev: "tabler-chevron-left",
  next: "tabler-chevron-right",
  checkboxOn: "tabler-square-rounded-check-filled",
  checkboxOff: "tabler-square-rounded",
  checkboxIndeterminate: "tabler-square-rounded-minus-filled",
  delimiter: "tabler-circle",
  sort: "tabler-arrow-up",
  expand: "tabler-chevron-down",
  menu: "tabler-menu-2",
  subgroup: "tabler-caret-down",
  dropdown: "tabler-chevron-down",
  radioOn: "tabler-circle-check-filled",
  radioOff: "tabler-wash-dryclean",
  edit: "tabler-pencil",
  loading: "tabler-refresh",
  first: "tabler-player-skip-back",
  last: "tabler-player-skip-forward",
  unfold: "tabler-arrows-move-vertical",
  file: "tabler-paperclip",
  plus: "tabler-plus",
  minus: "tabler-minus",
  sortAsc: "tabler-arrow-up",
  sortDesc: "tabler-arrow-down",
};

export const iconify = {
  component: (props) => h(Icon, props),
};

export const icons = {
  defaultSet: "iconify",
  aliases,
  sets: {
    iconify,
  },
};
