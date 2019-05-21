<template>
  <div>
    <left-side-menu></left-side-menu>
    <my-header></my-header>
    <customize></customize>
  </div>
</template>

<script>
import leftSideMenu from "./pages/leftSideMenu";
import myHeader from "./pages/header"
import customize from "./pages/customize"
export default {
  props: {},
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    leftSideMenu,
    myHeader,
    customize,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>