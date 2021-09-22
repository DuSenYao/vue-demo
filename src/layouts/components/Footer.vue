<template>
  <div class="footer">
    <Authorized :authority="['admin']">
      <div>vue-demo @2021</div>
    </Authorized>
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
