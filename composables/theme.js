import { useDisplay } from "vuetify";

export const themeConfig = () => {
  const { name } = useDisplay();

  // Fixed Value
  const themeHeaderHeight = "60";
  const themeSidebarWidth = "259";
  const themeName = "light";
  // Theme Grid Mode
  const smallDisplay = computed(() => {
    if (name.value === "sm" || name.value === "xs") {
      return true;
    } else {
      return false;
    }
  });

  const themeColors = theme.themes.light.colors;

  return {
    themeHeaderHeight,
    themeSidebarWidth,
    smallDisplay,
    themeName,
    themeColors,
  };
};
