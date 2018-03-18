<template>
  <div class="add-item">
    <input type="text" v-model="text" />
    <div class="button" @click="add">Add</div>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  props: {
    group: String
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    add () {
      let item = {
        id: this.$store.state.maxId,
        finished: false,
        text: this.text
      }
      this.$store.commit('addItem', { group: this.group, value: item })
      this.$store.commit('incrId')
    }
  }
}
</script>

<style lang="stylus" scoped>
*
  box-sizing border-box
.add-item
  width 100%
  height 100%
  padding 3px 6px
  font-size 0px
  position relative
  margin-top 6px
  >*
    display inline-block
    vertical-align middle
  &:before
    content ''
    width 0
    height 100%
    display inline-block
    vertical-align middle
  input
    width calc( 100% - 70px )
    border-radius 3px
    border 1px solid #9e9e9e
    outline none
    padding 6px
    font-size 16px
  .button
    width 60px
    margin-left 10px
    border-radius 6px
    background-color rgb(123,155,77)
    color white
    font-size 16px
    padding 3px
    text-align center
    cursor pointer
    &:hover,&:active
      opacity 0.6
</style>
