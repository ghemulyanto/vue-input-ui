(function(e){function t(t){for(var l,n,i=t[0],o=t[1],s=t[2],c=0,p=[];c<i.length;c++)n=i[c],u[n]&&p.push(u[n][0]),u[n]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,i=1;i<a.length;i++){var o=a[i];0!==u[o]&&(l=!1)}l&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},u={app:0},r=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var l=a("2b0e"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-input-ui",class:{dark:e.darkMode},attrs:{id:"VueInputUiDemo"}},[a("div",{staticClass:"container"},[a("h1",[e._v(e._s(e.value1?e.value1:"-"))]),a("h2",[e._v(e._s(e.value2?e.value2:"-"))]),a("h3",[e._v(e._s(e.value3?e.value3:"-"))]),a("h4",[e._v(e._s(e.value4?e.value4:"-"))]),a("h5",[e._v(e._s(e.value5?e.value5:"-"))]),a("button",{staticClass:"btn",staticStyle:{"margin-top":"10px"},on:{click:function(t){e.darkMode=!e.darkMode}}},[e._v("\n      "+e._s(e.darkMode?"Disable":"Enable")+" Dark Mode\n    ")]),a("button",{staticClass:"btn",staticStyle:{"margin-top":"10px","margin-left":"10px"},on:{click:function(t){e.loading=!e.loading}}},[e._v("\n      Toggle loader\n    ")]),a("br"),a("div",{staticClass:"component-container"},[a("VueInputUi",{attrs:{label:"Initial input",color:"purple",size:"sm",dark:e.darkMode,clearable:"",loader:e.loading},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("br"),a("VueInputUi",{attrs:{label:"Input with value",dark:e.darkMode,loader:e.loading},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),a("br"),a("VueInputUi",{attrs:{dark:"",label:"is dark",color:"purple",clearable:"",loader:e.loading},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),a("br"),a("VueInputUi",{attrs:{error:!0,label:"Input with error='true' + text hint",hint:"Error text",size:"lg",dark:e.darkMode,loader:e.loading},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}}),a("br"),a("VueInputUi",{attrs:{label:"Valid input state",valid:"",clearable:"",loader:e.loading},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}}),a("br"),a("VueInputUi",{attrs:{dark:e.darkMode,loader:e.loading},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}}),a("br"),a("VueInputUi",{attrs:{label:"is disabled",dark:e.darkMode,disabled:"",loader:e.loading},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}}),a("br"),a("VueInputUi",{attrs:{label:"Number input",dark:e.darkMode,type:"number",clearable:"",loader:e.loading},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}}),a("br"),a("VueInputUi",{attrs:{label:"Required input",hint:"is required",dark:e.darkMode,required:"",loader:!e.loading,clearable:""},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}}),a("br"),a("VueInputUi",{attrs:{label:"Text area",dark:e.darkMode,textarea:"",rows:"4",loader:!e.loading},model:{value:e.value10,callback:function(t){e.value10=t},expression:"value10"}})],1)])])},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"parent",staticClass:"field vue-input-ui",class:[{"is-focused":e.isFocus,"is-valid":e.valid,"has-value":e.value,"has-error":e.error,"is-disabled":e.disabled,"is-dark":e.dark,"has-hint":e.hint&&!e.value},e.size],on:{click:e.focusInput}},["checkbox"!==e.type||e.textarea?"radio"!==e.type||e.textarea?e.textarea?a("textarea",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"field-input textarea",style:[e.borderStyle],attrs:{id:e.id,placeholder:e.labelValue,type:e.type,required:e.required},domProps:{value:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){e.$emit("click")},input:function(t){t.target.composing||(e.inputValue=t.target.value)}}},"textarea",e.$attrs,!1)):a("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"field-input",style:[e.borderStyle],attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:e.type},domProps:{value:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){e.$emit("click")},input:function(t){t.target.composing||(e.inputValue=t.target.value)}}},"input",e.$attrs,!1)):a("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"field-input",style:[e.borderStyle],attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"radio"},domProps:{checked:e._q(e.inputValue,null)},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){e.$emit("click")},change:function(t){e.inputValue=null}}},"input",e.$attrs,!1)):a("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"VueInputUi",staticClass:"field-input",style:[e.borderStyle],attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"checkbox"},domProps:{checked:Array.isArray(e.inputValue)?e._i(e.inputValue,null)>-1:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){e.$emit("click")},change:function(t){var a=e.inputValue,l=t.target,u=!!l.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);l.checked?n<0&&(e.inputValue=a.concat([r])):n>-1&&(e.inputValue=a.slice(0,n).concat(a.slice(n+1)))}else e.inputValue=u}}},"input",e.$attrs,!1)),a("label",{ref:"label",staticClass:"field-label",class:e.error?"lm-text-danger":null,style:[e.colorStyle],attrs:{for:e.id},on:{click:e.focusInput}},[e._v("\n    "+e._s(e.hintValue||e.labelValue)+"\n  ")]),e.clearable&&e.inputValue&&!e.textarea?a("button",{staticClass:"field-clear",attrs:{title:"clear",type:"button",tabindex:"-1"},on:{click:e.clear}},[a("span",{staticClass:"field-clear__effect"}),a("span",[e._v("\n      ✕\n    ")])]):e._e(),e.loader?a("div",{staticClass:"loader",class:{textarea:e.textarea}},[a("div",{staticClass:"loader__progress-bar",style:[e.loaderProgressBarBg]})]):e._e()])},i=[],o=(a("c5f6"),{name:"VueInputUi",props:{value:{type:[String,Number],default:null},label:{type:String,default:"Enter text"},hint:{type:String,default:String},error:{type:Boolean,default:Boolean},color:{type:String,default:"dodgerblue"},disabled:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},id:{type:String,default:"VueInputUi"},size:{type:String,default:String},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},validColor:{type:String,default:"yellowgreen"},required:{type:Boolean,default:!1},textarea:{type:Boolean,default:!1},loader:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},data:function(){return{isFocus:!1}},computed:{borderStyle:function(){var e=this.isFocus&&!this.error||this.valid;return e?{border:"1px solid ".concat(this.valid?this.validColor:this.color," !important")}:null},colorStyle:function(){var e=this.isFocus||this.valid;return e?{color:"".concat(this.valid?this.validColor:this.color)}:null},loaderProgressBarBg:function(){return{backgroundColor:this.color}},inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},labelValue:function(){var e=this.label;return this.required&&e&&(e+=" *"),e},hintValue:function(){var e=this.hint;return this.required&&e&&(e+=" *"),e}},methods:{focusInput:function(){this.$refs.VueInputUi.focus()},onFocus:function(){this.$emit("focus"),this.isFocus=!0},onBlur:function(){this.$emit("blur"),this.isFocus=!1},clear:function(){this.$emit("input",null),this.$emit("clear")},keyUp:function(e){this.$emit("keyup",e)},keyDown:function(e){this.$emit("keydown",e)}}}),s=o,d=(a("da9d"),a("2877")),c=Object(d["a"])(s,n,i,!1,null,"4785fa2e",null),p=c.exports,v={name:"App",components:{VueInputUi:p},data:function(){return{value1:"VueInputUI",value2:"A beautiful input made with VueJs",value3:"Customize size & color (dark mode)",value4:"Error management",value5:"Validator state",value6:"Hello world!",value7:null,value8:null,value9:null,value10:null,darkMode:!1,loading:!1}}},f=v,b=(a("5c0b"),Object(d["a"])(f,u,r,!1,null,null,null)),y=b.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var l=a("5e27"),u=a.n(l);u.a},"5e27":function(e,t,a){},a29c:function(e,t,a){},da9d:function(e,t,a){"use strict";var l=a("a29c"),u=a.n(l);u.a}});
//# sourceMappingURL=app.ed6feca7.js.map