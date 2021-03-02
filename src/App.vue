<template>
  <div id="app">
    <myheader/>
    <top id="top"></top>
    <about id="about"></about>
    <skill id="skill"></skill>
    <work id="work"></work>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import myheader from "./components/myheader"
import top from "./components/section/top"
import about from "./components/section/about"
import skill from "./components/section/skill"
import work from "./components/section/work"
export default {
  name: "App",
  components: {
    myheader,
    top, about, skill, work
  }
};
</script>

<style>
#app {
  /*font-family: 'Meiryo','Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Meiryo','serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#about, #skill, #work {
  margin-top: 3em;
}
</style>
