<template>
  <div id="app">
    <header>
      <nav class="container">
        <h1>TodoList-Lite</h1>
      </nav>
    </header>
    <main class="container">
      <div class="option"><checkbox style="width:32px;height:32px;" v-model="filter"></checkbox><div>隱藏完成選項</div></div>
      <todo-list group="list"></todo-list>
    </main>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import Checkbox from './components/Checkbox.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    Checkbox
  },
  computed: {
    filter: {
      get () {
        return this.$store.state.filter
      },
      set (value) {
        this.$store.commit('filter', value)
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
}

header {
  height: 60px;
  background-color: rgb(123,155,77);
  box-shadow: 0px 2px 2px 2px #cccccc;
}

header > nav > h1 {
  padding: 14px;
  margin: 0px;
  color: white;
}

main {
  padding: 12px;
  overflow: hidden;
  width: 100%;
}

main > div.option {
  text-align: right;
}

main > div.option > * {
  display: inline-block;
  vertical-align: middle;
}

</style>
