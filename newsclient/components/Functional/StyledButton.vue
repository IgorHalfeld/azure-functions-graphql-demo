<template functional>
  <button class="button" :style="{ ...props.styles }" @click="props.clickFn">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: white;
  border: 1px solid #f78fb3;
  border-radius: 8px;
  font-family: 'Open Sans';
  font-size: 1rem;
  font-weight: 300;
  color: #f78fb3;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    color: white;
    background-color: #f78fb3;
  }
}
</style>
