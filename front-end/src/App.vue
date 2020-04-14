<template>
  <div id="app">
  <div class="header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Publisher">Publisher</router-link> |
      <router-link to="/ESRB">ESRB</router-link> |
      <router-link to="/Console">Console</router-link> |
      <router-link to="/Modify">Modify</router-link>
    </div>
    </div>
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/admin">Admin</router-link>
    <p><a href="https://github.com/BYU-CS-260-Winter-2020/CreativeProject4.git">github</a></p>
  </div>
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: pink;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: blue;
}

.content {
  padding: 10px 100px;
}
</style>
