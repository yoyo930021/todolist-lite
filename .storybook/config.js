// @ts-ignore
import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
// import Checkbox from '../src/components/Checkbox.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register custom components.
// Vue.component('checkbox', Checkbox);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);