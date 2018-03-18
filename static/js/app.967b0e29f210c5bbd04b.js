webpackJsonp([1],[,,,function(t,e,i){"use strict";var n=i(20),a=i(6);e.a={name:"app",components:{TodoList:n.a,Checkbox:a.a},computed:{filter:{get:function(){return this.$store.state.filter},set:function(t){this.$store.commit("filter",t)}}}}},function(t,e,i){"use strict";var n=i(22),a=i.n(n),s=i(24),o=i(42);e.a={name:"TodoList",components:{TodoItem:s.a,draggable:a.a,AddItem:o.a},props:{group:String},computed:{list:{get:function(){return this.$store.state.board[this.group]},set:function(t){this.$store.commit("updateList",{group:this.group,value:t})}},filter:{get:function(){return this.$store.state.filter}}},watch:{list:function(t){console.log(t)}},methods:{del:function(t){this.$store.commit("delListItem",{group:this.group,index:t})},changeText:function(t,e){var i=this.list[t];i.text=e,this.$store.commit("changeItem",{group:this.group,index:t,value:i})},changeFinish:function(t,e){var i=this.list[t];i.finished=e,this.$store.commit("changeItem",{group:this.group,index:t,value:i})}}}},function(t,e,i){"use strict";var n=i(6),a=i(28);e.a={name:"TodoItem",props:{item:Object,index:Number},components:{Checkbox:n.a,EditText:a.a},methods:{del:function(t){this.$emit("del",t)},changeFinish:function(t){this.$emit("changeFinish",this.index,t)},changeText:function(t){this.$emit("changeText",this.index,t)}}}},function(t,e,i){"use strict";function n(t){i(26)}var a=i(7),s=i(27),o=i(0),r=n,c=o(a.a,s.a,!1,r,"data-v-44f6f6a1",null);e.a=c.exports},function(t,e,i){"use strict";e.a={name:"Checkbox",props:{value:Boolean},model:{prop:"value",event:"input"},methods:{change:function(t){this.$emit("input",t)}}}},function(t,e,i){"use strict";var n=i(30),a=i.n(n);e.a={name:"editText",props:{value:String,finished:Boolean},model:{prop:"value",event:"input"},data:function(){return{edit:!1}},methods:{change:a()(function(t){this.$emit("input",t.target.textContent)},1e3)}}},,,,function(t,e,i){"use strict";e.a={name:"AddItem",props:{group:String},data:function(){return{text:""}},methods:{add:function(){var t={id:this.$store.state.maxId,finished:!1,text:this.text};this.$store.commit("addItem",{group:this.group,value:t}),this.$store.commit("incrId")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),a=i(17),s=i(47);n.a.config.productionTip=!1,new n.a({el:"#app",store:s.a,render:function(t){return t(a.a)}})},,,,function(t,e,i){"use strict";function n(t){i(18)}var a=i(3),s=i(46),o=i(0),r=n,c=o(a.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},,function(t,e,i){"use strict";function n(t){i(21)}var a=i(4),s=i(45),o=i(0),r=n,c=o(a.a,s.a,!1,r,"data-v-c880eb9c",null);e.a=c.exports},function(t,e){},,,function(t,e,i){"use strict";function n(t){i(25)}var a=i(5),s=i(40),o=i(0),r=n,c=o(a.a,s.a,!1,r,"data-v-a7073880",null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkbox"},[i("div",{on:{click:function(e){t.change(!t.value)}}},[i("div",{class:{finish:t.value}})])])},a=[],s={render:n,staticRenderFns:a};e.a=s},function(t,e,i){"use strict";function n(t){i(29)}var a=i(8),s=i(39),o=i(0),r=n,c=o(a.a,s.a,!1,r,"data-v-f5b3a132",null);e.a=c.exports},function(t,e){},,,,,,,,,,function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-text"},[i("div",{class:{finished:t.finished},attrs:{contenteditable:"true"},on:{input:t.change}},[t._v(t._s(t.value))])])},a=[],s={render:n,staticRenderFns:a};e.a=s},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item",class:{finished:t.item.finished}},[n("div",{staticClass:"move"},[t._v("☰")]),t._v(" "),n("checkbox",{staticClass:"checkbox",attrs:{value:t.item.finished},on:{input:t.changeFinish}}),t._v(" "),n("div",{staticClass:"index"},[t._v(t._s(t.index+1+"."))]),t._v(" "),n("edit-text",{staticClass:"edittext",attrs:{value:t.item.text,finished:t.item.finished},on:{input:t.changeText}}),t._v(" "),n("div",{staticClass:"right"},[n("img",{attrs:{src:i(41)},on:{click:function(e){t.del(t.index)}}})])],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOWU5ZTllIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6TTE5IDRoLTMuNWwtMS0xaC01bC0xIDFINXYyaDE0VjR6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo="},function(t,e,i){"use strict";function n(t){i(43)}var a=i(12),s=i(44),o=i(0),r=n,c=o(a.a,s.a,!1,r,"data-v-30ac4bf0",null);e.a=c.exports},function(t,e){},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),i("div",{staticClass:"button",on:{click:t.add}},[t._v("Add")])])},a=[],s={render:n,staticRenderFns:a};e.a=s},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-list"},[i("draggable",{attrs:{options:{group:t.group,draggable:".todo-item",handle:".move"}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[i("transition-group",{attrs:{name:"slide",mode:"out-in",tag:"div"}},[t._l(t.list,function(e,n){return[t.filter&&e.finished?t._e():i("todo-item",{key:"list-"+e.id,attrs:{item:e,index:n},on:{changeText:t.changeText,changeFinish:t.changeFinish,del:t.del}})]}),t._v(" "),i("add-item",{key:"list-add",attrs:{group:t.group}})],2)],1)],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("main",{staticClass:"container"},[i("div",{staticClass:"option"},[i("checkbox",{staticStyle:{width:"32px",height:"32px"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),i("div",[t._v("隱藏完成選項")])],1),t._v(" "),i("todo-list",{attrs:{group:"list"}})],1)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("nav",{staticClass:"container"},[i("h1",[t._v("TodoList-Lite")])])])}],s={render:n,staticRenderFns:a};e.a=s},function(t,e,i){"use strict";var n=i(2),a=i(48),s=i(49);n.a.use(a.a),e.a=new a.a.Store({plugins:[Object(s.a)()],state:{maxId:1,filter:!1,board:{list:[]}},actions:{},mutations:{incrId:function(t){t.maxId++},filter:function(t,e){t.filter=e},updateList:function(t,e){n.a.set(t.board,e.group,e.value)},delListItem:function(t,e){var i=t.board[e.group].slice();i.splice(e.index,1),n.a.set(t.board,e.group,i)},changeItem:function(t,e){var i=t.board[e.group].slice();i[e.index]=e.value,n.a.set(t.board,e.group,i)},addItem:function(t,e){var i=t.board[e.group].slice();i.push(e.value),n.a.set(t.board,e.group,i)}}})}],[13]);
//# sourceMappingURL=app.967b0e29f210c5bbd04b.js.map