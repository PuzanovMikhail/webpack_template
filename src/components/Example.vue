<template>
  <section>
    <div class="container">

      <p>Webpack message: {{ message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    }
  },
  created (){
  this.message = this.$store.getters.getMessage
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  color: #00FF00;
}
img {
  max-width: 200px;
}
</style>
