<template>
  <div class="todo-list">
    <draggable v-model="list" :options="{group: group, draggable: '.todo-item', handle: '.move',}">
      <transition-group name="slide" mode="out-in" tag="div">
        <todo-item v-for="(element,index) in list" :key="'list-'+element.id" :item="element" :index="index" @changeText="changeText" @changeFinish="changeFinish" @del="del"></todo-item>
        <add-item :key="'list-add'" :group="group"></add-item>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import TodoItem from '../components/TodoItem.vue'
import AddItem from '../components/AddItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoItem: TodoItem,
    draggable: draggable,
    AddItem: AddItem
  },
  props: {
    group: String
  },
  computed: {
    list: {
      get () {
        console.log(this.$store.state.board[this.group])
        return this.$store.state.board[this.group]
      },
      set (value) {
        this.$store.commit('updateList', { group: this.group, value })
      }
    }
  },
  // data () {
  //   return {
  //     list: [{
  //       id: 1,
  //       finished: false,
  //       text: '測試測試測試1'
  //     },
  //     {
  //       id: 2,
  //       finished: false,
  //       text: '測試測試測試2'
  //     },
  //     {
  //       id: 3,
  //       finished: true,
  //       text: '測試測試測試3'
  //     }]
  //   }
  // },
  watch: {
    list: function (value) {
      console.log(value)
    }
  },
  methods: {
    del (index) {
      this.$store.commit('delListItem', { group: this.group, index: index })
    },
    changeText (index, value) {
      let item = this.list[index]
      item.text = value
      this.$store.commit('changeItem', { group: this.group, index: index, value: item })
      // this.list[index].text = value
    },
    changeFinish (index, value) {
      let item = this.list[index]
      item.finished = value
      this.$store.commit('changeItem', { group: this.group, index: index, value: item })
      // this.$set(this.list[index], 'finished', value)
      // this.list[index].finished = value
    }
  }
}
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box
.todo-list
  width 100%
  height 100%
  position relative

.slide-enter-active, .slide-enter
  transition: all .3s ease

.slide-enter, .slide-leave-to
  opacity: 0

.slide-enter
  transform: translateX(-6rem)

.slide-leave, .slide-leave-active
  transition: all .4s ease

.slide-leave-to
  transform: translateX(6rem)

</style>
