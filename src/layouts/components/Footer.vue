<template>
  <div class="footer">
    <authorized :authority="['admin']">
      <div>vue-demo @2021</div>
    </authorized>
  </div>
</template>

<style lang="scss">
.footer {
  height: 100%;
  padding-left: 20px;
  line-height: 60px;
  border-top: 1px solid $border-color;
}
</style>
