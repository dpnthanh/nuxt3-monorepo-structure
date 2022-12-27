<template>
  <button class="base-button">
    <slot />
  </button>
</template>
<style>
.base-button {
  background-color: #f00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
