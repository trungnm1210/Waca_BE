(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f417c5e4"],{"4faa":function(a,e,t){"use strict";var s={users:[]},l=(t("20d6"),{SET_USERS:function(a,e){a.users=e},REMOVE_RECORD:function(a,e){var t=a.users.findIndex((function(a){return a.id==e}));a.users.splice(t,1)}}),r=t("bb36"),i={fetchUsers:function(a){var e=a.commit;return new Promise((function(a,t){r["a"].get("/api/user-management/users").then((function(t){e("SET_USERS",t.data),a(t)})).catch((function(a){t(a)}))}))},fetchUser:function(a,e){return new Promise((function(a,t){r["a"].get("/api/user-management/users/".concat(e)).then((function(e){a(e)})).catch((function(a){t(a)}))}))},removeRecord:function(a,e){var t=a.commit;return new Promise((function(a,s){r["a"].delete("/api/user-management/users/".concat(e)).then((function(s){t("REMOVE_RECORD",e),a(s)})).catch((function(a){s(a)}))}))}},o={};e["a"]={isRegistered:!1,namespaced:!0,state:s,mutations:l,actions:i,getters:o}},f762:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a._self._c;return e("div",{attrs:{id:"page-user-edit"}},[e("vs-alert",{attrs:{color:"danger",title:"User Not Found",active:a.user_not_found},on:{"update:active":function(e){a.user_not_found=e}}},[e("span",[a._v("User record with id: "+a._s(a.$route.params.userId)+" not found. ")]),e("span",[e("span",[a._v("Check ")]),e("router-link",{staticClass:"text-inherit underline",attrs:{to:{name:"page-user-list"}}},[a._v("All Users")])],1)]),a.user_data?e("vx-card",[e("div",{staticClass:"tabs-container px-6 pt-6",attrs:{slot:"no-body"},slot:"no-body"},[e("vs-tabs",{staticClass:"tab-action-btn-fill-conatiner",model:{value:a.activeTab,callback:function(e){a.activeTab=e},expression:"activeTab"}},[e("vs-tab",{attrs:{label:"Account","icon-pack":"feather",icon:"icon-user"}},[e("div",{staticClass:"tab-text"},[e("user-edit-tab-account",{staticClass:"mt-4",attrs:{data:a.user_data}})],1)]),e("vs-tab",{attrs:{label:"Information","icon-pack":"feather",icon:"icon-info"}},[e("div",{staticClass:"tab-text"},[e("user-edit-tab-information",{staticClass:"mt-4",attrs:{data:a.user_data}})],1)]),e("vs-tab",{attrs:{label:"Social","icon-pack":"feather",icon:"icon-share-2"}},[e("div",{staticClass:"tab-text"},[e("user-edit-tab-social",{staticClass:"mt-4",attrs:{data:a.user_data}})],1)])],1)],1)]):a._e()],1)},l=[],r=(t("7f7f"),function(){var a=this,e=a._self._c;return e("div",{attrs:{id:"user-edit-tab-info"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("div",{staticClass:"flex items-start flex-col sm:flex-row"},[e("img",{staticClass:"mr-8 rounded h-24 w-24",attrs:{src:a.data.avatar}}),e("div",[e("p",{staticClass:"text-lg font-medium mb-2 mt-4 sm:mt-0"},[a._v(a._s(a.data.name))]),e("input",{ref:"update_avatar_input",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:a.update_avatar}}),e("vs-button",{staticClass:"mr-4 mb-4"},[a._v("Change Avatar")]),e("vs-button",{attrs:{type:"border",color:"danger"}},[a._v("Remove Avatar")])],1)])])]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col md:w-1/2 w-full"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_num",expression:"'required|alpha_num'"}],staticClass:"w-full mt-4",attrs:{label:"Username",name:"username"},model:{value:a.data_local.username,callback:function(e){a.$set(a.data_local,"username",e)},expression:"data_local.username"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("username"),expression:"errors.has('username')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("username")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"w-full mt-4",attrs:{label:"Name",name:"name"},model:{value:a.data_local.name,callback:function(e){a.$set(a.data_local,"name",e)},expression:"data_local.name"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("name")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-4",attrs:{label:"Email",type:"email",name:"email"},model:{value:a.data_local.email,callback:function(e){a.$set(a.data_local,"email",e)},expression:"data_local.email"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("email")))])],1),e("div",{staticClass:"vx-col md:w-1/2 w-full"},[e("div",{staticClass:"mt-4"},[e("label",{staticClass:"vs-input--label"},[a._v("Status")]),e("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:a.statusOptions,name:"status",dir:a.$vs.rtl?"rtl":"ltr"},model:{value:a.status_local,callback:function(e){a.status_local=e},expression:"status_local"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("status"),expression:"errors.has('status')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("status")))])],1),e("div",{staticClass:"mt-4"},[e("label",{staticClass:"vs-input--label"},[a._v("Role")]),e("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:a.roleOptions,name:"role",dir:a.$vs.rtl?"rtl":"ltr"},model:{value:a.role_local,callback:function(e){a.role_local=e},expression:"role_local"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("role"),expression:"errors.has('role')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("role")))])],1),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"alpha_spaces",expression:"'alpha_spaces'"}],staticClass:"w-full mt-4",attrs:{label:"Company",name:"company"},model:{value:a.data_local.company,callback:function(e){a.$set(a.data_local,"company",e)},expression:"data_local.company"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("company"),expression:"errors.has('company')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("company")))])],1)]),e("vx-card",{staticClass:"mt-base",attrs:{"no-shadow":"","card-border":""}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("div",{staticClass:"flex items-end px-3"},[e("feather-icon",{staticClass:"mr-2",attrs:{svgClasses:"w-6 h-6",icon:"LockIcon"}}),e("span",{staticClass:"font-medium text-lg leading-none"},[a._v("Permissions")])],1),e("vs-divider")],1)]),e("div",{staticClass:"block overflow-x-auto"},[e("table",{staticClass:"w-full"},[e("tr",a._l(["Module","Read","Write","Create","Delete"],(function(t){return e("th",{key:t,staticClass:"font-semibold text-base text-left px-3 py-2"},[a._v(a._s(t))])})),0),a._l(a.data_local.permissions,(function(t,s){return e("tr",{key:s},[e("td",{staticClass:"px-3 py-2"},[a._v(a._s(s))]),a._l(t,(function(s,l){return e("td",{key:l+s,staticClass:"px-3 py-2"},[e("vs-checkbox",{model:{value:t[l],callback:function(e){a.$set(t,l,e)},expression:"val[name]"}})],1)}))],2)}))],2)])]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:!a.validateForm},on:{click:a.save_changes}},[a._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:a.reset_data}},[a._v("Reset")])],1)])])],1)}),i=[],o=t("4a7a"),n=t.n(o),c={components:{vSelect:n.a},props:{data:{type:Object,required:!0}},data:function(){return{data_local:JSON.parse(JSON.stringify(this.data)),statusOptions:[{label:"Active",value:"active"},{label:"Blocked",value:"blocked"},{label:"Deactivated",value:"deactivated"}],roleOptions:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Staff",value:"staff"}]}},computed:{status_local:{get:function(){return{label:this.capitalize(this.data_local.status),value:this.data_local.status}},set:function(a){this.data_local.status=a.value}},role_local:{get:function(){return{label:this.capitalize(this.data_local.role),value:this.data_local.role}},set:function(a){this.data_local.role=a.value}},validateForm:function(){return!this.errors.any()}},methods:{capitalize:function(a){return a.slice(0,1).toUpperCase()+a.slice(1,a.length)},save_changes:function(){this.validateForm},reset_data:function(){this.data_local=JSON.parse(JSON.stringify(this.data))},update_avatar:function(){}}},d=c,u=t("2877"),v=Object(u["a"])(d,r,i,!1,null,null,null),m=v.exports,_=function(){var a=this,e=a._self._c;return e("div",{attrs:{id:"user-edit-tab-info"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full md:w-1/2"},[e("div",{staticClass:"flex items-end"},[e("feather-icon",{staticClass:"mr-2",attrs:{icon:"UserIcon",svgClasses:"w-5 h-5"}}),e("span",{staticClass:"leading-none font-medium"},[a._v("Personal Information")])],1),e("div",[e("div",{staticClass:"mt-4"},[e("label",{staticClass:"text-sm"},[a._v("Birth Date")]),e("flat-pickr",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{config:{dateFormat:"d F Y",maxDate:new Date},name:"dob"},model:{value:a.data_local.dob,callback:function(e){a.$set(a.data_local,"dob",e)},expression:"data_local.dob"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("dob"),expression:"errors.has('dob')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("dob")))])],1),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:{regex:"^\\+?([0-9]+)$"},expression:"{regex: '^\\\\+?([0-9]+)$' }"}],staticClass:"w-full mt-4",attrs:{label:"Mobile",name:"mobile"},model:{value:a.data_local.mobile,callback:function(e){a.$set(a.data_local,"mobile",e)},expression:"data_local.mobile"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("mobile"),expression:"errors.has('mobile')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("mobile")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{label:"Website",name:"website","data-vv-as":"field"},model:{value:a.data_local.website,callback:function(e){a.$set(a.data_local,"website",e)},expression:"data_local.website"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("website"),expression:"errors.has('website')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("website")))]),e("div",{staticClass:"mt-4"},[e("label",{staticClass:"text-sm"},[a._v("Languages")]),e("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{multiple:"",closeOnSelect:!1,options:a.langOptions,name:"lang_known",dir:a.$vs.rtl?"rtl":"ltr"},model:{value:a.data_local.languages_known,callback:function(e){a.$set(a.data_local,"languages_known",e)},expression:"data_local.languages_known"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("lang_known"),expression:"errors.has('lang_known')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("lang_known")))])],1),e("div",{staticClass:"mt-4"},[e("label",{staticClass:"text-sm"},[a._v("Gender")]),e("div",{staticClass:"mt-2"},[e("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"male"},model:{value:a.data_local.gender,callback:function(e){a.$set(a.data_local,"gender",e)},expression:"data_local.gender"}},[a._v("Male")]),e("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"female"},model:{value:a.data_local.gender,callback:function(e){a.$set(a.data_local,"gender",e)},expression:"data_local.gender"}},[a._v("Female")]),e("vs-radio",{attrs:{"vs-value":"other"},model:{value:a.data_local.gender,callback:function(e){a.$set(a.data_local,"gender",e)},expression:"data_local.gender"}},[a._v("Other")])],1)]),e("div",{staticClass:"mt-6"},[e("label",[a._v("Contact Options")]),e("div",{staticClass:"flex flex-wrap mt-1"},[e("vs-checkbox",{staticClass:"mr-4 mb-2",attrs:{"vs-value":"email"},model:{value:a.data_local.contact_options,callback:function(e){a.$set(a.data_local,"contact_options",e)},expression:"data_local.contact_options"}},[a._v("Email")]),e("vs-checkbox",{staticClass:"mr-4 mb-2",attrs:{"vs-value":"message"},model:{value:a.data_local.contact_options,callback:function(e){a.$set(a.data_local,"contact_options",e)},expression:"data_local.contact_options"}},[a._v("Message")]),e("vs-checkbox",{staticClass:"mb-2",attrs:{"vs-value":"Phone"},model:{value:a.data_local.contact_options,callback:function(e){a.$set(a.data_local,"contact_options",e)},expression:"data_local.contact_options"}},[a._v("Phone")])],1)])],1)]),e("div",{staticClass:"vx-col w-full md:w-1/2"},[e("div",{staticClass:"flex items-end md:mt-0 mt-base"},[e("feather-icon",{staticClass:"mr-2",attrs:{icon:"MapPinIcon",svgClasses:"w-5 h-5"}}),e("span",{staticClass:"leading-none font-medium"},[a._v("Address")])],1),e("div",[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Address Line 1",name:"addd_line_1"},model:{value:a.data_local.location.add_line_1,callback:function(e){a.$set(a.data_local.location,"add_line_1",e)},expression:"data_local.location.add_line_1"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("addd_line_1"),expression:"errors.has('addd_line_1')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("addd_line_1")))]),e("vs-input",{staticClass:"w-full mt-4",attrs:{label:"Address Line 2"},model:{value:a.data_local.location.add_line_2,callback:function(e){a.$set(a.data_local.location,"add_line_2",e)},expression:"data_local.location.add_line_2"}}),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"w-full mt-4",attrs:{label:"Post Code",name:"post_code"},model:{value:a.data_local.location.post_code,callback:function(e){a.$set(a.data_local.location,"post_code",e)},expression:"data_local.location.post_code"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("post_code"),expression:"errors.has('post_code')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("post_code")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full mt-4",attrs:{label:"City",name:"city"},model:{value:a.data_local.location.city,callback:function(e){a.$set(a.data_local.location,"city",e)},expression:"data_local.location.city"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("city"),expression:"errors.has('city')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("city")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full mt-4",attrs:{label:"State",name:"state"},model:{value:a.data_local.location.state,callback:function(e){a.$set(a.data_local.location,"state",e)},expression:"data_local.location.state"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("state"),expression:"errors.has('state')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("state")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full mt-4",attrs:{label:"Country",name:"country"},model:{value:a.data_local.location.country,callback:function(e){a.$set(a.data_local.location,"country",e)},expression:"data_local.location.country"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("country"),expression:"errors.has('country')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("country")))])],1)])]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:!a.validateForm},on:{click:a.save_changes}},[a._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:a.reset_data}},[a._v("Reset")])],1)])])])},p=[],f=t("aae5"),h=t.n(f),b=(t("0952"),{components:{vSelect:n.a,flatPickr:h.a},props:{data:{type:Object,required:!0}},data:function(){return{data_local:JSON.parse(JSON.stringify(this.data)),langOptions:[{label:"English",value:"english"},{label:"Spanish",value:"spanish"},{label:"French",value:"french"},{label:"Russian",value:"russian"},{label:"German",value:"german"},{label:"Arabic",value:"arabic"},{label:"Sanskrit",value:"sanskrit"}]}},computed:{validateForm:function(){return!this.errors.any()}},methods:{save_changes:function(){this.validateForm},reset_data:function(){this.data_local=Object.assign({},this.data)}}}),w=b,x=Object(u["a"])(w,_,p,!1,null,null,null),C=x.exports,g=function(){var a=this,e=a._self._c;return e("div",{attrs:{id:"user-edit-tab-info"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full md:w-1/2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-twitter",label:"Twitter","icon-no-border":"",name:"twitter"},model:{value:a.data_local.social_links.twitter,callback:function(e){a.$set(a.data_local.social_links,"twitter",e)},expression:"data_local.social_links.twitter"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("twitter"),expression:"errors.has('twitter')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("twitter")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-facebook",label:"Facebook","icon-no-border":"",name:"facebook"},model:{value:a.data_local.social_links.facebook,callback:function(e){a.$set(a.data_local.social_links,"facebook",e)},expression:"data_local.social_links.facebook"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("facebook"),expression:"errors.has('facebook')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("facebook")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-instagram",label:"Instagram","icon-no-border":"",name:"instagram"},model:{value:a.data_local.social_links.instagram,callback:function(e){a.$set(a.data_local.social_links,"instagram",e)},expression:"data_local.social_links.instagram"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("instagram"),expression:"errors.has('instagram')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("instagram")))])],1),e("div",{staticClass:"vx-col w-full md:w-1/2"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4 md:mt-0",attrs:{"icon-pack":"feather",icon:"icon-github",label:"GitHub","icon-no-border":"",name:"github"},model:{value:a.data_local.social_links.github,callback:function(e){a.$set(a.data_local.social_links,"github",e)},expression:"data_local.social_links.github"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("github"),expression:"errors.has('github')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("github")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-codepen",label:"CodePen","icon-no-border":"",name:"codepen"},model:{value:a.data_local.social_links.codepen,callback:function(e){a.$set(a.data_local.social_links,"codepen",e)},expression:"data_local.social_links.codepen"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("codepen"),expression:"errors.has('codepen')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("codepen")))]),e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],staticClass:"w-full mt-4",attrs:{"icon-pack":"feather",icon:"icon-slack",label:"Slack","icon-no-border":"",name:"slack"},model:{value:a.data_local.social_links.slack,callback:function(e){a.$set(a.data_local.social_links,"slack",e)},expression:"data_local.social_links.slack"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("slack"),expression:"errors.has('slack')"}],staticClass:"text-danger text-sm"},[a._v(a._s(a.errors.first("slack")))])],1)]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:!a.validateForm},on:{click:a.save_changes}},[a._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"},on:{click:a.reset_data}},[a._v("Reset")])],1)])])])},k=[],N={props:{data:{type:Object,required:!0}},data:function(){return{data_local:JSON.parse(JSON.stringify(this.data))}},computed:{validateForm:function(){return!this.errors.any()}},methods:{save_changes:function(){this.validateForm},reset_data:function(){this.data_local=Object.assign({},this.data)}}},y=N,q=Object(u["a"])(y,g,k,!1,null,null,null),$=q.exports,O=t("4faa"),S={components:{UserEditTabAccount:m,UserEditTabInformation:C,UserEditTabSocial:$},data:function(){return{user_data:null,user_not_found:!1,activeTab:0}},watch:{activeTab:function(){this.fetch_user_data(this.$route.params.userId)}},methods:{fetch_user_data:function(a){var e=this;this.$store.dispatch("userManagement/fetchUser",a).then((function(a){e.user_data=a.data})).catch((function(a){404!==a.response.status?console.error(a):e.user_not_found=!0}))}},created:function(){O["a"].isRegistered||(this.$store.registerModule("userManagement",O["a"]),O["a"].isRegistered=!0),this.fetch_user_data(this.$route.params.userId)}},R=S,E=Object(u["a"])(R,s,l,!1,null,null,null);e["default"]=E.exports}}]);