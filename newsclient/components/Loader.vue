<template>
  <div
    :style="{
      backgroundColor: backgroundColor
    }"
    class="loading"
  >
    <div
      :style="{
        borderLeftColor: color,
        animationDuration: '.6s',
        width: size,
        height: size
      }"
      class="loading-spinner"
    />
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    color: { type: String, default: '#f78fb3' },
    size: { type: String, default: '50px' },
    backgroundColor: { type: String, default: 'rgba(0, 0, 0, 0.8)' }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;

  &-spinner {
    border: 8px solid #ccc;
    border-radius: 50%;
    background-size: cover;
    animation: spin 1s linear infinite;
    position: relative;
  }
}
</style>
