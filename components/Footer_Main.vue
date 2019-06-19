<template>
  <!-- Footer Bar -->
  <div class="Footer">
    <div class="container">
      <div class="content">
        <div class="Footer-items">
          <div class="Footer-logo">
            <Logo/>
          </div>
          <div class="Footer-social">
            <ul>
              <li class="facebook">
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'facebook']"/>
                </a>
              </li>
              <li class="instagram">
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'instagram']"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="Footer-items">
          <div class="Footer-copy">
            <p>©{{ new Date().getFullYear() }} East Coast Cricket Club. All rights Reserved.</p>
          </div>
          <div class="Footer-credits">
            <p>Design and Developed by HoloDzine Consultants</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/babel'>
import Logo from "./Logo";
import Menu from "./Menu";

export default {
  components: {
    Logo,
    Menu
  }
};
</script>
