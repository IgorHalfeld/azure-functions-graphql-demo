<template functional>
  <h1 :style="props.styles || {}" class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 2rem;
  color: #9e71ab;
}
</style>
