import Vue from 'vue'

import test from "./test"
 new Vue({
  el:'#app',
  render(h){
    return h(test)
  }
})

// new Vue({
//   el:'#app',
//   // render(h){
//   //   return h('div',[this.n,h('button',{on:{click:this.add}},'+1')])
//   // },
//   data:{
//     n:0,
//     message: 'Hello Vue!'
//   },
//   methods:{
//     add(){
//       this.n+=1
//     }
//   },
//
// })
// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: '页面加载于 ' + new Date().toLocaleString()
//   }
// })