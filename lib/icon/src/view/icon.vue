<template>
  <span :class="{
    [`${prefix}icon`]: true,
    [`${prefix}icon-${type}`]: type,
    [`${prefix}icon-${size}`]: size
  }"></span>
</template>

<script>
export default {
  name: 'vIcon',

  inject: {
    prefix: {
      default: 'vext-'
    }
  },

  props: {
    type: String,
    size: {
      type: String,
      default: 'm',
      validator: function(value) {
        return ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].indexOf(value) !== -1;
      }
    }
  }
};
</script>
