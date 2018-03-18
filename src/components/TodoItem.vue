<template>
  <div class="todo-item" :class="{ finished: item.finished }">
    <div class="move">&#9776;</div>
    <checkbox class="checkbox" :value="item.finished" @input="changeFinish" />
    <div class="index">{{ index+1 + '.' }}</div>
    <edit-text class="edittext" :value="item.text" :finished="item.finished" @input="changeText" />
    <div class="right">
      <img @click="del(index)" src="../assets/ic_delete.svg" />
    </div>
  </div>
</template>

<script>
import Checkbox from '../components/Checkbox.vue'
import EditText from '../components/EditText.vue'
export default {
  name: 'TodoItem',
  props: {
    item: Object,
    index: Number
  },
  components: {
    Checkbox: Checkbox,
    EditText: EditText
  },
  methods: {
    del (index) {
      this.$emit('del', index)
    },
    changeFinish (value) {
      this.$emit('changeFinish', this.index, value)
    },
    changeText (value) {
      this.$emit('changeText', this.index, value)
    }
  }
}
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box
.todo-item
  width 100%
  height 100%
  padding 6px
  font-size 0px
  position relative
  border-radius 2px
  background-color white
  margin-bottom 3px
  font-family 'Courier'
  >*
    display inline-block
    vertical-align middle
  &:before
    content ''
    width 0
    height 100%
    display inline-block
    vertical-align middle
  .move
    cursor grab
    color #d8d6d6
    font-size 20px
  .checkbox
    width 36px
    height 36px
  .index
    font-size 16px
  .edittext
    width calc( 100% - 100px )
    height 36px
  .right
    display none
    position absolute
    right 6px
    top 12px
    bottom 12px
    cursor pointer
  &:hover,&:active
    background-color rgb(237,239,240)
    .right
      display block
@media all and (max-width: 600px)
  .todo-item
    .right
      display block
.finished
  opacity 0.4
</style>
