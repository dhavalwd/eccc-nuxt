<template>
  <header class="Header">
    <div class="Header-inner">
      <Logo/>
      <Menu/>
    </div>
  </header>
</template>

<script type='text/babel'>
import Logo from "./Logo";
import Menu from "./Menu";

export default {
    components: {
        Logo,
        Menu
    }
}
</script>
