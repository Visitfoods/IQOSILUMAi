(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2442:(e,t,s)=>{Promise.resolve().then(s.bind(s,4889)),Promise.resolve().then(s.bind(s,6054))},4889:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var a=s(5155),l=s(2115);function i(){let e=(0,l.useRef)(null),[t,s]=(0,l.useState)(null),[i,r]=(0,l.useState)(null),n=async()=>{try{var t;if(console.log("Iniciando configura\xe7\xe3o da c\xe2mera..."),!(null===(t=navigator.mediaDevices)||void 0===t?void 0:t.getUserMedia))throw Error("Este navegador n\xe3o suporta acesso \xe0 c\xe2mera");let a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}},audio:!1});console.log("Acesso \xe0 c\xe2mera concedido!"),e.current&&(e.current.srcObject=a,e.current.onloadedmetadata=()=>{var t;null===(t=e.current)||void 0===t||t.play().then(()=>{console.log("V\xeddeo iniciado com sucesso!"),s(!0),r(null)}).catch(e=>{console.error("Erro ao iniciar playback:",e),r("Erro ao iniciar v\xeddeo."),s(!1)})})}catch(t){console.error("Erro ao configurar c\xe2mera:",t);let e="Erro ao acessar a c\xe2mera";t instanceof Error&&("NotAllowedError"===t.name||"PermissionDeniedError"===t.name?e="Acesso \xe0 c\xe2mera negado. Por favor, permita o acesso nas configura\xe7\xf5es do navegador.":"NotFoundError"===t.name?e="Nenhuma c\xe2mera encontrada.":("NotReadableError"===t.name||"AbortError"===t.name)&&(e="C\xe2mera em uso por outro aplicativo.")),r(e),s(!1)}};return((0,l.useEffect)(()=>((async()=>{await n()})(),()=>{var t;if(null===(t=e.current)||void 0===t?void 0:t.srcObject){let t=e.current.srcObject;t.getTracks().forEach(e=>{e.stop(),t.removeTrack(e)}),e.current.srcObject=null}}),[]),!1===t)?(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center text-white text-center p-4 bg-black",children:(0,a.jsx)("p",{className:"text-red-400 text-lg font-semibold",children:i})}):(0,a.jsxs)("div",{className:"fixed inset-0 w-full h-full bg-black",children:[(0,a.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,muted:!0,className:"w-full h-full object-cover"}),(0,a.jsx)("div",{className:"fixed inset-0 bg-black/10"})," "]})}},6054:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var a=s(5155),l=s(2115),i=s(6766),r=s(6183),n=s(760),c=s(6903),o=s(1442);let m=[{id:1,name:"ILUMAi BREEZE",image:"/IMG/ILUMAi/ILUMAi_BREEZE.png",baseModel:"ILUMAi"},{id:2,name:"ILUMAi ONE",image:"/IMG/ILUMAi-ONE/ILUMAi-ONE_BREEZE.png",baseModel:"ILUMAi-ONE"},{id:3,name:"ILUMAi PRIME",image:"/IMG/ILUMAi-PRIME/ILUMAi-PRIME_BREEZE.png",baseModel:"ILUMAi-PRIME"}],d=[{color:"#3A3D4A",variant:"Midnight",label:"Midnight"},{color:"#95C4C7",variant:"Breeze",label:"Breeze"},{color:"#8F993D",variant:"Leaf",label:"Leaf"},{color:"#AA4C3A",variant:"Terracotta",label:"Terracotta"},{color:"#8690CA",variant:"Violet",label:"Violet",availableFor:["ILUMAi","ILUMAi-ONE"]}];function x(){let e;let[t,s]=(0,l.useState)(1),[x,h]=(0,l.useState)(null),[u,f]=(0,l.useState)(!1),[b,g]=(0,l.useState)(!1),[v,w]=(0,l.useState)(null),[j,p]=(0,l.useState)("carousel"),[N,E]=(0,l.useState)("Breeze");(0,l.useEffect)(()=>{g(!0)},[]);let I=()=>{let e=m.length;return m.map((s,a)=>{let l;return l=a===t?"center":a===(t-1+e)%e?"left":a===(t+1)%e?"right":a<t?"left":"right",{...s,position:l}})},M=e=>{if(u)return;f(!0),h(e);let t=m.length;"left"===e?s(e=>(e-1+t)%t):s(e=>(e+1)%t),setTimeout(()=>{f(!1)},500)},A=()=>{w(null),p("carousel")},y=e=>{E(e)},P=(e,t)=>{if("ILUMAi-PRIME"===t.baseModel)switch(e){case"Midnight":return"bg-[#131d2b]";case"Breeze":return"bg-[#82aaae]";case"Leaf":return"bg-[#0f2e27]";case"Terracotta":return"bg-[#2d1e27]";case"Violet":return"bg-[#898FC8]";default:return""}else switch(e){case"Midnight":return"bg-[#1E1E1E]";case"Breeze":return"bg-[#4A919E]";case"Leaf":return"bg-[#8a8e28]";case"Terracotta":return"bg-[#A75D5D]";case"Violet":return"bg-[#898FC8]";default:return""}},L={enter:e=>({x:"right"===e?"100%":"-100%",opacity:0,scale:.5,filter:"blur(2px) brightness(0.7)"}),center:{x:"0%",opacity:1,scale:1,zIndex:10,filter:"blur(0px) brightness(1)",transition:{duration:.5,ease:"easeInOut"}},left:{x:"-30%",opacity:.7,scale:.7,zIndex:0,filter:"blur(1px) brightness(0.8)",transition:{duration:.5,ease:"easeInOut"}},right:{x:"30%",opacity:.7,scale:.7,zIndex:0,filter:"blur(1px) brightness(0.8)",transition:{duration:.5,ease:"easeInOut"}},exit:e=>({x:"right"===e?"-100%":"100%",opacity:0,scale:.5,filter:"blur(2px) brightness(0.7)",transition:{duration:.5,ease:"easeInOut"}})},k=I();return b?(0,a.jsx)("div",{className:"relative w-full h-screen overflow-hidden",children:(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("div",{className:"relative w-full max-w-[1400px] h-full md:h-[80vh] px-4",children:"carousel"===j?(0,a.jsx)(r.P.div,{className:"relative w-full h-full",children:(0,a.jsx)("div",{className:"relative w-full h-full flex items-center justify-center",children:(0,a.jsxs)("div",{className:"relative w-[85%] h-[85%] flex items-center justify-center",children:[(0,a.jsx)("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-30",children:(0,a.jsx)("button",{onClick:A,className:"text-white p-2 hover:text-gray-300 transition-colors","aria-label":"Voltar",children:(0,a.jsx)(c.A,{className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-90"})})}),(0,a.jsx)("button",{className:"absolute left-0 top-0 w-1/3 h-full z-20 bg-transparent focus:outline-none",onClick:()=>!u&&M("left"),disabled:u,"aria-label":"Imagem anterior"}),(0,a.jsx)("button",{className:"absolute right-0 top-0 w-1/3 h-full z-20 bg-transparent focus:outline-none",onClick:()=>!u&&M("right"),disabled:u,"aria-label":"Pr\xf3xima imagem"}),(0,a.jsx)(n.N,{mode:"sync",initial:!1,custom:x,children:k.map(e=>(0,a.jsxs)(r.P.div,{className:"absolute inset-0 flex items-center justify-center pointer-events-none",custom:x,initial:"enter",animate:e.position,exit:"exit",variants:L,transition:{duration:.5},children:["center"===e.position&&(0,a.jsx)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:(0,a.jsx)("div",{className:"relative w-[50%] sm:w-[40%] md:w-[35%] aspect-square pointer-events-none",children:(0,a.jsx)(i.default,{src:e.image,alt:e.name,width:400,height:400,className:"object-contain w-full h-full",priority:!0,draggable:!1})})}),"center"!==e.position&&(0,a.jsx)(r.P.div,{className:"relative w-[30%] sm:w-[25%] md:w-[20%] aspect-square pointer-events-none",whileHover:{scale:1.05,opacity:.8,transition:{duration:.2}},children:(0,a.jsx)(i.default,{src:e.image,alt:e.name,width:400,height:400,className:"object-contain w-full h-full",priority:!0,draggable:!1})})]},e.id))}),(0,a.jsxs)("div",{className:"absolute bottom-[30%] left-0 right-0 flex justify-center items-center space-x-24",children:[(0,a.jsx)("button",{onClick:()=>!u&&M("left"),className:"p-2 text-white hover:text-gray-300 transition-colors","aria-label":"Anterior",children:(0,a.jsx)(c.A,{className:"w-8 h-8 sm:w-10 sm:h-10"})}),(0,a.jsx)("button",{onClick:()=>!u&&M("right"),className:"p-2 text-white hover:text-gray-300 transition-colors","aria-label":"Pr\xf3ximo",children:(0,a.jsx)(o.A,{className:"w-8 h-8 sm:w-10 sm:h-10"})})]}),(0,a.jsx)("div",{className:"absolute bottom-[20%] left-0 right-0 flex justify-center",children:(0,a.jsx)("button",{className:"bg-white text-black px-8 py-2 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors",onClick:()=>{let e=I().find(e=>"center"===e.position);e&&(w(e),E("Breeze"),p("detail"))},children:"Descobre"})})]})})},"carousel"):(0,a.jsx)(r.P.div,{className:"relative w-full h-full",children:(0,a.jsx)("div",{className:"relative h-screen flex flex-col justify-between pb-8 sm:pb-12 md:pb-16",children:(0,a.jsxs)("div",{className:"relative flex-1 flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"w-full flex justify-center mb-2",children:(0,a.jsx)("button",{onClick:A,className:"text-white p-2 hover:text-gray-300 transition-colors","aria-label":"Voltar",children:(0,a.jsx)(c.A,{className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rotate-90"})})}),(0,a.jsx)("h1",{className:"text-white font-iqos text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8",children:((null==v?void 0:v.baseModel)||"").replace("ILUMAi","ILUMA i").replace("-"," ")}),(0,a.jsx)("div",{className:"flex justify-center items-start gap-8 sm:gap-12 md:gap-16 mb-6 sm:mb-8 md:mb-10",children:(null==v?void 0:v.baseModel)==="ILUMAi-ONE"?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/FlexPuff.svg",alt:"Flex Puff",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Puff"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/InicioAutomatico.svg",alt:"In\xedcio Autom\xe1tico",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"In\xedcio Autom\xe1tico"})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/FlexPuff.svg",alt:"Flex Puff",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Puff"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/FlexBattery.svg",alt:"Flex Battery",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Battery"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/Modo Pausa.svg",alt:"Modo Pausa",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Modo Pausa"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/EcraTatil.svg",alt:"Ecr\xe3 T\xe1til",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Ecr\xe3 T\xe1til"})]})]})}),(0,a.jsx)("div",{className:"relative w-full flex-1 flex items-center justify-center",children:(0,a.jsx)(i.default,{src:(e=N.toUpperCase(),"Terracotta"===N?e="TERRACOTA":"Violet"===N&&(e="-VIOLET"),"/IMG/".concat(v.baseModel,"/").concat(v.baseModel,"_").concat(e,".png")),alt:(null==v?void 0:v.name)||"",width:400,height:400,className:"w-48 sm:w-56 md:w-64 h-auto object-contain",priority:!0})}),(0,a.jsx)("div",{className:"absolute left-0 right-0 bottom-[15%] sm:bottom-[17%] md:bottom-[19%]",children:(0,a.jsx)("div",{className:"flex justify-center items-center gap-4 sm:gap-6 md:gap-8",children:d.filter(e=>!e.availableFor||e.availableFor.includes((null==v?void 0:v.baseModel)||"")).map(e=>(0,a.jsx)("button",{onClick:()=>y(e.variant),className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full ".concat(P(e.variant,v)," ").concat(N===e.variant?"ring-2 ring-offset-2 ring-white":""),"aria-label":"Selecionar cor ".concat(e.label)},e.color))})}),(0,a.jsxs)("div",{className:"absolute w-full flex justify-between px-4 sm:px-8 md:px-12 bottom-[30%] sm:bottom-[32%] md:bottom-[34%]",children:[(0,a.jsx)("button",{onClick:()=>!u&&M("left"),className:"text-white p-2","aria-label":"Anterior",children:(0,a.jsx)(c.A,{className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"})}),(0,a.jsx)("button",{onClick:()=>!u&&M("right"),className:"text-white p-2","aria-label":"Pr\xf3ximo",children:(0,a.jsx)(o.A,{className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"})})]})]})})},"detail")})})}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[928,441,684,358],()=>t(2442)),_N_E=e.O()}]);