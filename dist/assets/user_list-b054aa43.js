import{_ as T}from"./gvb_table-a7f3b8bc.js";import{a as C,b as $,c as A}from"./user_api-8939c76c.js";import{r as k,c as w,d as m,o as I,e as q,f as l,w as t,m as i,l as N,h as y,j as S}from"./index-a4ff3a35.js";import"./date-d051bfca.js";const z=["src"],J={__name:"user_list",setup(D){const c=k(null),p=k(null),_=[{value:1,label:"管理员"},{value:2,label:"用户"},{value:3,label:"游客"},{value:4,label:"黑名单"}],R={user_name:"",password:"",re_password:"",nick_name:"",role:2},s=w({user_name:"",password:"",re_password:"",nick_name:"",role:2}),o=w({nick_name:"",role:void 0,user_id:0}),f=k(void 0);function E(){p.value.ExportList({role:f.value})}let L=async(r,e)=>e===""?Promise.reject("Please input the password again"):e!==s.password?Promise.reject("Two inputs don't match!"):Promise.resolve();const n=w({modalVisible:!1,modalUpdateVisible:!1,columns:[{title:"id",dataIndex:"id",key:"id"},{title:"昵称",dataIndex:"nick_name",key:"nick_name"},{title:"头像",dataIndex:"avatar",key:"avatar"},{title:"邮箱",dataIndex:"email",key:"email"},{title:"角色",dataIndex:"role",key:"role"},{title:"注册来源",dataIndex:"sign_status",key:"sign_status"},{title:"ip",dataIndex:"ip",key:"ip"},{title:"地址",dataIndex:"addr",key:"addr"},{title:"注册时间",dataIndex:"created_at",key:"created_at"},{title:"操作",dataIndex:"action",key:"action"}]});async function O(r){let e=await C(r);if(e.code){i.error(e.msg);return}i.success(e.msg),p.value.ExportList()}async function P(r){let e=r.id,u=await C([e]);if(u.code){i.error(u.msg);return}i.success(u.msg),p.value.ExportList()}function h(r){n.modalUpdateVisible=!0,o.user_id=r.id,o.nick_name=r.nick_name,o.role=r.role}async function j(){try{await c.value.validate()}catch{return}let r=await $(s);if(r.code){i.error(r.msg);return}i.success(r.msg),n.modalVisible=!1,Object.assign(s,R),c.value.clearValidate(),p.value.ExportList()}async function B(){let r=await A(o);if(r.code){i.error(r.msg);return}i.success(r.msg),p.value.ExportList()}return(r,e)=>{const u=m("a-input"),d=m("a-form-item"),x=m("a-input-password"),v=m("a-select"),U=m("a-form"),V=m("a-modal"),b=m("a-button");return I(),q("div",null,[l(V,{visible:n.modalVisible,"onUpdate:visible":e[5]||(e[5]=a=>n.modalVisible=a),title:"添加用户",onOk:j},{default:t(()=>[l(U,{model:s,name:"basic",ref_key:"formRef",ref:c,"label-col":{span:4},"wrapper-col":{span:18},autocomplete:"off"},{default:t(()=>[l(d,{label:"用户名",name:"user_name","has-feedback":"",rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]},{default:t(()=>[l(u,{value:s.user_name,"onUpdate:value":e[0]||(e[0]=a=>s.user_name=a),placeholder:"用户名"},null,8,["value"])]),_:1}),l(d,{label:"昵称",name:"nick_name","has-feedback":"",rules:[{required:!0,message:"请输入昵称",trigger:"blur"}]},{default:t(()=>[l(u,{value:s.nick_name,"onUpdate:value":e[1]||(e[1]=a=>s.nick_name=a),placeholder:"昵称"},null,8,["value"])]),_:1}),l(d,{label:"密码",name:"password","has-feedback":"",rules:[{required:!0,message:"请输入密码",trigger:"blur"}]},{default:t(()=>[l(x,{value:s.password,"onUpdate:value":e[2]||(e[2]=a=>s.password=a),placeholder:"密码"},null,8,["value"])]),_:1}),l(d,{label:"确认密码",name:"re_password","has-feedback":"",rules:[{required:!0,message:"请再次确认密码"},{validator:N(L),message:"两次密码不一致",trigger:"blur"}]},{default:t(()=>[l(x,{value:s.re_password,"onUpdate:value":e[3]||(e[3]=a=>s.re_password=a),placeholder:"确认密码"},null,8,["value"])]),_:1},8,["rules"]),l(d,{label:"权限",name:"role",rules:[{required:!0,message:"请选择权限",trigger:"blur"}]},{default:t(()=>[l(v,{value:s.role,"onUpdate:value":e[4]||(e[4]=a=>s.role=a),style:{width:"200px"},options:_},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),l(V,{visible:n.modalUpdateVisible,"onUpdate:visible":e[8]||(e[8]=a=>n.modalUpdateVisible=a),title:"编辑用户",onOk:B},{default:t(()=>[l(U,{model:o,name:"basic",ref_key:"formRef",ref:c,"label-col":{span:4},"wrapper-col":{span:18},autocomplete:"off"},{default:t(()=>[l(d,{label:"昵称",name:"nick_name","has-feedback":"",rules:[{required:!0,message:"请输入昵称",trigger:"blur"}]},{default:t(()=>[l(u,{value:o.nick_name,"onUpdate:value":e[6]||(e[6]=a=>o.nick_name=a),placeholder:"昵称"},null,8,["value"])]),_:1}),l(d,{label:"权限",name:"role",rules:[{required:!0,message:"请选择权限",trigger:"blur"}]},{default:t(()=>[l(v,{value:o.role,"onUpdate:value":e[7]||(e[7]=a=>o.role=a),style:{width:"200px"},options:_,placeholder:"请选择权限"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),l(T,{onDelete:O,columns:n.columns,"base-url":"/api/users","like-title":"搜索用户昵称",ref_key:"gvbTable",ref:p,"page-size":5},{add:t(()=>[l(b,{type:"primary",onClick:e[9]||(e[9]=a=>n.modalVisible=!0)},{default:t(()=>[y("添加")]),_:1})]),edit:t(({record:a})=>[l(b,{class:"gvb_table_action update",onClick:g=>h(a),type:"primary"},{default:t(()=>[y("编辑")]),_:2},1032,["onClick"])]),delete:t(({record:a})=>[l(b,{class:"gvb_table_action update",onClick:g=>P(a),type:"danger"},{default:t(()=>[y("删除")]),_:2},1032,["onClick"])]),cell:t(({column:a,record:g})=>[a.key==="avatar"?(I(),q("img",{key:0,class:"gvb_table_avatar",src:g.avatar,alt:""},null,8,z)):S("",!0)]),filters:t(()=>[l(v,{class:"gvb_select",value:f.value,"onUpdate:value":e[10]||(e[10]=a=>f.value=a),style:{width:"200px"},allowClear:"",onChange:E,options:_,placeholder:"选择权限"},null,8,["value"])]),_:1},8,["columns"])])}}};export{J as default};
