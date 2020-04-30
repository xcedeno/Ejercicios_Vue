<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" alt="logo-robot" class="logo">
            Construye un Robot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- <HomePage/> -->
      <br>
      <hr>
      <br>
      <robot-builder></robot-builder>
    </main>
  </div>
</template>

<script>
//import HomePage from './home/HomePage.vue';
import RobotBuilder from './constructor/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    //HomePage,
    RobotBuilder
  }
}
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
header {
  background-color: #999;
  width: 80%;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
main{
  margin: 0 auto;
  background-color: white;
  width: 80%;
  min-height: 400px;
}
</style>
