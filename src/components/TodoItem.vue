<template>
  <div id="todo-item" :class="{ finished: finished }">
    <checkbox class="checkbox" v-model="finished" />
    <edit-text class="edittext" v-model="text" />
    <div class="right">
      <img @click="del()" src="../assets/ic_delete.svg" />
    </div>
  </div>
</template>

<script>
import Checkbox from '../components/Checkbox.vue'
import EditText from '../components/EditText.vue'
export default {
  name: 'TodoItem',
  components: {
    Checkbox: Checkbox,
    EditText: EditText
  },
  data () {
    return {
      finished: false,
      text: '測試測試測試測試'
    }
  },
  methods: {
    del (id) {
    }
  }
}
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box
#todo-item
  width 100%
  height 100%
  padding 6px
  font-size 0px
  position relative
  >*
    display inline-block
    vertical-align middle
  &:before
    content ''
    width 0
    height 100%
    display inline-block
    vertical-align middle
  .checkbox
    width 36px
    height 36px
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
  &:hover
    .right
      display block
.finished
  opacity 0.6
  &:after
    content ''
    position absolute
    height 1px
    background-color #9e9e9e
    left 10px
    right 10px
    top 50%
</style>
