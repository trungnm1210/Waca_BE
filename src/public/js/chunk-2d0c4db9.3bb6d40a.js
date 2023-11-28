(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4db9"],{"3d2d":function(n,e,t){"use strict";t.r(e);var r=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"form-element-number-input-demo"}},[e("number-input-default"),e("number-input-color"),e("number-input-min-max"),e("number-input-size"),e("number-input-step"),e("number-input-decimal"),e("number-input-label")],1)},u=[],a=function(){var n=this,e=n._self._c;return e("vx-card",{attrs:{title:"Default","code-toggler":""}},[e("p",[n._v("If you need to add a component that handles a single number, use the component "),e("code",[n._v("vs-input-number")])]),e("p",[n._v("You can also change the increment and decrement button icons using the properties "),e("code",[n._v("icon-inc")]),n._v(" and "),e("code",[n._v("icon-dec")]),n._v(" respectively")]),e("div",{staticClass:"demo-alignment"},[e("vs-input-number",{model:{value:n.number,callback:function(e){n.number=e},expression:"number"}}),e("vs-input-number",{attrs:{disabled:!0},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),e("vs-input-number",{attrs:{"icon-inc":"expand_less","icon-dec":"expand_more"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}})],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number"/>\n    <vs-input-number :disabled="true" v-model="number1"/>\n    <vs-input-number v-model="number2" icon-inc="expand_less" icon-dec="expand_more"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number:34,\n      number1:48,\n      number2:50\n    }\n  }\n}\n<\/script>\n        ')])],2)},s=[],l={data:function(){return{number:34,number1:48,number2:50}}},m=l,o=t("2877"),i=Object(o["a"])(m,a,s,!1,null,null,null),c=i.exports,b=function(){var n=this,e=n._self._c;return e("vx-card",{attrs:{title:"Color","code-toggler":""}},[e("span",[n._v("You can change the color of the "),e("strong",[n._v("Input-Number")]),n._v(" with the property "),e("code",[n._v("color")]),n._v(". You are able to use the Main Colors or "),e("strong",[n._v("RGB")]),n._v(" and "),e("strong",[n._v("HEX")]),n._v(" colors.")]),e("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[e("span",[n._v("Only "),e("strong",[n._v("RGB")]),n._v(" and "),e("strong",[n._v("HEX")]),n._v(" colors are supported.")])]),e("div",{staticClass:"demo-alignment"},[e("vs-input-number",{attrs:{color:"danger"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),e("vs-input-number",{attrs:{color:"success"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}}),e("vs-input-number",{attrs:{color:"warning"},model:{value:n.number3,callback:function(e){n.number3=e},expression:"number3"}}),e("vs-input-number",{attrs:{color:"dark"},model:{value:n.number4,callback:function(e){n.number4=e},expression:"number4"}}),e("vs-input-number",{attrs:{color:"rgb(218, 24, 94)"},model:{value:n.number5,callback:function(e){n.number5=e},expression:"number5"}}),e("vs-input-number",{attrs:{color:"#ad3af9"},model:{value:n.number6,callback:function(e){n.number6=e},expression:"number6"}})],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number color="danger" v-model="number1"/>\n    <vs-input-number color="success" v-model="number2"/>\n    <vs-input-number color="warning" v-model="number3"/>\n    <vs-input-number color="dark" v-model="number4"/>\n    <vs-input-number color="rgb(218, 24, 94)" v-model="number5"/>\n    <vs-input-number color="#ad3af9" v-model="number6"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number1:196,\n      number2:88,\n      number3:25,\n      number4:12,\n      number5:590,\n      number6:32,\n    }\n  }\n}\n<\/script>\n        ')])],2)},p=[],d={data:function(){return{number1:196,number2:88,number3:25,number4:12,number5:590,number6:32}}},v=d,_=Object(o["a"])(v,b,p,!1,null,null,null),f=_.exports,x=function(){var n=this,e=n._self._c;return e("vx-card",{attrs:{title:"Min - Max","code-toggler":""}},[e("span",[n._v("You can restrict the maximum number or the minimum with the properties "),e("code",[n._v("min")]),n._v(", "),e("code",[n._v("max")])]),e("div",{staticClass:"demo-alignment"},[e("vs-input-number",{attrs:{min:"13",max:"21"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}})],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number min="13" max="21" v-model="number1"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number1:21,\n    }\n  }\n}\n<\/script>\n        ')])],2)},g=[],h={data:function(){return{number1:21}}},k=h,C=Object(o["a"])(k,x,g,!1,null,null,null),w=C.exports,z=function(){var n=this,e=n._self._c;return e("vx-card",{attrs:{title:"Size","code-toggler":""}},[e("span",[n._v("To change the size of the component, you can use the property "),e("code",[n._v("size")]),n._v(". The allowed values are: "),e("code",[n._v("medium")]),n._v(", "),e("code",[n._v("small")]),n._v(", and "),e("code",[n._v("mini")])]),e("div",{staticClass:"demo-alignment"},[e("vs-input-number",{model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}}),e("vs-input-number",{attrs:{size:"medium"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),e("vs-input-number",{attrs:{size:"small"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}}),e("vs-input-number",{attrs:{size:"mini"},model:{value:n.number3,callback:function(e){n.number3=e},expression:"number3"}})],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0"/>\n    <vs-input-number size="medium" v-model="number1"/>\n    <vs-input-number size="small" v-model="number2"/>\n    <vs-input-number size="mini" v-model="number3"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:95,\n      number1:21,\n      number2:67,\n      number3:2\n    }\n  }\n}\n<\/script>\n        ')])],2)},I=[],N={data:function(){return{number0:95,number1:21,number2:67,number3:2}}},O=N,j=Object(o["a"])(O,z,I,!1,null,null,null),y=j.exports,M=function(){var n=this,e=n._self._c;return e("vx-card",{attrs:{title:"Step","code-toggler":""}},[e("span",[n._v("To change the number to be added or decreased of the component, you can use the property "),e("code",[n._v("step")])]),e("div",{staticClass:"demo-alignment"},[e("vs-input-number",{attrs:{step:5},model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}})],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0" :step="5"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:5,\n    }\n  }\n}\n<\/script>\n        ')])],2)},D=[],S={data:function(){return{number0:5}}},Y=S,T=Object(o["a"])(Y,M,D,!1,null,null,null),B=T.exports,E=function(){var n=this,e=n._self._c;return e("vx-card",{attrs:{title:"Decimal","code-toggler":""}},[e("span",[n._v("Number Input also supports decimal values")]),e("div",{staticClass:"demo-alignment"},[e("vs-input-number",{attrs:{step:.5},model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}})],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0" :step="0.5"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:1.5,\n    }\n  }\n}\n<\/script>\n        ')])],2)},G=[],H={data:function(){return{number0:1.5}}},J=H,L=Object(o["a"])(J,E,G,!1,null,null,null),R=L.exports,X=function(){var n=this,e=n._self._c;return e("vx-card",{attrs:{title:"Label","code-toggler":""}},[e("p",[n._v("Number Input supports adding labels for number inputs.")]),e("div",{staticClass:"demo-alignment"},[e("vs-input-number",{attrs:{label:"passengers:"},model:{value:n.passengers,callback:function(e){n.passengers=e},expression:"passengers"}})],1),e("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="passengers" label="passengers:"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      passengers:1,\n    }\n  }\n}\n<\/script>\n        ')])],2)},q=[],A={data:function(){return{passengers:1}}},F=A,K=Object(o["a"])(F,X,q,!1,null,null,null),P=K.exports,Q={components:{NumberInputDefault:c,NumberInputColor:f,NumberInputMinMax:w,NumberInputSize:y,NumberInputStep:B,NumberInputDecimal:R,NumberInputLabel:P}},U=Q,V=Object(o["a"])(U,r,u,!1,null,null,null);e["default"]=V.exports}}]);