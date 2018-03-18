<template>
  <div class="edit-text">
    <div  :class="{ finished: finished }" contenteditable="true" @input="change">{{ value }}</div>
  </div>
</template>

<script>
import _debounce from 'lodash/debounce.js'
export default {
  name: 'editText',
  props: {
    value: String,
    finished: Boolean
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      edit: false
    }
  },
  methods: {
    change: _debounce(function (value) {
      this.$emit('input', value.target.textContent)
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box
.edit-text
  width 100%
  height 100%
  padding 6px
  &:before
    content ''
    width 0
    height 100%
    display inline-block
    vertical-align middle
  div
    width 100%
    font-size 16px
    display inline-block
    vertical-align middle
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
  div[contenteditable="true"]:active,div[contenteditable="true"]:focus
    border-radius 3px
    display inline-block
    vertical-align middle
    border 1px solid #9e9e9e
    text-overflow none
    white-space normal
    outline none
    padding 2px
    font-size 14px
  .finished
    text-decoration:line-through
</style>
