import{t as a,v as c,x as t,y as n,B as r,_ as d,z as o,J as h}from"./BDObF_Oy.js";const m={class:"p-6"},u=["src"],_={class:"pt-6 text-center space-y-4"},x={class:"font-medium"},p={class:"text-cyan-900 text-xl"},f={class:"text-gray-500 font-light"},g={class:"text-lg font-medium"},w={__name:"ProfileInfo",props:["photo","title","subtitle","headline"],setup(e){return(l,s)=>(a(),c("figure",m,[t("img",{class:"w-32 h-32 rounded-full mx-auto",src:e.photo,alt:"profile picture",width:"400",height:"400"},null,8,u),t("figure",_,[t("figcaption",x,[t("div",p,n(e.title),1),t("div",f,n(e.subtitle),1)]),t("blockquote",null,[t("p",g,n(e.headline),1)])])]))}},k={class:"pt-6 text-center space-y-4"},b=["href"],v={class:"mr-3 h-6 w-6"},y={__name:"ButtonAction",props:["link","icon","text"],setup(e){return(l,s)=>(a(),c("div",k,[t("a",{href:e.link,target:"_blank",class:"flex rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"},[t("p",v,n(e.icon),1),r(" "+n(e.text)+" ",1),s[0]||(s[0]=t("div",{class:"ml-auto mt-0.5 pl-4"},[t("svg",{class:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})])],-1))],8,b)]))}},B={},$={class:"max-w-xs mx-auto"};function j(e,l){const s=w,i=y;return a(),c(h,null,[o(s,{photo:"https://placehold.co/400x400",title:"Jaison Prop",subtitle:"@jaisonschmidt",headline:"Professor & Front-end Dev"}),t("main",$,[o(i,{link:"https://wa.me/+5554999776648",icon:"💬",text:"Whatsapp"}),o(i,{link:"https://www.linkedin.com/in/jaison-schmidt-19b80725/",icon:"💼",text:"Linkedin"}),o(i,{link:"https://github.com/jaisonschmidt",icon:"🛠",text:"Github"}),o(i,{link:"https://www.instagram.com/jaisonschmidt/",icon:"👨🏽‍💻",text:"Instagram"})])],64)}const I=d(B,[["render",j]]);export{I as default};
