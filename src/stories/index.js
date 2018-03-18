// import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import store from '../store/index'

import Checkbox from '../components/Checkbox.vue'
import EditText from '../components/EditText.vue'
import TodoItem from '../components/TodoItem.vue'
import Divider from '../components/Divider.vue'
import TodoList from '../components/TodoList.vue'
import Board from '../components/Board.vue'

storiesOf('Checkbox', module)
  .add('default', () => ({
    components: { Checkbox },
    template: '<div style="width:50px;height:50px;"><checkbox :value="false"></checkbox></div>'
  }))
  .add('checked', () => ({
    components: { Checkbox },
    template: '<div style="width:50px;height:50px;"><checkbox :value="true"></checkbox></div>'
  }))

storiesOf('EditText', module)
  .add('default', () => ({
    components: { EditText },
    template: '<div style="width:300px;height:50px;"><edit-text value="測試"></edit-text></div>'
  }))
  .add('More Text', () => ({
    components: { EditText },
    template: '<div style="width:300px;height:50px;"><edit-text value="測試測試測試測試測試測試測試測試測試測試測試測試測試"></edit-text></div>'
  }))

storiesOf('Divider', module)
  .add('default', () => ({
    components: { Divider },
    template: '<divider></divider>'
  }))

storiesOf('TodoItem', module)
  .add('default', () => ({
    components: { TodoItem },
    template: '<todo-item :item="{ finished: false, text: \'測試測試\' }" :index="0"></todo-item>'
  }))

storiesOf('TodoList', module)
  .add('default', () => ({
    components: { TodoList },
    template: '<todo-list group="list"></todo-list>',
    store: store
  }))

storiesOf('Board', module)
  .add('default', () => ({
    components: { Board },
    template: '<board group="list"></board>',
    store: store
  }))
