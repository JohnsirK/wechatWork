webpackJsonp([4],{"95bg":function(t,s){},BUCC:function(t,s){},OGJf:function(t,s,e){"use strict";var n={props:["userImg"],data:function(){return{bgImg:""}},methods:{imgUpload:function(t){var s=this,e=t.target.files[0],n=new FileReader;console.log(e),n.readAsDataURL(e),n.onload=function(t){console.log(t.target),s.bgImg=t.target.result}}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bgWill"},[t.bgImg?e("div",{staticClass:"imgBg"},[e("img",{attrs:{src:t.bgImg}})]):[e("span",[t._v("\n      轻触更换主题图片\n    ")]),t._v(" "),e("input",{staticClass:"imgUpload",attrs:{type:"file",accept:"image/jpeg, image/png, image/jpg"},on:{change:function(s){return t.imgUpload(s)}}})],t._v(" "),e("div",{staticClass:"imgTx"},[t.userImg?e("img",{attrs:{src:t.userImg,alt:""}}):e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zanwutouxiang"}})])])],2)},staticRenderFns:[]};var a=e("VU/8")(n,i,!1,function(t){e("95bg")},null,null);s.a=a.exports},Ufua:function(t,s){},rDFg:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("WsNp"),i=e("v6sd"),a=e.n(i),r=e("OGJf"),o=e("eM5C"),l=e.n(o),c={props:["itemJson"],data:function(){return{img:l.a,isShow:!1,zan:!1,zanNum:[],replyNum:[],message:"",replyShow:!1}},methods:{clickzan:function(){this.zan=!this.zan,this.isShow=!1,this.zan?this.zanNum.push(this.itemJson.remarks?this.itemJson.remarks:this.itemJson.petname):this.zanNum.shift(this.itemJson.remarks?this.itemJson.remarks:this.itemJson.petname)},send:function(){this.replyNum.push(this.message),this.message=""},replyClick:function(){this.replyShow=!this.replyShow,this.isShow=!1}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"frendsList"},[e("ul",[e("li",[e("span",{staticClass:"img"},[e("img",{attrs:{src:t.itemJson.headurl,alt:""}})]),t._v(" "),e("div",{staticClass:"txt"},[e("h4",[t._v("\n          "+t._s(t.itemJson.remarks?t.itemJson.remarks:t.itemJson.petname)+"\n        ")]),t._v(" "),e("h5",[t._v("\n          "+t._s(t.itemJson.newmeassage)+"\n        ")]),t._v(" "),e("div",[e("yd-lightbox",{attrs:{num:t.itemJson.gallery.length}},[t._l(t.itemJson.gallery,function(t,s){return e("yd-lightbox-img",{key:s,attrs:{src:t,original:t}})}),t._v(" "),e("yd-lightbox-txt",[e("div",{attrs:{slot:"content"},slot:"content"},[e("p",[t._v(t._s(t.itemJson.newmeassage))])])])],2)],1),t._v(" "),e("h6",[e("em",{staticClass:"time"},[t._v("昨天")]),t._v(" "),e("i",{on:{click:function(s){t.isShow=!t.isShow}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-gengduo"}})])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.isShow?e("span",{staticClass:"reply"},[e("em",{staticClass:"sjx"}),t._v(" "),e("b",{on:{click:t.clickzan}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-zan1"}})]),t._v("\n                "+t._s(t.zan?"取消":"点赞")+"\n              ")]),t._v(" "),e("b",{on:{click:t.replyClick}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-comment"}})]),t._v("\n                评论\n              ")])]):t._e()])],1),t._v(" "),t.zanNum.length>0||t.replyNum.length>0?e("div",{staticClass:"replyZan"},[t.zanNum.length>0?e("p",{staticClass:"zan"},t._l(t.zanNum,function(s,n){return e("font",{key:n},[t._v("\n              "+t._s(s)+" ,\n            ")])}),1):t._e(),t._v(" "),t._l(t.replyNum,function(s,n){return t.replyNum.length>0?e("p",{key:n,staticClass:"replyList"},[e("span",{staticClass:"name"},[t._v("\n              "+t._s(t.itemJson.remarks?t.itemJson.remarks:t.itemJson.petname)+":\n            ")]),t._v(" "),e("font",{staticClass:"text"},[t._v("\n              "+t._s(s)+"\n            ")])],1):t._e()})],2):t._e()])])]),t._v(" "),e("transition",{attrs:{name:"fadebot"}},[t.replyShow?e("div",{staticClass:"fixShu"},[e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"说点什么..."},domProps:{value:t.message},on:{input:function(s){s.target.composing||(t.message=s.target.value)}}})]),t._v(" "),e("font",{on:{click:t.send}},[t._v("\n        发送\n      ")])],1):t._e()])],1)},staticRenderFns:[]};var u=e("VU/8")(c,m,!1,function(t){e("BUCC")},null,null).exports,g={data:function(){return{userImg:a.a,bgImg:"",item:JSON.parse(this.$route.query.item)}},components:{allHeader:n.a,frendsTop:r.a,frendsList:u},methods:{},mounted:function(){console.log(this.item)}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"childHome",staticStyle:{background:"#fff"}},[s("all-header",[s("span",{attrs:{slot:"title"},slot:"title"}),this._v(" "),s("span",{attrs:{slot:"titleTwo"},slot:"titleTwo"},[this._v("\n      朋友圈\n    ")])]),this._v(" "),s("div",{staticClass:"content t4 bg0"},[s("frends-top",{attrs:{userImg:this.userImg}}),this._v(" "),s("div",{staticClass:"bgCon"},[s("frends-list",{attrs:{itemJson:this.item}})],1)],1)],1)},staticRenderFns:[]};var d=e("VU/8")(g,h,!1,function(t){e("Ufua")},null,null);s.default=d.exports}});