import{_ as c,k as h,z as i,l as p,o as r,e as f,x as t,y as l,I as b,i as d,t as n,Z as m,f as V,V as k,q as C,n as $,Y as g,h as x}from"./main-c1b0d566.js";import{s as y}from"./calendar.esm-11424558.js";import{V as w}from"./VForm-610ff08a.js";import{V as B}from"./VSheet-e3bdcd86.js";const N={components:{InputText:h,Calendar:y},data:()=>({maxDate:new Date,NameRules:[e=>(e==null?void 0:e.length)>=3?!0:" name must be at least 3 characters."],child:{name:"",birth_date:""},alert_text:null}),methods:{goBack(){this.$router.go(-1)},submit(){i.post(`/api/child/${this.$route.params.id}/update`,this.child).then(e=>{e.data.status==200&&(this.alert_text="children updated successfully ",this.child=e.data.child),console.log(e.data.children)})},getChild(){i.get(`/api/child/${this.$route.params.id}`).then(e=>{this.child=e.data.child})}},mounted(){this.getChild()}},D={class:"card flex justify-content-center"};function _(e,a,I,R,S,o){const u=p("Calendar");return r(),f("div",null,[t(m,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:o.goBack},{default:l(()=>[t(b,{start:"",icon:"mdi-arrow-left"}),d(" "+n(e.$t("back")),1)]),_:1},8,["onClick"]),t(B,{"max-width":"1200",class:"mx-auto"},{default:l(()=>[e.alert_text!=null?(r(),V(k,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["close-label","text"])):C("",!0),t(w,{"fast-fail":"",onSubmit:a[2]||(a[2]=$(()=>{},["prevent"]))},{default:l(()=>[t(g,{modelValue:e.child.name,"onUpdate:modelValue":a[0]||(a[0]=s=>e.child.name=s),label:e.$t("child_name"),rules:e.NameRules},null,8,["modelValue","label","rules"]),x("div",D,[t(u,{style:{width:"100%"},showButtonBar:"",modelValue:e.child.birth_date,"onUpdate:modelValue":a[1]||(a[1]=s=>e.child.birth_date=s),showIcon:"",placeholder:"dd/mm/yy",maxDate:e.maxDate,rules:e.NameRules},null,8,["modelValue","maxDate","rules"])]),t(m,{type:"submit",onClick:o.submit,block:"",class:"mt-2"},{default:l(()=>[d(n(e.$t("submit")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})])}const U=c(N,[["render",_]]);export{U as default};