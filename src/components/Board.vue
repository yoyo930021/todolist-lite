<template>
  <div class="board">
    <div>
      <p>{{ group }}</p>
      <todo-list :group="group"></todo-list>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList.vue'
export default {
  name: 'board',
  components: {
    TodoList: TodoList
  },
  props: {
    group: String
  }
}
</script>


<style lang="stylus" scoped>
*
  box-sizing border-box
.board
  width 100%
  height 100%
  position relative
  padding: 12px
  div
    border-radius 6px
    background-color rgb(226, 228, 230)
    padding: 6px
    p
      margin-left 12px
      margin-top 6px
      margin-bottom 6px
</style>

