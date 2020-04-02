<template>
  <div class="tab-ber">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBer"
  }
</script>

<style scoped>
.tab-ber{
  height: 44px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  font-size: 12px;
  box-shadow: 0px 1px 1px rgba(100,100,100,0.2);

}

</style>