(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2442:(e,t,s)=>{Promise.resolve().then(s.bind(s,4889)),Promise.resolve().then(s.bind(s,6054))},4889:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var a=s(5155),l=s(2115);function i(){let e=(0,l.useRef)(null),[t,s]=(0,l.useState)(null),[i,r]=(0,l.useState)(null),n=async()=>{try{var t;if(console.log("Iniciando configura\xe7\xe3o da c\xe2mera..."),!(null===(t=navigator.mediaDevices)||void 0===t?void 0:t.getUserMedia))throw Error("Este navegador n\xe3o suporta acesso \xe0 c\xe2mera");let a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}},audio:!1});if(console.log("Acesso \xe0 c\xe2mera concedido!"),e.current){e.current.srcObject=a;try{await e.current.play(),console.log("V\xeddeo iniciado com sucesso!"),s(!0),r(null)}catch(e){console.error("Erro ao iniciar playback:",e),r("Erro ao iniciar v\xeddeo."),s(!1)}}}catch(t){console.error("Erro ao configurar c\xe2mera:",t);let e="Erro ao acessar a c\xe2mera";t instanceof Error&&("NotAllowedError"===t.name||"PermissionDeniedError"===t.name?e="Acesso \xe0 c\xe2mera negado. Por favor, permita o acesso nas configura\xe7\xf5es do navegador.":"NotFoundError"===t.name?e="Nenhuma c\xe2mera encontrada.":("NotReadableError"===t.name||"AbortError"===t.name)&&(e="C\xe2mera em uso por outro aplicativo.")),r(e),s(!1)}};return((0,l.useEffect)(()=>(n(),()=>{var t;(null===(t=e.current)||void 0===t?void 0:t.srcObject)&&e.current.srcObject.getTracks().forEach(e=>e.stop())}),[]),null===t)?(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center text-white text-center p-4",children:(0,a.jsx)("div",{className:"animate-pulse",children:(0,a.jsx)("p",{className:"text-lg font-semibold",children:"A aguardar acesso \xe0 c\xe2mera..."})})}):!1===t?(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center text-white text-center p-4",children:(0,a.jsx)("p",{className:"text-red-400 text-lg font-semibold",children:i})}):(0,a.jsx)("div",{className:"fixed inset-0 -z-20 overflow-hidden",children:(0,a.jsx)("video",{ref:e,autoPlay:!0,playsInline:!0,muted:!0,className:"absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover transform scale-x-[-1]"})})}},6054:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),l=s(2115),i=s(6766),r=s(6183),n=s(760);let o=[{id:1,name:"ILUMAi Breeze",image:"/IMG/ILUMAi/ILUMAi_BREEZE.png",baseModel:"ILUMAi"},{id:2,name:"ILUMAi Prime Breeze",image:"/IMG/ILUMAi-PRIME/ILUMAi-PRIME_BREEZE.png",baseModel:"ILUMAi-PRIME"},{id:3,name:"ILUMAi One Breeze",image:"/IMG/ILUMAi-ONE/ILUMAi-ONE_BREEZE.png",baseModel:"ILUMAi-ONE"}],c=[{color:"#3A3D4A",variant:"Midnight",label:"Midnight"},{color:"#95C4C7",variant:"Breeze",label:"Breeze"},{color:"#8F993D",variant:"Leaf",label:"Leaf"},{color:"#AA4C3A",variant:"Terracotta",label:"Terracotta"},{color:"#8690CA",variant:"Violet",label:"Violet",availableFor:["ILUMAi","ILUMAi-ONE"]}];function d(){let e;let[t,s]=(0,l.useState)(1),[d,m]=(0,l.useState)(null),[u,h]=(0,l.useState)(!1),[x,f]=(0,l.useState)(!1),[w,p]=(0,l.useState)(null),[v,b]=(0,l.useState)("carousel"),[g,j]=(0,l.useState)("Breeze");(0,l.useEffect)(()=>{f(!0)},[]);let N=()=>{let e=o.length;return o.map((s,a)=>{let l;return l=a===t?"center":a===(t-1+e)%e?"left":a===(t+1)%e?"right":a<t?"left":"right",{...s,position:l}})},y=e=>{if(u)return;h(!0),m(e);let t=o.length;"left"===e?s(e=>(e-1+t)%t):s(e=>(e+1)%t),setTimeout(()=>{h(!1)},500)},I=e=>{j(e)},M={enter:e=>({x:"right"===e?"100%":"-100%",opacity:0,scale:.5,filter:"blur(2px) brightness(0.7)"}),center:{x:"0%",opacity:1,scale:1,zIndex:10,filter:"blur(0px) brightness(1)",transition:{duration:.5,ease:"easeInOut"}},left:{x:"-30%",opacity:.7,scale:.7,zIndex:0,filter:"blur(1px) brightness(0.8)",transition:{duration:.5,ease:"easeInOut"}},right:{x:"30%",opacity:.7,scale:.7,zIndex:0,filter:"blur(1px) brightness(0.8)",transition:{duration:.5,ease:"easeInOut"}},exit:e=>({x:"right"===e?"-100%":"100%",opacity:0,scale:.5,filter:"blur(2px) brightness(0.7)",transition:{duration:.5,ease:"easeInOut"}})},E=N();return x?(0,a.jsx)("div",{className:"relative w-full h-screen overflow-hidden",children:(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("div",{className:"relative w-full max-w-[1400px] h-full md:h-[80vh] px-4",children:"carousel"===v?(0,a.jsx)(r.P.div,{className:"relative w-full h-full",children:(0,a.jsx)("div",{className:"relative w-full h-full flex items-center justify-center",children:(0,a.jsxs)("div",{className:"relative w-[85%] h-[85%] flex items-center justify-center",children:[(0,a.jsx)("button",{className:"absolute left-0 top-0 w-1/3 h-full z-20 bg-transparent focus:outline-none",onClick:()=>!u&&y("left"),disabled:u,"aria-label":"Imagem anterior"}),(0,a.jsx)("button",{className:"absolute right-0 top-0 w-1/3 h-full z-20 bg-transparent focus:outline-none",onClick:()=>!u&&y("right"),disabled:u,"aria-label":"Pr\xf3xima imagem"}),(0,a.jsx)(n.N,{mode:"sync",initial:!1,custom:d,children:E.map(e=>(0,a.jsxs)(r.P.div,{className:"absolute inset-0 flex items-center justify-center pointer-events-none",custom:d,initial:"enter",animate:e.position,exit:"exit",variants:M,transition:{duration:.5},children:["center"===e.position&&(0,a.jsx)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:(0,a.jsx)("div",{className:"relative w-[50%] sm:w-[40%] md:w-[35%] aspect-square pointer-events-none",children:(0,a.jsx)(i.default,{src:e.image,alt:e.name,width:400,height:400,className:"object-contain w-full h-full",priority:!0,draggable:!1})})}),"center"!==e.position&&(0,a.jsx)(r.P.div,{className:"relative w-[30%] sm:w-[25%] md:w-[20%] aspect-square pointer-events-none",whileHover:{scale:1.05,opacity:.8,transition:{duration:.2}},children:(0,a.jsx)(i.default,{src:e.image,alt:e.name,width:400,height:400,className:"object-contain w-full h-full",priority:!0,draggable:!1})})]},e.id))}),(0,a.jsxs)(r.P.div,{className:"absolute bottom-[15%] left-1/2 transform -translate-x-1/2 flex items-center space-x-4 sm:space-x-6 md:space-x-8",animate:{opacity:1},exit:{opacity:0},children:[(0,a.jsx)(r.P.button,{className:"bg-white/20 backdrop-blur-md text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center focus:outline-none",onClick:()=>!u&&y("left"),disabled:u,whileHover:{scale:1.1,backgroundColor:"rgba(255, 255, 255, 0.3)"},whileTap:{scale:.9},children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),(0,a.jsx)(r.P.button,{className:"bg-white/20 backdrop-blur-md text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center focus:outline-none",onClick:()=>!u&&y("right"),disabled:u,whileHover:{scale:1.1,backgroundColor:"rgba(255, 255, 255, 0.3)"},whileTap:{scale:.9},children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]}),(0,a.jsx)(r.P.div,{className:"absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,a.jsx)(r.P.button,{className:"bg-white/20 backdrop-blur-md text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white/30 transition-colors focus:outline-none",whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{let e=N().find(e=>"center"===e.position);e&&(p(e),j("Breeze"),b("detail"))},children:"Descobre"})})]})})},"carousel"):(0,a.jsx)(r.P.div,{className:"relative w-full h-full",children:(0,a.jsxs)("div",{className:"relative w-[85%] h-[85%] mx-auto",children:[(0,a.jsxs)(r.P.div,{className:"absolute top-[15%] left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[(0,a.jsx)(r.P.button,{className:"bg-white/20 backdrop-blur-md text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center focus:outline-none mb-10 sm:mb-12 md:mb-14",onClick:()=>{p(null),b("carousel")},whileHover:{scale:1.1,backgroundColor:"rgba(255, 255, 255, 0.3)"},whileTap:{scale:.9},children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("h2",{className:"text-xl sm:text-2xl md:text-3xl text-white font-iqos text-center mb-6",children:w?w.baseModel.replace("-"," "):""}),(0,a.jsxs)("div",{className:"mt-6 sm:mt-8 md:mt-10 flex justify-center items-start gap-6 sm:gap-8 md:gap-10",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/IQOSILUMAi/Icons/FlexPuff.svg",alt:"Flex Puff",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Puff"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/IQOSILUMAi/Icons/FlexBattery.svg",alt:"Flex Battery",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Flex Battery"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/IQOSILUMAi/Icons/Modo Pausa.svg",alt:"Modo Pausa",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Modo Pausa"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)(i.default,{src:"/IQOSILUMAi/Icons/EcraTatil.svg",alt:"Ecr\xe3 T\xe1til",width:32,height:32,className:"w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 brightness-0 invert"}),(0,a.jsx)("span",{className:"mt-2 text-[10px] sm:text-xs md:text-sm text-white/80 font-iqos text-center",children:"Ecr\xe3 T\xe1til"})]})]})]})]}),(0,a.jsx)("div",{className:"absolute inset-0 flex flex-col items-center",children:w&&(0,a.jsxs)("div",{className:"relative w-full h-full flex flex-col items-center justify-end pb-[15%]",children:[(0,a.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"relative w-[45%] sm:w-[40%] md:w-[35%] aspect-square",children:(0,a.jsx)(i.default,{src:(e=g.toUpperCase(),"Terracotta"===g?e="TERRACOTA":"Violet"===g&&(e="-VIOLET"),"/IQOSILUMAi/IMG/".concat(w.baseModel,"/").concat(w.baseModel,"_").concat(e,".png")),alt:"".concat(w.name," ").concat(g),width:400,height:400,className:"object-contain w-full h-full",priority:!0,draggable:!1})}),(0,a.jsx)("div",{className:"relative w-full flex justify-center mt-8 sm:mt-10 md:mt-12",children:(0,a.jsx)("div",{className:"flex justify-center items-center gap-3 sm:gap-4 md:gap-5",children:c.map(e=>!e.availableFor||e.availableFor.includes((null==w?void 0:w.baseModel)||"")?(0,a.jsx)(r.P.button,{className:"w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full transition-all duration-200 focus:outline-none ".concat(g===e.variant?"ring-1 ring-white ring-offset-1 scale-110":"opacity-90 hover:opacity-100"),style:{backgroundColor:e.color},onClick:()=>I(e.variant),whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":"Selecionar cor ".concat(e.label)},e.variant):null)})})]})})]})},"detail")})})}):null}}},e=>{var t=t=>e(e.s=t);e.O(0,[931,441,684,358],()=>t(2442)),_N_E=e.O()}]);