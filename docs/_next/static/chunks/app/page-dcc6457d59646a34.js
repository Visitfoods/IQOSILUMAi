(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2442:(e,t,s)=>{Promise.resolve().then(s.bind(s,4889)),Promise.resolve().then(s.bind(s,6054))},4889:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var a=s(5155),l=s(2115);function i(){let e=(0,l.useRef)(null),[t,s]=(0,l.useState)(null),[i,r]=(0,l.useState)(null),n=async()=>{try{var t;if(console.log("Iniciando configura\xe7\xe3o da c\xe2mera..."),!(null===(t=navigator.mediaDevices)||void 0===t?void 0:t.getUserMedia))throw Error("Este navegador n\xe3o suporta acesso \xe0 c\xe2mera");let a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}},audio:!1});console.log("Acesso \xe0 c\xe2mera concedido!"),e.current&&(e.current.srcObject=a,e.current.onloadedmetadata=()=>{var t;null===(t=e.current)||void 0===t||t.play().then(()=>{console.log("V\xeddeo iniciado com sucesso!"),s(!0),r(null)}).catch(e=>{console.error("Erro ao iniciar playback:",e),r("Erro ao iniciar v\xeddeo."),s(!1)})})}catch(t){console.error("Erro ao configurar c\xe2mera:",t);let e="Erro ao acessar a c\xe2mera";t instanceof Error&&("NotAllowedError"===t.name||"PermissionDeniedError"===t.name?e="Acesso \xe0 c\xe2mera negado. Por favor, permita o acesso nas configura\xe7\xf5es do navegador.":"NotFoundError"===t.name?e="Nenhuma c\xe2mera encontrada.":("NotReadableError"===t.name||"AbortError"===t.name)&&(e="C\xe2mera em uso por outro aplicativo.")),r(e),s(!1)}};return((0,l.useEffect)(()=>{let t=e.current;return(async()=>{await n()})(),()=>{if(null==t?void 0:t.srcObject){let e=t.srcObject;e.getTracks().forEach(t=>{t.stop(),e.removeTrack(t)}),t&&(t.srcObject=null)}}},[]),!1===t)?(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center text-white text-center p-4 bg-black",children:(0,a.jsx)("p",{className:"text-red-400 text-lg font-semibold",children:i})}):(0,a.jsxs)("div",{className:"fixed inset-0 w-full h-full bg-black",children:[(0,a.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,muted:!0,className:"w-full h-full object-cover"}),(0,a.jsx)("div",{className:"fixed inset-0 bg-black/10"})," "]})}},6054:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var a=s(5155),l=s(2115),i=s(6766),r=s(6183),n=s(760),o=s(6903),c=s(1442);let m=[{id:1,name:"ILUMAi BREEZE",image:"/IMG/ILUMAi/ILUMAi_BREEZE.png",baseModel:"ILUMAi"},{id:2,name:"ILUMAi ONE",image:"/IMG/ILUMAi-ONE/ILUMAi-ONE_BREEZE.png",baseModel:"ILUMAi-ONE"},{id:3,name:"ILUMAi PRIME",image:"/IMG/ILUMAi-PRIME/ILUMAi-PRIME_BREEZE.png",baseModel:"ILUMAi-PRIME"}],d=[{color:"#3A3D4A",variant:"Midnight",label:"Midnight"},{color:"#95C4C7",variant:"Breeze",label:"Breeze"},{color:"#8F993D",variant:"Leaf",label:"Leaf"},{color:"#AA4C3A",variant:"Terracotta",label:"Terracotta"},{color:"#8690CA",variant:"Violet",label:"Violet",availableFor:["ILUMAi","ILUMAi-ONE"]}];function u(){let e;let[t,s]=(0,l.useState)(1),[u,x]=(0,l.useState)(null),[h,f]=(0,l.useState)(!1),[b,g]=(0,l.useState)(!1),[v,w]=(0,l.useState)(null),[p,j]=(0,l.useState)("carousel"),[N,E]=(0,l.useState)("Breeze"),[I,M]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(g(!0),!I){let e=0,t=setInterval(()=>{e<m.length?(x("right"),s(e=>(e+1)%m.length),e++):(clearInterval(t),M(!0))},1e3);return()=>clearInterval(t)}},[I]);let y=()=>{let e=m.length;return m.map((s,a)=>{let l;return l=a===t?"center":a===(t-1+e)%e?"left":a===(t+1)%e?"right":a<t?"left":"right",{...s,position:l}})},A=e=>{if(h)return;f(!0),x(e);let t=m.length;"left"===e?s(e=>(e-1+t)%t):s(e=>(e+1)%t),setTimeout(()=>{f(!1)},500)},P=e=>{E(e)},L=(e,t)=>{if("ILUMAi-PRIME"===t.baseModel)switch(e){case"Midnight":return"bg-[#131d2b]";case"Breeze":return"bg-[#82aaae]";case"Leaf":return"bg-[#0f2e27]";case"Terracotta":return"bg-[#2d1e27]";case"Violet":return"bg-[#898FC8]";default:return""}else switch(e){case"Midnight":return"bg-[#1E1E1E]";case"Breeze":return"bg-[#4A919E]";case"Leaf":return"bg-[#8a8e28]";case"Terracotta":return"bg-[#A75D5D]";case"Violet":return"bg-[#898FC8]";default:return""}},U={enter:e=>({x:"right"===e?"100%":"-100%",opacity:0,scale:.5,filter:"blur(2px) brightness(0.7)"}),center:{x:"0%",opacity:1,scale:1,zIndex:10,filter:"blur(0px) brightness(1)",transition:{duration:.5,ease:"easeInOut"}},left:{x:"-30%",opacity:.7,scale:.7,zIndex:0,filter:"blur(1px) brightness(0.8)",transition:{duration:.5,ease:"easeInOut"}},right:{x:"30%",opacity:.7,scale:.7,zIndex:0,filter:"blur(1px) brightness(0.8)",transition:{duration:.5,ease:"easeInOut"}},exit:e=>({x:"right"===e?"-100%":"100%",opacity:0,scale:.5,filter:"blur(2px) brightness(0.7)",transition:{duration:.5,ease:"easeInOut"}})},k=y();return b?(0,a.jsx)("div",{className:"relative w-full h-screen overflow-hidden",children:(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("div",{className:"relative w-full max-w-[1400px] h-full md:h-[80vh] px-4",children:"carousel"===p?(0,a.jsx)(r.P.div,{className:"relative w-full h-full",children:(0,a.jsx)("div",{className:"relative w-full h-full flex items-center justify-center",children:(0,a.jsxs)("div",{className:"relative w-[85%] h-[85%] flex items-center justify-center -mt-20 sm:-mt-24 md:-mt-28",children:[(0,a.jsx)(r.P.div,{className:"absolute inset-0 bottom-[20%] z-[5]",drag:"x",dragConstraints:{left:0,right:0},dragElastic:.2,onDragEnd:(e,t)=>{let{offset:s,velocity:a}=t;if(h)return;let l=s.x;Math.abs(l)>50&&(l<0?A("right"):A("left"))}}),(0,a.jsx)("button",{className:"absolute left-0 top-0 bottom-[20%] w-1/3 h-auto z-[15] bg-transparent focus:outline-none",onClick:()=>!h&&A("left"),disabled:h,"aria-label":"Imagem anterior"}),(0,a.jsx)("button",{className:"absolute right-0 top-0 bottom-[20%] w-1/3 h-auto z-[15] bg-transparent focus:outline-none",onClick:()=>!h&&A("right"),disabled:h,"aria-label":"Pr\xf3xima imagem"}),(0,a.jsx)(n.N,{mode:"sync",initial:!1,custom:u,children:k.map(e=>(0,a.jsxs)(r.P.div,{className:"absolute inset-0 flex items-center justify-center",custom:u,initial:"enter",animate:e.position,exit:"exit",variants:U,transition:{duration:.5},style:{zIndex:"center"===e.position?10:1},children:["center"===e.position&&(0,a.jsx)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:(0,a.jsx)("div",{className:"relative w-[65%] sm:w-[55%] md:w-[45%] aspect-square pointer-events-none",children:(0,a.jsx)(i.default,{src:e.image,alt:e.name,width:400,height:400,className:"object-contain w-full h-full relative z-10 animate-[pulse_2s_ease-in-out_infinite]",priority:!0,draggable:!1})})}),"center"!==e.position&&(0,a.jsx)(r.P.div,{className:"relative w-[45%] sm:w-[35%] md:w-[30%] aspect-square pointer-events-none",whileHover:{scale:1.05,opacity:.8,transition:{duration:.2}},children:(0,a.jsx)(i.default,{src:e.image,alt:e.name,width:400,height:400,className:"object-contain w-full h-full",priority:!0,draggable:!1})})]},e.id))}),(0,a.jsxs)("div",{className:"absolute w-full flex justify-between px-4 sm:px-8 md:px-12 bottom-[30%] sm:bottom-[32%] md:bottom-[34%]",children:[(0,a.jsx)("button",{onClick:()=>!h&&A("left"),className:"text-white p-2 hover:text-gray-300 transition-colors","aria-label":"Anterior",children:(0,a.jsx)(o.A,{className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"})}),(0,a.jsx)("button",{onClick:()=>!h&&A("right"),className:"text-white p-2 hover:text-gray-300 transition-colors","aria-label":"Pr\xf3ximo",children:(0,a.jsx)(c.A,{className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"})})]}),(0,a.jsx)("div",{className:"absolute bottom-[10%] left-0 right-0 flex justify-center",children:(0,a.jsxs)("button",{className:"bg-white text-black px-8 py-2 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors relative group z-30",onClick:()=>{let e=y().find(e=>"center"===e.position);e&&(w(e),E("Breeze"),j("detail"))},children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-white/30 rounded-full animate-pulse scale-[1.3] transition-transform duration-300"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-white/20 rounded-full animate-[pulse_2s_ease-in-out_infinite] scale-[1.5] transition-transform duration-300"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-white/10 rounded-full animate-[pulse_3s_ease-in-out_infinite] scale-[1.7] transition-transform duration-300"}),(0,a.jsx)("span",{className:"relative z-10",children:"Descobre"})]})})]})})},"carousel"):(0,a.jsx)(r.P.div,{className:"relative w-full h-full",children:(0,a.jsx)("div",{className:"relative h-screen flex flex-col justify-between pb-8 sm:pb-12 md:pb-16",children:(0,a.jsxs)("div",{className:"relative flex-1 flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"w-full flex justify-center -mt-3 sm:-mt-4 md:-mt-5 mb-0",children:(0,a.jsxs)("button",{onClick:()=>{w(null),j("carousel")},className:"relative text-white p-2 hover:text-gray-300 transition-colors group","aria-label":"Voltar",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full scale-150 group-hover:scale-[1.7] transition-transform duration-300"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full animate-pulse scale-[1.7] group-hover:scale-[1.9] transition-transform duration-300"}),(0,a.jsx)(o.A,{className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10"})]})}),(0,a.jsx)("h1",{className:"text-white font-iqos text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 mt-12 sm:mt-16 md:mt-20",children:((null==v?void 0:v.baseModel)||"").replace("ILUMAi","ILUMA i").replace("-"," ")}),(0,a.jsx)("div",{className:"flex justify-center items-start gap-8 sm:gap-12 md:gap-16 mb-6 sm:mb-8 md:mb-10 mt-4 sm:mt-6 md:mt-8",children:(null==v?void 0:v.baseModel)==="ILUMAi-ONE"?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/FlexPuff.svg",alt:"Flex Puff",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Puff"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/InicioAutomatico.svg",alt:"In\xedcio Autom\xe1tico",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"In\xedcio Autom\xe1tico"})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/FlexPuff.svg",alt:"Flex Puff",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Puff"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/FlexBattery.svg",alt:"Flex Battery",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Battery"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/Modo Pausa.svg",alt:"Modo Pausa",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Modo Pausa"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/Icons/EcraTatil.svg",alt:"Ecr\xe3 T\xe1til",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-3 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Ecr\xe3 T\xe1til"})]})]})}),(0,a.jsx)("div",{className:"relative w-full flex-1 flex items-center justify-center -mt-65 sm:-mt-70 md:-mt-80",children:(0,a.jsx)(i.default,{src:(e=N.toUpperCase(),"Terracotta"===N?e="TERRACOTA":"Violet"===N&&(e="-VIOLET"),"/IMG/".concat(v.baseModel,"/").concat(v.baseModel,"_").concat(e,".png")),alt:(null==v?void 0:v.name)||"",width:400,height:400,className:"w-40 sm:w-45 md:w-50 h-auto object-contain",priority:!0})}),(0,a.jsx)("div",{className:"absolute left-0 right-0 bottom-[25%] sm:bottom-[27%] md:bottom-[29%]",children:(0,a.jsx)("div",{className:"flex justify-center items-center gap-4 sm:gap-6 md:gap-8",children:d.filter(e=>!e.availableFor||e.availableFor.includes((null==v?void 0:v.baseModel)||"")).map(e=>(0,a.jsx)("button",{onClick:()=>P(e.variant),className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full ".concat(L(e.variant,v)," ").concat(N===e.variant?"ring-2 ring-offset-2 ring-white":""),"aria-label":"Selecionar cor ".concat(e.label)},e.color))})})]})})},"detail")})})}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[928,441,684,358],()=>t(2442)),_N_E=e.O()}]);