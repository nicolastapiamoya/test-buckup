"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{7485:function(t,e,r){r.d(e,{iT:function(){return c}});var a=r(7437);r(2265);var i=r(9541);let s="#4fa94d",o={"aria-busy":!0,role:"progressbar"},n=(0,i.ZP).div`
  display: ${t=>t.$visible?"flex":"none"};
`,d=(0,i.F4)`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${242.776657104492}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${242.776657104492}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`;(0,i.ZP).path`
  stroke-dasharray: ${2.42776657104492}px, ${242.776657104492};
  stroke-dashoffset: 0;
  animation: ${d} ${1.6}s linear infinite;
`;let h=t=>["M"+t+" 0c0-9.94-8.06",t,t,t].join("-"),l=(t,e,r)=>{let a=Math.max(t,e),i=-r-a/2+1,s=2*r+a;return[i,i,s,s].join(" ")},c=({height:t=80,width:e=80,color:r=s,secondaryColor:i=s,ariaLabel:d="oval-loading",wrapperStyle:c,wrapperClass:p,visible:k=!0,strokeWidth:f=2,strokeWidthSecondary:y})=>(0,a.jsx)(n,{style:c,$visible:k,className:p,"data-testid":"oval-loading","aria-label":d,...o,children:(0,a.jsx)("svg",{width:e,height:t,viewBox:l(Number(f),Number(y||f),20),xmlns:"http://www.w3.org/2000/svg",stroke:r,"data-testid":"oval-svg",children:(0,a.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,a.jsxs)("g",{transform:"translate(1 1)",strokeWidth:Number(y||f),"data-testid":"oval-secondary-group",children:[(0,a.jsx)("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:i,strokeWidth:f}),(0,a.jsx)("path",{d:h(20),children:(0,a.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})}),p=(0,i.F4)`
to {
   transform: rotate(360deg);
 }
`;(0,i.ZP).svg`
  animation: ${p} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,(0,i.ZP).polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;let k=(0,i.F4)`
to {
   stroke-dashoffset: 136;
 }
`;(0,i.ZP).polygon`
  stroke-dasharray: 17;
  animation: ${k} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,(0,i.ZP).svg`
  transform-origin: 50% 65%;
`}}]);