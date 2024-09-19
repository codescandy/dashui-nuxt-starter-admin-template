export default {
  scrollBehavior(to, from, savedPosition) {
    if (to.hash && !savedPosition) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    } else {
      return { top: 0 };
    }
  },
};
