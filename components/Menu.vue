<template>
  <!-- Menu -->
  <div class="Menu">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/team">Team</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script type='text/babel'>
import ClickOutside from "vue-click-outside";

export default {
  name: "quickMenu",
  props: ["size"],
  data() {
    return {
      isSmall: this.size === "small",
      isLarge: this.size === "large",
      isActive: false
    };
  },
  methods: {
    toggleMenu(e) {
      this.isActive = !this.isActive;
    },
    hide() {
      this.isActive = false;
    }
  },
  directives: {
    ClickOutside
  }
};
</script>
