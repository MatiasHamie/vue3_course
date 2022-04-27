export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "layout daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "layout daybook-no-entry" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "layout daybook-no-entry" */ "@/modules/daybook/views/EntryView.vue"
        ),
    },
  ],
};
