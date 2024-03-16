import{a8 as P,S as g,o as r,f as V,y as s,x as t,Y as T,T as o,Z as A,i as f,t as n,V as k,h as u,q as _,e as m,F as b,B as y,a9 as E,W as F,a3 as R,aa as D,I as x}from"./main-c1b0d566.js";import{u as M}from"./Users-2206f667.js";import{V as c,a as C}from"./VRow-3613c4f6.js";import{V as j}from"./VPagination-e2cdce78.js";const q=["value"],K={key:1,class:"d-block"},H={__name:"Index",setup(L){const e=M(),h=P(),v=g([]),I=g([{text:"Id",value:"id",sortable:!1},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Email",align:"start",sortable:!1,value:"email"},{text:"Role",align:"start",sortable:!1,value:"roles"},{text:"Actions",value:"actions",sortable:!1}]),U=g([5,10,20]),p=async()=>{await e.fetchUsers(),v.value=e.users.map(B)},S=l=>{e.params.page=l,p()},w=l=>{e.params.size=l,e.params.page=1,p()},B=l=>({id:l.id,name:l.name,email:l.email,role:l.roles[0]}),N=l=>{h.push({name:"EditUser",params:{id:l}})},$=l=>{confirm("Are you sure you want to delete?")&&(e.deleteUser(l),p())};return(l,d)=>(r(),V(C,{align:"center",class:"list px-3 mx-auto"},{default:s(()=>[t(c,{cols:"12",sm:"8"},{default:s(()=>[t(T,{modelValue:o(e).params.keyword,"onUpdate:modelValue":d[0]||(d[0]=a=>o(e).params.keyword=a),label:"Search by Name",onKeyup:d[1]||(d[1]=a=>{l.page=1,p()})},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"4"},{default:s(()=>[t(A,{color:"success",to:{name:"CreateUser"}},{default:s(()=>[f(n(l.$t("create_button")),1)]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:s(()=>[o(e).successMsg?(r(),V(k,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":l.$t("close")},{default:s(()=>[u("small",null,n(o(e).successMsg),1)]),_:1},8,["close-label"])):_("",!0),o(e).errors.length!==0?(r(),V(k,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":l.$t("close")},{default:s(()=>[typeof o(e).errors=="object"?(r(!0),m(b,{key:0},y(o(e).errors,(a,i)=>(r(),m("small",{class:"d-block",value:i,key:i},n(a),9,q))),128)):(r(),m("small",K,n(o(e).errors),1))]),_:1},8,["close-label"])):_("",!0),t(C,null,{default:s(()=>[t(c,{cols:"4",sm:"3"},{default:s(()=>[t(E,{modelValue:o(e).params.size,"onUpdate:modelValue":[d[2]||(d[2]=a=>o(e).params.size=a),w],items:U.value,label:"Items per Page"},null,8,["modelValue","items"])]),_:1}),t(c,{cols:"12",sm:"9"},{default:s(()=>[t(j,{rounded:"circle",modelValue:o(e).params.page,"onUpdate:modelValue":[d[3]||(d[3]=a=>o(e).params.page=a),S],length:o(e).params.totalPages,"total-visible":"7","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}),t(c,{cols:"12",sm:"12"},{default:s(()=>[t(F,{class:"mx-auto",tile:""},{default:s(()=>[t(R,null,{default:s(()=>[f("Users")]),_:1}),t(D,null,{default:s(()=>[u("thead",null,[u("tr",null,[(r(!0),m(b,null,y(I.value,a=>(r(),m("th",{key:a.id},n(a.text),1))),128))])]),u("tbody",null,[(r(!0),m(b,null,y(v.value,a=>{var i;return r(),m("tr",{key:a.id},[u("td",null,n(a.id),1),u("td",null,n(a.name),1),u("td",null,n(a.email),1),u("td",null,n((i=a.role)==null?void 0:i.name),1),u("td",null,[t(x,{small:"",color:"primary",class:"mr-2",onClick:z=>N(a.id)},{default:s(()=>[f("mdi-pencil")]),_:2},1032,["onClick"]),t(x,{small:"",color:"error",onClick:z=>$(a.id)},{default:s(()=>[f("mdi-delete")]),_:2},1032,["onClick"])])])}),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{H as default};