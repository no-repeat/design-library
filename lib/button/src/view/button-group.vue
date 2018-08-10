<template>
  <div class="vext-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vButtonGroup',
  inject: {
    prefix: {
      default: 'vext-'
    }
  }
};
</script>
