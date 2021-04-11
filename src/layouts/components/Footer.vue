<template>
  <div class="footer">
    <Authorized :authority="['admin']">
      <p>vue-demo @2021</p>
    </Authorized>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #999;
}
</style>
