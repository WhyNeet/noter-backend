import{j as a}from"./index-9e117f01.js";import{L as o,a as n}from"./LexicalHtml-bc570db1.js";var i={},l=o;i.createHeadlessEditor=function(t){let e=l.createEditor(t);return e._headless=!0,"registerDecoratorListener registerRootListener registerMutationListener getRootElement setRootElement getElementByKey focus blur".split(" ").forEach(r=>{e[r]=()=>{throw Error(`${r} is not supported in headless mode`)}}),e};const c=i;var d=c;function E({content:t}){return a.jsxs("div",{children:[a.jsx("div",{dangerouslySetInnerHTML:{__html:m(t)}})," "]})}const m=t=>{const e=d.createHeadlessEditor();e.setEditorState(e.parseEditorState(t));let r="";return e.update(()=>{const s=o.$getRoot().select();s.anchor.offset=0,s.focus.offset=3,o.$setSelection(s),r=n.$generateHtmlFromNodes(e,o.$getSelection())}),r};export{E as default};
