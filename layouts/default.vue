<template>
  <div>
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Footer,
      Header
    }
  }
</script>

<style lang="sass" type="text/sass">
  @import '../node_modules/bulma/bulma'
  @import '../node_modules/bulma-timeline/dist/css/bulma-timeline'
</style>

<style lang="scss" type="text/scss">
  @import '../styles/main.scss';
</style>
