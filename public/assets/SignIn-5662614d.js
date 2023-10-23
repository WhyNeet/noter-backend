import{b as S,a3 as w,a as F,G as N,j as s,E as v,D as I,a4 as y,a1 as E}from"./index-51a4b34f.js";import{u as k,t as D,H as P,F as U,a as o,b as i,c as l,d as c,I as m,e as d,z as e}from"./Input-f9c83f5a.js";import{B,b as H}from"./Button-877d29ec.js";const L=e.object({email:e.string().email({message:"Invalid email"}),password:e.string().min(8).max(72)});function C(){const r=k({resolver:D(L),defaultValues:{email:"",password:""}}),u=S(),[h]=w(),{cloud:{initNotes:x}}=F(),{initUser:j}=N(),{control:n,handleSubmit:p,formState:{isSubmitting:t}}=r,b=async({email:a,password:g})=>{await y(a,g).then(()=>{x(""),j().then(()=>u(h.get("redirect_url")??"/"))}).catch(({response:{data:{error:f}}})=>{E(f)})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{children:[s.jsx(P,{className:"h-10 w-10 mb-6"}),s.jsx("h2",{className:"text-2xl font-semibold mb-10",children:"Welcome back!"}),s.jsx(U,{...r,children:s.jsxs("form",{onSubmit:p(b),className:"w-80 space-y-8",children:[s.jsx(o,{control:n,name:"email",render:({field:a})=>s.jsxs(i,{children:[s.jsx(l,{children:"Email"}),s.jsx(c,{children:s.jsx(m,{placeholder:"Email",...a})}),s.jsx(d,{children:"No spam. Used only for auth."})]})}),s.jsx(o,{control:n,name:"password",render:({field:a})=>s.jsxs(i,{children:[s.jsx(l,{children:"Password"}),s.jsx(c,{children:s.jsx(m,{placeholder:"Password",type:"password",...a})}),s.jsx(d,{children:"Must be 8 - 72 characters long. Super secret."})]})}),s.jsxs(B,{type:"submit",disabled:t,children:[t?s.jsx(v,{className:"h-4 w-4 mr-2"}):null,"Sign in"]})]})})]}),s.jsx(I,{to:"/auth/sign-up",className:H({variant:"link",className:"absolute bottom-10"}),children:"Don't have an account? Sign up."})]})}export{C as default};
