(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("a026"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=t("2877"),u={},c=Object(i["a"])(u,o,a,!1,null,null,null),s=c.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("系统登录")])]),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{ref:"username",attrs:{type:"text",name:"username","auto-complete":"on",placeholder:"用户名称"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username","string"===typeof n?n.trim():n)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{ref:"password",attrs:{type:"password",name:"password",placeholder:"密码","auto-complete":"on"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password","string"===typeof n?n.trim():n)},expression:"loginForm.password"}})],1),t("el-button",{staticClass:"login-button",attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v(" 登录 ")])],1)],1)},f=[],m={name:"Login",data:function(){var e=function(e,n,t){n.length<6?t(new Error("密码不能少于六位！")):t()};return{loginForm:{username:"dsy",password:"1234567"},loginRules:{username:[{required:!0,trigger:"blur",message:"用户名不符合规则"}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,redirect:null}},watch:{$router:{handler:function(e){this.redirect=e.query&&e.query.redirect}}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(n){if(!n)return!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1,e.$message.success("登录成功")})).catch((function(){e.loading=!1,e.$message.error("登录失败")}))}))}}},p=m,h=(t("f9cf"),Object(i["a"])(p,d,f,!1,null,null,null)),g=h.exports;r["default"].use(l["a"]);var E=[{path:"/login",component:g,hideInMenu:!1},{path:"/register",component:function(){return t.e("chunk-7a007d4c").then(t.bind(null,"0de4"))}},{path:"/",component:function(){return t.e("layouts").then(t.bind(null,"25d6"))},children:[{path:"/",redirect:"/dashboard/analysis"},{path:"/dashboard",name:"dashboard",component:{render:function(e){return e("router-view")}},children:[{path:"/dashboard/analysis",name:"analysis",component:function(){return Promise.all([t.e("vendors~dashboard"),t.e("dashboard")]).then(t.bind(null,"81c0"))}}]}]},{path:"/form",name:"Form",component:{render:function(e){return e("router-view")}},children:[{path:"/form/basic-form",name:"BasicForm",component:function(){return t.e("form").then(t.bind(null,"20e8"))}},{path:"/form/step-form",name:"StepForm",component:function(){return t.e("form").then(t.bind(null,"1fa6"))},children:[{path:"/form/step-form",redirect:"/form/step-form/info"},{path:"/form/step-form/info",redirect:"info",component:function(){return t.e("form").then(t.bind(null,"23c7"))}},{path:"/form/step-form/confirm",name:"confirm",component:function(){return t.e("form").then(t.bind(null,"ef30"))}},{path:"/form/step-form/result",name:"result",component:function(){return t.e("form").then(t.bind(null,"caa9"))}}]}]},{path:"/404",name:"404",component:function(){return t.e("chunk-c88ec1c2").then(t.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],b=function(){return new l["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:E})},v=b();var T,w=v,_=t("2f62"),y=t("ade3"),O=(t("b0c0"),t("99af"),{UPDATE_USER_NAME:"UPDATE_USER_NAME",UPDATE_REGISTER_STATE:"UPDATE_REGISTER_STATE",SET_TOKEN:"SET_TOKEN",REMOVE_TOKEN:"REMOVE_TOKEN"}),S={TOGGLE_SIDEBAR:"TOGGLE_SIDEBAR"},R=(t("caad"),t("2532"),t("852e")),k=t.n(R),A="vue-demo";function F(){return k.a.get(A)}function N(e){return k.a.set(A,e)}function D(){return k.a.remove(A)}function G(){return["admin"]}function U(e){return G().some((function(n){return e.includes(n)}))}var $={name:"user",token:F(),isReg:!1},x=(T={},Object(y["a"])(T,O.UPDATE_USER_NAME,(function(e,n){var t=n.newUsername;e.name=t})),Object(y["a"])(T,O.UPDATE_REGISTER_STATE,(function(e,n){e.isReg=n})),Object(y["a"])(T,O.SET_TOKEN,(function(e,n){e.token=n})),T),I={login:function(e,n){var t=e.commit,r=n.username,o=n.password;return new Promise((function(e){t(O.SET_TOKEN,"token-".concat(r,"-").concat(o)),N("token-".concat(r,"-").concat(o)),e()}))},removeToken:function(e){var n=e.commit;return new Promise((function(e){D(),n(O.REMOVE_TOKEN),e()}))}},P={namespaced:!0,state:$,mutations:x,actions:I},j=(t("a9e3"),{sidebar:{opened:!k.a.get("sidebarStatus")||Boolean(Number(k.a.get("sidebarStatus")))}}),B=Object(y["a"])({},S.TOGGLE_SIDEBAR,(function(e){var n=e.sidebar;n.opened=!n.opened,k.a.set("sidebarStatus",n.opened?1:0)})),C={toggleSideBar:function(e){var n=e.commit;n(S.TOGGLE_SIDEBAR)}},L={namespaced:!0,state:j,mutations:B,actions:C},K={doubleCount:function(e){return 2*e.count}},M=K;r["default"].use(_["a"]);var q,V,J=new _["a"].Store({state:{count:1},mutations:{increment:function(e,n){e.count+=n}},actions:{increment:function(e,n){var t=e.commit,r=n.n;setTimeout((function(){t("increment",r)}),2e3)}},modules:{user:P,app:L},getters:M,strict:!1}),z=t("5c96"),H=t.n(z),Q=(t("0fae"),t("b20f"),t("f5df1"),{functional:!0,props:{authority:{type:Array,require:!0,default:null}},render:function(e,n){var t=n.props,r=n.scopedSlots;return U(t.authority)?r.default():null}}),W=Q,X=(t("aa69"),Object(i["a"])(W,q,V,!1,null,null,null)),Y=X.exports;function Z(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive(n.name||"auth",{inserted:function(e,n){U(n.value)||e.parentNode&&e.parentNode.removeChild(e)}})}var ee={install:Z},ne=t("1da1"),te=(t("96cf"),t("323e")),re=t.n(te);t("a5d8");re.a.configure({showSpinner:!1});var oe=["/login"];w.beforeEach(function(){var e=Object(ne["a"])(regeneratorRuntime.mark((function e(n,t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:re.a.start(),F()?"/login"===n.path?(r({path:"/"}),re.a.done()):r():-1!==oe.indexOf(n.path)?r():(r("/login?redirect=".concat(n.path)),re.a.done());case 2:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()),w.afterEach((function(){re.a.done()})),r["default"].use(H.a),r["default"].component("Authorized",Y),r["default"].use(ee),r["default"].config.productionTip=!1,new r["default"]({router:w,store:J,render:function(e){return e(s)}}).$mount("#app")},"759e":function(e,n,t){},aa69:function(e,n,t){"use strict";t("759e")},b20f:function(e,n,t){},c02b:function(e,n,t){},f9cf:function(e,n,t){"use strict";t("c02b")}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);