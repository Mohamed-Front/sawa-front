import{_ as b,o as a,e as d,x as s,y as o,h as f,t as h,F as m,B as v,f as r,Y as C,Z as p,z as l,l as k,I as N,i as q,V as Q,q as V,n as A,a9 as y,a2 as I}from"./main-c1b0d566.js";import{V as P,a as H,b as w,c as B}from"./VExpansionPanel-1e388bfa.js";import{V as E}from"./VForm-610ff08a.js";import{V as S}from"./VCheckbox-94083b06.js";import{V as x}from"./VSheet-e3bdcd86.js";const F={name:"question",props:["header","questionsAndHeader"],emits:["question-inputs"],data:()=>({NameRules:[e=>e?!0:" Field is required."],headers:[],questionsNumbers:[1,2],questionCounter:2,questionInputs:[],color:"success",icon:"mdi-plus"}),methods:{addQuestion(){this.questionCounter<3?(this.questionsNumbers.push(++this.questionCounter),this.color="red",this.icon="mdi-minus"):(--this.questionCounter,this.questionsNumbers.splice(-1,1),this.questionInputs.splice(-1,1),this.color="success",this.icon="mdi-plus")},returnparent(){this.$emit("question-inputs",this.header.id,this.questionInputs)},setData(){if(console.log(this.questionsAndHeader),this.questionsAndHeader!=null){this.questionsNumbers=[];let e=1;this.questionsAndHeader.forEach(t=>{this.questionsNumbers.push(e++),this.questionInputs.push(t.questions.title)}),this.questionCounter=this.questionsAndHeader.length,this.questionCounter==3?(this.color="red",this.icon="mdi-minus"):(this.color="success",this.icon="mdi-plus")}this.returnparent()}},watch:{questionCounter(e){e>3&&this.questionsNumbers.splice(-1)}},created(){this.setData()}},U={class:"pa-4"},R={class:"d-flex justify-end"};function T(e,t,u,g,$,n){return a(),d(m,null,[s(P,{"expand-icon":"mdi-plus","collapse-icon":"mdi-minus"},{default:o(()=>[f("div",U,h(u.header.title),1)]),_:1}),s(H,null,{default:o(()=>[(a(!0),d(m,null,v(e.questionsNumbers,(c,i)=>(a(),r(C,{rules:e.NameRules,label:e.$t("question"),modelValue:e.questionInputs[i],"onUpdate:modelValue":_=>e.questionInputs[i]=_,onKeyup:n.returnparent},null,8,["rules","label","modelValue","onUpdate:modelValue","onKeyup"]))),256)),f("div",R,[s(p,{icon:e.icon,color:e.color,onClick:n.addQuestion},null,8,["icon","color","onClick"])])]),_:1})],64)}const D=b(F,[["render",T]]),K={data:()=>({NameRules:[e=>(e==null?void 0:e.length)>=3?!0:" name must be at least 3 characters."],evaluation:{title:"",side_profile_id:"",six_month:!0,questions:[]},alert_text:null,snackbar:!0,selected:[],headers:[],questions:[],headerAndQuestions:null,sideProfile:[]}),components:{questionComponent:D},methods:{goBack(){this.$router.go(-1)},async submit(){const{valid:e}=await this.$refs.form.validate();e&&(this.evaluation.questions=[],this.questions.forEach((t,u)=>{this.evaluation.questions.push({headerId:u,questions:t})}),l.post(`/api/evaluations/${this.$route.params.id}/update`,this.evaluation).then(t=>{t.data.status==200&&(this.alert_text="evaluation edited successfully ")}))},getSideProfile(){l.get("/api/side-profiles").then(e=>{this.sideProfile=e.data.sideProfile.map(t=>({title:t.title,value:t.id}))})},getQuestionHeaders(){l.get("/api/evaluationheaders").then(e=>{this.headers=e.data.headers,console.log(this.headers)})},getQuestions(){l.get(`/api/evaluations/${this.$route.params.id}`).then(e=>{this.headerAndQuestions=e.data.evaluation,console.log(this.headerAndQuestions)}),l.get(`/api/evaluations/${this.$route.params.id}/show`).then(e=>{this.evaluation.title=e.data.evaluation.title,this.evaluation.side_profile_id=e.data.evaluation.side_profile_id,e.data.evaluation.six_month==0&&(this.evaluation.six_month=!1)})},addQuestion(e,t){this.questions[e]=t}},created(){this.getQuestions(),this.getQuestionHeaders(),this.getSideProfile()}};function j(e,t,u,g,$,n){const c=k("questionComponent");return a(),d("div",null,[s(p,{height:"45",class:"mb-5 text-white",color:"#135C65",onClick:n.goBack},{default:o(()=>[s(N,{start:"",icon:"mdi-arrow-left"}),q(" "+h(e.$t("back")),1)]),_:1},8,["onClick"]),s(x,{"max-width":"1200",class:"mx-auto"},{default:o(()=>[e.alert_text!=null?(a(),r(Q,{key:0,type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close"),text:e.alert_text,class:"mb-8"},null,8,["close-label","text"])):V("",!0),s(E,{"fast-fail":"",onSubmit:t[3]||(t[3]=A(()=>{},["prevent"])),ref:"form"},{default:o(()=>[s(C,{modelValue:e.evaluation.title,"onUpdate:modelValue":t[0]||(t[0]=i=>e.evaluation.title=i),label:e.$t("evaluation_title"),rules:e.NameRules},null,8,["modelValue","label","rules"]),s(y,{label:e.$t("side_profile_title"),modelValue:e.evaluation.side_profile_id,"onUpdate:modelValue":t[1]||(t[1]=i=>e.evaluation.side_profile_id=i),items:e.sideProfile},null,8,["label","modelValue","items"]),s(S,{modelValue:e.evaluation.six_month,"onUpdate:modelValue":t[2]||(t[2]=i=>e.evaluation.six_month=i),label:e.$t("evaluation_exception")},null,8,["modelValue","label"]),s(I,{fluid:""},{default:o(()=>[s(w,null,{default:o(()=>[(a(!0),d(m,null,v(e.headers,i=>(a(),r(B,{key:i.id},{default:o(()=>[e.headerAndQuestions?(a(),r(c,{key:0,header:i,questionsAndHeader:e.headerAndQuestions[i.id],onQuestionInputs:n.addQuestion},null,8,["header","questionsAndHeader","onQuestionInputs"])):V("",!0)]),_:2},1024))),128))]),_:1})]),_:1}),s(p,{type:"submit",onClick:n.submit,block:"",class:"mt-2"},{default:o(()=>[q(h(e.$t("submit")),1)]),_:1},8,["onClick"])]),_:1},512)]),_:1})])}const G=b(K,[["render",j]]);export{G as default};
