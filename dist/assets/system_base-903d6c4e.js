import{a as p,u as f,b as y,r as v,d as b,o as r,e as w,g as a,p as i,f as u,w as _,T as q,i as j,H as C}from"./index-a4ff3a35.js";const k={class:"gvb_settings_bg"},g={class:"gvb_sub_menu"},h={__name:"system_base",setup(S){const d=p(),m=f(),l=y(),e=v(m.name);v(l.userInfo.role===1);function o(n,s){d.push({name:n}),l.addTab({name:n,title:s}),e.value=n}return(n,s)=>{const c=b("router-view");return r(),w("div",k,[a("div",g,[a("a",{class:i({active:e.value==="system_site"}),href:"javascript:void (0)",onClick:s[0]||(s[0]=t=>o("system_site","网站配置"))},"网站配置",2),a("a",{class:i({active:e.value==="system_email"}),disabled:"isShow",href:"javascript:void (0)",onClick:s[1]||(s[1]=t=>o("system_email","邮箱配置"))},"邮箱配置",2),a("a",{class:i({active:e.value==="system_qiniu"}),disabled:"isShow",href:"javascript:void (0)",onClick:s[2]||(s[2]=t=>o("system_qiniu","七牛云配置"))},"七牛云配置",2),a("a",{class:i({active:e.value==="system_qq"}),disabled:"isShow",href:"javascript:void (0)",onClick:s[3]||(s[3]=t=>o("system_qq","qq配置"))},"qq配置",2),a("a",{class:i({active:e.value==="system_jwt"}),disabled:"isShow",href:"javascript:void (0)",onClick:s[4]||(s[4]=t=>o("system_jwt","jwt配置"))},"jwt配置",2)]),u(c,null,{default:_(({Component:t})=>[u(q,{name:"fade",mode:"out-in"},{default:_(()=>[(r(),j(C(t)))]),_:2},1024)]),_:1})])}}};export{h as default};
