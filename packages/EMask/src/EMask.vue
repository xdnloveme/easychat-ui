<template>
  <transition name="easychat_modal_mask">
    <div
      ref="mask"
      v-show="visible"
      @click="handleClose"
      :style="maskStyle"
      class="easychat-modal-mask"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'EMask',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    maskStyle() {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },
  mounted() {
    document.body.appendChild(this.$refs.mask)

    this.$once('hook:beforeDestroy', () => {
      document.body.removeChild(this.$refs.mask)
    })
  },
  methods: {
    handleClose(e) {
      this.$emit('handleClose', false)
    },
  },
}
</script>

<style scoped lang="scss">
.easychat-modal-mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  height: 100%;
  z-index: 1000;
}

.easychat_modal_mask-enter-active,
.easychat_modal_mask-leave-active {
  transition: opacity 0.3s;
}

.easychat_modal_mask-enter,
.easychat_modal_mask-leave-to {
  opacity: 0;
}
</style>
