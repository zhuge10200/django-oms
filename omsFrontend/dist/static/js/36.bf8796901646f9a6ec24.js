webpackJsonp([36],{SSh6:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".table-expand{font-size:0}.table-expand .el-form-item{margin:0;width:100%}.table-expand .el-form-item .el-form-item__label{width:90px;color:#99a9bf}.table-expand .el-form-item .el-form-item__content{width:80%}",""])},X3v6:function(e,t,r){var a=r("SSh6");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("76ff00de",a,!0)},cjR3:function(e,t,r){"use strict";function a(e){r("X3v6")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("BO1k"),l=r.n(o),n=r("iVC1"),s=r("8TIX"),i={components:{sesectHosts:s.default},data:function(){return{ruleForm:{name:"",code_repo:"svn",code_url:"",showdev:!1,desc:""},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],code_url:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},addenvForm:!1,envForm:{job:"",name:"",hosts:[],path:"",desc:""},actionTab:"",tabIndex:-1,TabValues:[]}},created:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(n.i)(t.ruleForm).then(function(e){if("Created"===e.statusText){t.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,a=!1,o=void 0;try{for(var s,i=l()(t.TabValues);!(r=(s=i.next()).done);r=!0){var m=s.value,c=m.content;c.job=e.data.name,Object(n.h)(c)}}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}}t.$router.push("/jobs/jobs")})})},resetForm:function(e){this.$refs[e].resetFields()},addTab:function(){this.addenvForm=!1;var e=++this.tabIndex+"";this.TabValues.push({title:this.envForm.name,name:e,content:this.envForm}),this.actionTab=e,this.envForm={}},removeTab:function(e){var t=this.TabValues,r=this.actionTab;r===e&&t.forEach(function(a,o){if(a.name===e){var l=t[o+1]||t[o-1];l&&(r=l.name)}}),this.actionTab=r,this.TabValues=t.filter(function(t){return t.name!==e})},getHosts:function(e){this.envForm.hosts=e}}},m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",{staticStyle:{"max-width":"800px"}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"代码地址",prop:"code_url"}},[r("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.code_url,callback:function(t){e.$set(e.ruleForm,"code_url",t)},expression:"ruleForm.code_url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"研发可见",prop:"showdev"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.showdev,callback:function(t){e.$set(e.ruleForm,"showdev",t)},expression:"ruleForm.showdev"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"配置环境"}},[r("el-tabs",{attrs:{type:"card",editable:""},on:{"tab-add":function(t){e.addenvForm=!0},"tab-remove":e.removeTab},model:{value:e.actionTab,callback:function(t){e.actionTab=t},expression:"actionTab"}},e._l(e.TabValues,function(t){return r("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[r("el-card",[r("el-form",{staticClass:"table-expand",attrs:{"label-position":"right",inline:""}},[r("el-form-item",{attrs:{label:"环境名称"}},[r("span",[e._v(e._s(t.content.name))])]),e._v(" "),r("el-form-item",{attrs:{label:"发布路径"}},[r("span",[e._v(e._s(t.content.path))])]),e._v(" "),r("el-form-item",{attrs:{label:"发布主机"}},e._l(t.content.hosts,function(t){return r("el-tag",{key:t,staticStyle:{"margin-right":"5px"}},[e._v(e._s(t))])})),e._v(" "),r("el-form-item",{attrs:{label:"更新内容"}},[r("span",[e._v(e._s(t.content.desc))])])],1)],1)],1)}))],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"desc"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{visible:e.addenvForm},on:{"update:visible":function(t){e.addenvForm=t}}},[r("el-form",{ref:"envForm",attrs:{"label-width":"70px"},model:{value:e.envForm,callback:function(t){e.envForm=t},expression:"envForm"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.name,callback:function(t){e.$set(e.envForm,"name",t)},expression:"envForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发布路径",prop:"path"}},[r("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.path,callback:function(t){e.$set(e.envForm,"path",t)},expression:"envForm.path"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"选择主机",prop:"hosts"}},[r("sesect-hosts",{attrs:{selecthost:e.envForm.hosts},on:{gethosts:e.getHosts}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"desc"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.envForm.desc,callback:function(t){e.$set(e.envForm,"desc",t)},expression:"envForm.desc"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.addTab}},[e._v("确 定")])],1)],1)],1)},c=[],u={render:m,staticRenderFns:c},d=u,v=r("VU/8"),f=a,p=v(i,d,!1,f,null,null);t.default=p.exports}});