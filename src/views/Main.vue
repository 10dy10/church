<template>
  <div class="wrap">
    <Header />
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/common/TheHeader.vue";
import Nav from '../components/common/TheNav.vue'

export default {
  methods: {},
  components: {
    Header,
    Nav,
  },
};
</script>

<style>
@import '../css/common.css';
.wrap {
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
}
</style>
