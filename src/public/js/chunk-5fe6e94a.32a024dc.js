(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe6e94a"],{"252e":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container wrapper"},[a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners"}},[a("div",{staticClass:"title"},[t._v("\n      "+t._s(t.$t("Notification")||"Notification")+"\n      "),a("svg",{staticClass:"icon-svg-notification",attrs:{"data-v-221cd0d8":"",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"21",viewBox:"0 0 38 21"}},[a("g",{attrs:{"data-v-221cd0d8":"",id:"Group_21335","data-name":"Group 21335",transform:"translate(-917 -81)"}},[a("rect",{attrs:{"data-v-221cd0d8":"",id:"Rectangle_4940","data-name":"Rectangle 4940",width:"38",height:"21",rx:"3",transform:"translate(917 81)",fill:"#E5B000"}}),a("g",{attrs:{"data-v-221cd0d8":"",id:"check-all",transform:"translate(924.785 83.931)"}},[a("path",{attrs:{"data-v-221cd0d8":"",id:"Path_35112","data-name":"Path 35112",d:"M4.773,18.9,0,14.123l1.3-1.3,3.91,2.607L14.336,5l1.3.652L6.757,18.727a1.3,1.3,0,0,1-1.985.168Z",transform:"translate(0 -5)",fill:"#fefefe"}}),a("path",{attrs:{"data-v-221cd0d8":"",id:"Path_35113","data-name":"Path 35113",d:"M28.91,10.3H25.652a.652.652,0,1,1,0-1.3H28.91a.652.652,0,1,1,0,1.3Z",transform:"translate(-8.709 -6.393)",fill:"#fefefe"}}),a("path",{attrs:{"data-v-221cd0d8":"",id:"Path_35114","data-name":"Path 35114",d:"M27.516,17.3H21.652a.652.652,0,0,1,0-1.3h5.865a.652.652,0,1,1,0,1.3Z",transform:"translate(-7.316 -8.832)",fill:"#fefefe"}}),a("path",{attrs:{"data-v-221cd0d8":"",id:"Path_35115","data-name":"Path 35115",d:"M25.774,24.3H16.652a.652.652,0,0,1,0-1.3h9.123a.652.652,0,0,1,0,1.3Z",transform:"translate(-5.574 -11.271)",fill:"#fefefe"}})])])])]),a("div",{staticClass:"wrapper-list-noti"},t._l(t.unreadNotifications,(function(i){return a("div",{key:i.id,staticClass:"content"},[a("div",{staticClass:"icon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"33.016",height:"30.284",viewBox:"0 0 33.016 30.284"}},[a("g",{attrs:{id:"_000000ff","data-name":"#000000ff",transform:"translate(-26.902 -33.003)"}},[a("path",{attrs:{id:"Path_35579","data-name":"Path 35579",d:"M33.929,37.792a15.017,15.017,0,0,1,16.414-3.763,15.16,15.16,0,1,1-20.7,13.829,15.5,15.5,0,0,1-1.663,1.584c-.653.33-1.419-.6-.913-1.15.915-.963,1.869-1.889,2.809-2.825a.812.812,0,0,1,1.238.05c.942.958,1.941,1.871,2.834,2.875.375.624-.441,1.381-1.042,1.024a17.62,17.62,0,0,1-1.623-1.587,13.905,13.905,0,0,0,3.3,9.142A13.589,13.589,0,1,0,45.925,34.589a13.421,13.421,0,0,0-10.694,4.018C34.7,39.317,33.56,38.56,33.929,37.792Z",transform:"translate(0 0)",fill:"#fefefe"}}),a("path",{attrs:{id:"Path_35580","data-name":"Path 35580",d:"M78.428,72.655a3.029,3.029,0,1,1-1.737,3.415,3.019,3.019,0,0,1,1.737-3.415m.72,1.408a1.4,1.4,0,1,0,1.769,1.753A1.429,1.429,0,0,0,79.149,74.063Z",transform:"translate(-38.736 -30.74)",fill:"#3381f9"}}),a("path",{attrs:{id:"Path_35581","data-name":"Path 35581",d:"M90.456,74.756a.794.794,0,0,1,1.34.582c.014.326-.251.549-.448.77-3.419,3.4-6.812,6.824-10.234,10.218a.816.816,0,0,1-1.406-.422c-.059-.408.282-.683.528-.946C83.653,81.566,87.034,78.14,90.456,74.756Z",transform:"translate(-41.094 -32.359)",fill:"#2077fc"}}),a("path",{attrs:{id:"Path_35582","data-name":"Path 35582",d:"M112.2,102.056a3.031,3.031,0,1,1-2.093,3.623,3.07,3.07,0,0,1,2.093-3.623m.232,1.622a1.4,1.4,0,1,0,1.969,1.514A1.407,1.407,0,0,0,112.433,103.678Z",transform:"translate(-64.299 -53.342)",fill:"#2077fc"}})])])]),a("div",{staticClass:"body"},[a("div",{staticClass:"tit"},[t._v(t._s(i.title))]),a("div",{staticClass:"des",domProps:{innerHTML:t._s(i.msg)}}),a("div",{staticClass:"time"},[t._v(t._s(i.time))]),0===i.views?a("div",{staticClass:"dot"}):t._e()])])})),0)])])},e=[],n=i("b05c"),d=i("c5b9"),r=i("c1df"),o=i.n(r),c={data:function(){return{unreadNotifications:[]}},methods:{getHMS:function(t){if(t){var a=o()(t).fromNow();return a}}},mounted:function(){var t=this,a={e:n.email};d["a"].getListNotifi(a).then((function(a){if(t.$vs.loading.close("#loading-corners > .con-vs-loading"),a.data.success)for(var i=a.data.data,s=0;s<i.length;s++){var e={index:s,title:i[s].title,msg:i[s].content,views:i[s].views,time:t.getHMS(i[s].created_at)};t.unreadNotifications.push(e)}}))}},l=c,f=(i("ffa0"),i("2877")),m=Object(f["a"])(l,s,e,!1,null,"2717a0d8",null);a["default"]=m.exports},"4aa8":function(t,a,i){},b05c:function(t){t.exports=JSON.parse('{"balance":0,"blLive":0,"blDemo":0,"Notify":0,"isAccount":0,"uid":"","upid":null,"email":"","profile_image":"","displayName":"","uidLive":"","uidDemo":"","vip":0,"vip_lv":1,"so_cmnd":"","pen_commiss":0,"ref":"","c2fa":0,"id_front":"","id_back":"","first_name":"","last_name":"","verify":"","num_secu":"","country":"","mkt":0,"countDown":30,"textTimeDown":"Hãy đặt lệnh","is_expert":0,"is_phone":false,"active_type":""}')},ffa0:function(t,a,i){"use strict";i("4aa8")}}]);