<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :class="{
      [`${prefix}button`]: true,
      [`${prefix}${size}`]: size,
      [`${prefix}button-${shape}`]: shape,
      [`${prefix}button-${type}`]: type,
      [`${prefix}button-loading`]: loading,
      [className]: className
    }"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'vButton',

  inject: {
    prefix: {
      default: 'vext-'
    }
  },

  props: {
    shape: {
      type: String,
      default: 'normal',
      validator: function(value) {
        return ['normal', 'text', 'warning', 'ghost'].indexOf(value) !== -1;
      }
    },
    level: {
      type: String,
      default: 'normal',
      validator: function(value) {
        return ['normal', 'primary', 'secondary', 'dark', 'light'].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    htmlType: {
      type: String,
      default: 'button',
      validator: function(value) {
        return ['submit', 'reset', 'button'].indexOf(value) !== -1;
      }
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },

  computed: {
    type() {
      const typeMap = {
        normal: {
          primary: 'primary',
          secondary: 'secondary',
          normal: 'normal',
          dark: 'primary',
          light: 'normal'
        },
        ghost: {
          primary: 'dark',
          secondary: 'dark',
          normal: 'light',
          dark: 'dark',
          light: 'light'
        },
        warning: {
          primary: 'primary',
          secondary: 'normal',
          normal: 'normal',
          dark: 'primary',
          light: 'normal'
        },
        text: {
          primary: 'primary',
          secondary: 'secondary',
          normal: 'normal',
          dark: 'primary',
          light: 'normal'
        }
      };

      // console.log(typeMap[this.shape][this.level])
      return typeMap[this.shape][this.level];
    }
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>
