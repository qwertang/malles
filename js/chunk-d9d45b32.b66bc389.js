(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9d45b32"],{"057f":function(t,e,r){var n=r("c6b6"),o=r("fc6a"),a=r("241c").f,i=r("f36a"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return i(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?s(t):a(o(t))}},"0b42":function(t,e,r){var n=r("da84"),o=r("e8b5"),a=r("68ee"),i=r("861d"),c=r("b622"),s=c("species"),u=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,a(e)&&(e===u||o(e.prototype))?e=void 0:i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?u:e}},1008:function(t,e,r){"use strict";r("b964")},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2828:function(t,e,r){},"352d":function(t,e,r){"use strict";r("2828")},"3d33":function(t,e,r){"use strict";r("a588")},"428f":function(t,e,r){var n=r("da84");t.exports=n},"484c":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"4df4":function(t,e,r){"use strict";var n=r("da84"),o=r("0366"),a=r("c65b"),i=r("7b0b"),c=r("9bdd"),s=r("e95a"),u=r("68ee"),f=r("07fa"),l=r("8418"),d=r("9a1f"),b=r("35a1"),p=n.Array;t.exports=function(t){var e=i(t),r=u(this),n=arguments.length,m=n>1?arguments[1]:void 0,h=void 0!==m;h&&(m=o(m,n>2?arguments[2]:void 0));var v,g,y,w,S,x,k=b(e),O=0;if(!k||this==p&&s(k))for(v=f(e),g=r?new this(v):p(v);v>O;O++)x=h?m(e[O],O):e[O],l(g,O,x);else for(w=d(e,k),S=w.next,g=r?new this:[];!(y=a(S,w)).done;O++)x=h?c(w,m,[y.value,O],!0):y.value,l(g,O,x);return g.length=O,g}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("1a2d"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(i){o(t,"throw",i)}}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("2ba4"),c=r("c65b"),s=r("e330"),u=r("c430"),f=r("83ab"),l=r("4930"),d=r("d039"),b=r("1a2d"),p=r("e8b5"),m=r("1626"),h=r("861d"),v=r("3a9b"),g=r("d9b5"),y=r("825a"),w=r("7b0b"),S=r("fc6a"),x=r("a04b"),k=r("577e"),O=r("5c6c"),C=r("7c73"),_=r("df75"),j=r("241c"),$=r("057f"),T=r("7418"),A=r("06cf"),H=r("9bf2"),I=r("d1e7"),E=r("f36a"),L=r("6eeb"),P=r("5692"),F=r("f772"),N=r("d012"),M=r("90e3"),B=r("b622"),J=r("e538"),Y=r("746f"),G=r("d44e"),R=r("69f3"),U=r("b727").forEach,z=F("hidden"),D="Symbol",Q="prototype",V=B("toPrimitive"),W=R.set,q=R.getterFor(D),K=Object[Q],X=o.Symbol,Z=X&&X[Q],tt=o.TypeError,et=o.QObject,rt=a("JSON","stringify"),nt=A.f,ot=H.f,at=$.f,it=I.f,ct=s([].push),st=P("symbols"),ut=P("op-symbols"),ft=P("string-to-symbol-registry"),lt=P("symbol-to-string-registry"),dt=P("wks"),bt=!et||!et[Q]||!et[Q].findChild,pt=f&&d((function(){return 7!=C(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=nt(K,e);n&&delete K[e],ot(t,e,r),n&&t!==K&&ot(K,e,n)}:ot,mt=function(t,e){var r=st[t]=C(Z);return W(r,{type:D,tag:t,description:e}),f||(r.description=e),r},ht=function(t,e,r){t===K&&ht(ut,e,r),y(t);var n=x(e);return y(r),b(st,n)?(r.enumerable?(b(t,z)&&t[z][n]&&(t[z][n]=!1),r=C(r,{enumerable:O(0,!1)})):(b(t,z)||ot(t,z,O(1,{})),t[z][n]=!0),pt(t,n,r)):ot(t,n,r)},vt=function(t,e){y(t);var r=S(e),n=_(r).concat(xt(r));return U(n,(function(e){f&&!c(yt,r,e)||ht(t,e,r[e])})),t},gt=function(t,e){return void 0===e?C(t):vt(C(t),e)},yt=function(t){var e=x(t),r=c(it,this,e);return!(this===K&&b(st,e)&&!b(ut,e))&&(!(r||!b(this,e)||!b(st,e)||b(this,z)&&this[z][e])||r)},wt=function(t,e){var r=S(t),n=x(e);if(r!==K||!b(st,n)||b(ut,n)){var o=nt(r,n);return!o||!b(st,n)||b(r,z)&&r[z][n]||(o.enumerable=!0),o}},St=function(t){var e=at(S(t)),r=[];return U(e,(function(t){b(st,t)||b(N,t)||ct(r,t)})),r},xt=function(t){var e=t===K,r=at(e?ut:S(t)),n=[];return U(r,(function(t){!b(st,t)||e&&!b(K,t)||ct(n,st[t])})),n};if(l||(X=function(){if(v(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?k(arguments[0]):void 0,e=M(t),r=function(t){this===K&&c(r,ut,t),b(this,z)&&b(this[z],e)&&(this[z][e]=!1),pt(this,e,O(1,t))};return f&&bt&&pt(K,e,{configurable:!0,set:r}),mt(e,t)},Z=X[Q],L(Z,"toString",(function(){return q(this).tag})),L(X,"withoutSetter",(function(t){return mt(M(t),t)})),I.f=yt,H.f=ht,A.f=wt,j.f=$.f=St,T.f=xt,J.f=function(t){return mt(B(t),t)},f&&(ot(Z,"description",{configurable:!0,get:function(){return q(this).description}}),u||L(K,"propertyIsEnumerable",yt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:X}),U(_(dt),(function(t){Y(t)})),n({target:D,stat:!0,forced:!l},{for:function(t){var e=k(t);if(b(ft,e))return ft[e];var r=X(e);return ft[e]=r,lt[r]=e,r},keyFor:function(t){if(!g(t))throw tt(t+" is not a symbol");if(b(lt,t))return lt[t]},useSetter:function(){bt=!0},useSimple:function(){bt=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!f},{create:gt,defineProperty:ht,defineProperties:vt,getOwnPropertyDescriptor:wt}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:St,getOwnPropertySymbols:xt}),n({target:"Object",stat:!0,forced:d((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(w(t))}}),rt){var kt=!l||d((function(){var t=X();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));n({target:"JSON",stat:!0,forced:kt},{stringify:function(t,e,r){var n=E(arguments),o=e;if((h(e)||void 0!==t)&&!g(t))return p(e)||(e=function(t,e){if(m(o)&&(e=c(o,this,t,e)),!g(e))return e}),n[1]=e,i(rt,null,n)}})}if(!Z[V]){var Ot=Z.valueOf;L(Z,V,(function(t){return c(Ot,this)}))}G(X,D),N[z]=!0},a588:function(t,e,r){},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},a9e5:function(t,e,r){},b727:function(t,e,r){var n=r("0366"),o=r("e330"),a=r("44ad"),i=r("7b0b"),c=r("07fa"),s=r("65f0"),u=o([].push),f=function(t){var e=1==t,r=2==t,o=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(p,m,h,v){for(var g,y,w=i(p),S=a(w),x=n(m,h),k=c(S),O=0,C=v||s,_=e?C(p,k):r||d?C(p,0):void 0;k>O;O++)if((b||O in S)&&(g=S[O],y=x(g,O,w),t))if(e)_[O]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:u(_,g)}else switch(t){case 4:return!1;case 7:u(_,g)}return l?-1:o||f?f:_}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},b964:function(t,e,r){},bf4c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",attrs:{id:"home"}},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("hometabcontrol",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"homecontrol",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),r("home-recommend",{attrs:{recommends:t.recommends}}),r("feature-view"),r("hometabcontrol",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("goodsList",{attrs:{goods:t.showGoods}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowbacktop,expression:"isShowbacktop"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},o=[];function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return a(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function s(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return i(t)||c(t)||s(t)||u()}var l=r("a7ac"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",t._l(t.banners,(function(e,n){return r("swiper-item",{key:n},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},b=[],p=r("dc2c"),m={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},components:{Swiper:p["a"],SwiperItem:p["b"]},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},h=m,v=r("0c7c"),g=Object(v["a"])(h,d,b,!1,null,"5c698408",null),y=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return r("div",{staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("div",[t._v(t._s(e.title))])])])})),0)},S=[],x={name:"HomeRecommend",props:{recommends:{type:Array,default:function(){return[]}}}},k=x,O=(r("3d33"),Object(v["a"])(k,w,S,!1,null,"2b27e5b8",null)),C=O.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("484c"),alt:""}})])])}],$={name:"HomeFeature"},T=$,A=(r("1008"),Object(v["a"])(T,_,j,!1,null,"11e0cc25",null)),H=A.exports,I=r("6d71"),E=r("5d17"),L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back-top"},[r("i",{staticClass:"iconfont icon-xiangshang3"})])}],F={name:"BackTop"},N=F,M=(r("352d"),Object(v["a"])(N,L,P,!1,null,"50556cfd",null)),B=M.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hometabcontrol"},t._l(t.titles,(function(e,n){return r("div",{staticClass:"tab-item-control",class:{active:n===t.currentIndex},on:{click:function(e){return t.tabClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},Y=[],G={name:"Hometabcontrol",props:{titles:{type:[],default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{tabClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},R=G,U=(r("c663"),Object(v["a"])(R,J,Y,!1,null,"d34417f8",null)),z=U.exports,D=r("1bab");function Q(){return Object(D["a"])({url:"/home/multidata"})}function V(t,e){return Object(D["a"])({url:"/home/data",params:{type:t,page:e}})}var W={name:"Hmoes",components:{NavBar:l["a"],HomeSwiper:y,HomeRecommend:C,FeatureView:H,Hometabcontrol:z,GoodsList:I["a"],Scroll:E["a"],BackTop:B},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentTpye:"pop",isShowbacktop:!1,tabOffsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods:function(){return this.goods[this.currentTpye].list}},activated:function(){this.$refs.scroll.refresh,this.$refs.scroll.scrollTo(0,this.saveY,-1)},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY()},created:function(){this.getHomeMultidata(),this.getHomedata("pop"),this.getHomedata("new"),this.getHomedata("sell")},methods:{tabClick:function(t){switch(t){case 0:this.currentTpye="pop";break;case 1:this.currentTpye="new";break;case 2:this.currentTpye="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},mounted:function(){},backClick:function(){this.$refs.scroll.scrollTo(0,0,1e3)},contentScroll:function(t){this.isShowbacktop=-t.y>800,this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){this.getHomedata(this.currentTpye)},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;Q().then((function(e){t.banners=e.data.data.banner.list,t.recommends=e.data.data.recommend.list}))},getHomedata:function(t){var e=this,r=this.goods[t].page+1;V(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,f(r.data.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))}}},q=W,K=(r("f14d"),Object(v["a"])(q,n,o,!1,null,"fe06857c",null));e["default"]=K.exports},c663:function(t,e,r){"use strict";r("f445")},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("e330"),c=r("1a2d"),s=r("1626"),u=r("3a9b"),f=r("577e"),l=r("9bf2").f,d=r("e893"),b=a.Symbol,p=b&&b.prototype;if(o&&s(b)&&(!("description"in p)||void 0!==b().description)){var m={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(m[e]=!0),e};d(h,b),h.prototype=p,p.constructor=h;var v="Symbol(test)"==String(b("test")),g=i(p.toString),y=i(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,S=i("".replace),x=i("".slice);l(p,"description",{configurable:!0,get:function(){var t=y(this),e=g(t);if(c(m,t))return"";var r=v?x(e,7,-1):S(e,w,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f14d:function(t,e,r){"use strict";r("a9e5")},f445:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("e8b5"),i=r("68ee"),c=r("861d"),s=r("23cb"),u=r("07fa"),f=r("fc6a"),l=r("8418"),d=r("b622"),b=r("1dde"),p=r("f36a"),m=b("slice"),h=d("species"),v=o.Array,g=Math.max;n({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var r,n,o,d=f(this),b=u(d),m=s(t,b),y=s(void 0===e?b:e,b);if(a(d)&&(r=d.constructor,i(r)&&(r===v||a(r.prototype))?r=void 0:c(r)&&(r=r[h],null===r&&(r=void 0)),r===v||void 0===r))return p(d,m,y);for(n=new(void 0===r?v:r)(g(y-m,0)),o=0;m<y;m++,o++)m in d&&l(n,o,d[m]);return n.length=o,n}})}}]);
//# sourceMappingURL=chunk-d9d45b32.b66bc389.js.map