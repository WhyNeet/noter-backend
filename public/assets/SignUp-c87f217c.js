import{b as S,a2 as w,a as F,G as v,j as s,E as y,D as I,a4 as U,a0 as E}from"./index-9e117f01.js";import{u as H,t as P,H as k,F as A,a as n,b as t,c as i,d as o,I as l,e as m,z as a}from"./Input-805e2ddf.js";import{B,b as D}from"./Button-457c4315.js";const L=a.object({email:a.string().email({message:"Invalid email"}),password:a.string().min(8).max(72),name:a.string().min(2).max(32).optional()});function G(){const c=H({resolver:P(L),defaultValues:{email:"",password:"",name:""}}),h=S(),[x]=w(),{cloud:{initNotes:u}}=F(),{initUser:j}=v(),{control:r,handleSubmit:p,formState:{isSubmitting:d}}=c,b=async({email:e,password:g,name:f})=>{await U(e,f??null,g).then(()=>{u(""),j().then(()=>{h(x.get("redirect_url")??"/")})}).catch(({response:{data:{error:N}}})=>{E(N)})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx(k,{className:"h-10 w-10 mb-6"}),s.jsx("h2",{className:"text-2xl font-semibold mb-10",children:"Hello there!"}),s.jsx(A,{...c,children:s.jsxs("form",{onSubmit:p(b),className:"w-80 space-y-8",children:[s.jsx(n,{control:r,name:"email",render:({field:e})=>s.jsxs(t,{children:[s.jsx(i,{children:"Email"}),s.jsx(o,{children:s.jsx(l,{placeholder:"Email",...e})}),s.jsx(m,{children:"No spam. Used only for auth."})]})}),s.jsx(n,{control:r,name:"name",render:({field:e})=>s.jsxs(t,{children:[s.jsx(i,{children:"Name"}),s.jsx(o,{children:s.jsx(l,{placeholder:"Name",type:"text",...e})}),s.jsx(m,{children:"Optional."})]})}),s.jsx(n,{control:r,name:"password",render:({field:e})=>s.jsxs(t,{children:[s.jsx(i,{children:"Password"}),s.jsx(o,{children:s.jsx(l,{placeholder:"Password",type:"password",...e})}),s.jsx(m,{children:"Must be 8 - 72 characters long. Super secret."})]})}),s.jsxs(B,{type:"submit",disabled:d,children:[d?s.jsx(y,{className:"h-4 w-4 mr-2"}):null,"Sign up"]})]})})]}),s.jsx(I,{to:"/auth/sign-in",className:D({variant:"link",className:"absolute bottom-10"}),children:"Already have an account? Sign in."})]})}export{G as default};
