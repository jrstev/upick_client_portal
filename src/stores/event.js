import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useTimeline = defineStore("event", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      timeline: 0,
      name: "Eduardo",
      isAdmin: true,
    };
  },
  // other options...
});
