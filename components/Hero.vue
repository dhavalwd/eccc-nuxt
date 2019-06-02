<template>
  <!-- Navigation Bar -->
    <div class="Hero is-fullheight" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="Hero-content">
        <h1>
            <slot name="heroTitle"></slot>
        </h1>
        <slot name="heroCTA"></slot>
      </div>
      <div class="Hero-scroll">
        <slot name="heroScroll"></slot>
      </div>
    </div>
</template>

<script type='text/babel'>

export default {
  props: ['backgroundUrl']
}
</script>