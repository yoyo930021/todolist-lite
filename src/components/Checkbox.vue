<template>
  <div class="checkbox">
    <div @click="change(!value)">
      <div :class="{finish: value}"></div>
    </div>
  </div>
</template>

<script>
import _debounce from 'lodash/debounce.js'
export default {
  name: 'Checkbox',
  props: {
    value: Boolean
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    change: _debounce(function (value) {
      this.$emit('input', value)
    })
  }
}
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box
.checkbox
  width 100%
  height 100%
  padding 8px
  div
    width 100%
    height 100%
    border-radius 100%
    border 1px solid #9e9e9e
    cursor pointer
    div
      width 100%
      height 100%
      border 3px solid white
    .finish
      background-color #9e9e9e
    &:hover,&:active
      div
        background-color #e0cccc
      .finish
        background-color #d8d6d6

</style>
