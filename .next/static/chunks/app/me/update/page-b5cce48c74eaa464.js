(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795],{1047:function(e,t,n){Promise.resolve().then(n.bind(n,6461))},6461:function(e,t,n){"use strict";n.r(t);var a=n(1844),o=n(8073),s=n(5784),r=n(2920);let i=()=>{let{user:e,error:t,loading:n,updateProfile:i,clearErrors:l}=(0,s.useContext)(o.Z),[c,u]=(0,s.useState)(""),[d,p]=(0,s.useState)(""),[m,f]=(0,s.useState)(""),[v,h]=(0,s.useState)("/images/default.png");(0,s.useEffect)(()=>{e&&(u(e.name),p(e.email)),t&&(r.Am.error(t),l())},[t,e]);let g=e=>{e.preventDefault();let t=new FormData;t.set("name",c),t.set("email",d),t.set("image",m),i(t)},y=e=>{let t=new FileReader;t.onload=()=>{2===t.readyState&&h(t.result)},f(e.target.files[0]),t.readAsDataURL(e.target.files[0])};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{maxWidth:"480px"},className:"mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white",children:(0,a.jsxs)("form",{onSubmit:g,children:[(0,a.jsx)("h2",{className:"mb-5 text-2xl font-semibold",children:"Update Profile"}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block mb-1",children:" Full Name "}),(0,a.jsx)("input",{className:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type your name",required:!0,value:c,onChange:e=>u(e.target.value)})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block mb-1",children:" Email "}),(0,a.jsx)("input",{className:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type your email",required:!0,value:d,onChange:e=>p(e.target.value)})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{className:"block mb-1",children:" Avatar "}),(0,a.jsxs)("div",{className:"mb-4 flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4",children:(0,a.jsx)("img",{className:"w-14 h-14 rounded-full",src:v})}),(0,a.jsx)("div",{className:"md:w-2/3 lg:w-80",children:(0,a.jsx)("input",{className:"form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-6",type:"file",id:"formFile",onChange:y})})]})]}),(0,a.jsx)("button",{type:"submit",className:"my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700",disabled:!!n,children:n?"Updating...":"Update"})]})})})};t.default=i},8073:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var a=n(1844),o=n(8433),s=n(9332),r=n(5784);let i=(0,r.createContext)(),l=e=>{let{children:t}=e,[n,l]=(0,r.useState)(null),[c,u]=(0,r.useState)(null),[d,p]=(0,r.useState)(null),[m,f]=(0,r.useState)(!1),v=(0,s.useRouter)(),h=async e=>{let{name:t,email:n,password:a}=e;try{let{data:e}=await o.Z.post("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/auth/register"),{name:t,email:n,password:a});(null==e?void 0:e.user)&&v.push("/")}catch(e){var s,r;u(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(r=s.data)||void 0===r?void 0:r.message)}},g=async()=>{try{p(!0);let{data:e}=await o.Z.get("/api/auth/session?update");(null==e?void 0:e.user)&&(l(e.user),v.replace("/me"))}catch(n){var e,t;u(null==n?void 0:null===(e=n.response)||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.message)}},y=async e=>{try{p(!0);let{data:t}=await o.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/auth/me/update"),e,{headers:{"Content-Type":"multipart/form-data"}});(null==t?void 0:t.user)&&(g(),p(!1))}catch(e){var t,n;p(!1),u(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)}},b=async e=>{let{currentPassword:t,newPassword:n}=e;try{let{data:e}=await o.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/auth/me/update_password"),{currentPassword:t,newPassword:n});(null==e?void 0:e.success)&&v.replace("/me")}catch(e){var a,s;console.log(e.response),u(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(s=a.data)||void 0===s?void 0:s.message)}},E=async(e,t)=>{try{let{data:n}=await o.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/admin/users/").concat(e),{userData:t});(null==n?void 0:n.success)&&(f(!0),v.replace("/admin/users/".concat(e)))}catch(e){var n,a;u(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.message)}},T=async e=>{try{let{data:t}=await o.Z.delete("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/admin/users/").concat(e));(null==t?void 0:t.success)&&v.replace("/admin/users")}catch(e){var t,n;u(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)}},x=async e=>{try{let{data:t}=await o.Z.post("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/address"),e);t&&v.push("/me")}catch(e){var t,n;u(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)}},C=async(e,t)=>{try{let{data:n}=await o.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/address/").concat(e),t);(null==n?void 0:n.address)&&(f(!0),v.replace("/address/".concat(e)))}catch(e){var n,a;u(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.message)}},w=async e=>{try{let{data:t}=await o.Z.delete("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/address/").concat(e));(null==t?void 0:t.success)&&v.push("/me")}catch(e){var t,n;u(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)}},_=()=>{u(null)};return(0,a.jsx)(i.Provider,{value:{user:n,error:c,loading:d,updated:m,updateUser:E,deleteUser:T,setUpdated:f,setUser:l,registerUser:h,updateProfile:y,updatePassword:b,addNewAddress:x,updateAddress:C,deleteAddress:w,clearErrors:_},children:t})};t.Z=i},2920:function(e,t,n){"use strict";n.d(t,{Ix:function(){return x},Am:function(){return O}});var a=n(5784),o=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,a,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(a=e(t[n]))&&(o&&(o+=" "),o+=a);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(a&&(a+=" "),a+=t);return a};let s=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,a.isValidElement)(e)||r(e)||i(e)||s(e);function u(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p}=e,m=o?`${t}--${l}`:t,f=o?`${n}--${l}`:n,v=(0,a.useRef)(0);return(0,a.useLayoutEffect)(()=>{let e=d.current,t=m.split(" "),n=a=>{a.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==a.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,a.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:a,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=a+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}(e,u,r):u()};p||(c?t():(v.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))},[p]),a.createElement(a.Fragment,null,i)}}function d(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}let p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},m=e=>{let{theme:t,type:n,...o}=e;return a.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},f={info:function(e){return a.createElement(m,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(m,{...e},a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(m,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(m,{...e},a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function g(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return a.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function y(e){let{delay:t,isRunning:n,closeToast:s,type:r="default",hide:l,className:c,style:u,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:v}=e,h=l||d&&0===p,g={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};d&&(g.transform=`scaleX(${p})`);let y=o("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":m}),b=i(c)?c({rtl:m,type:r,defaultClassName:y}):o(y,c);return a.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:b,style:g,[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&s()}})}let b=e=>{let{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:r}=function(e){let[t,n]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),r=(0,a.useRef)(null),l=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,a.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:p,onClick:m,closeOnClick:f}=e;function g(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",x),document.addEventListener("touchmove",T),document.addEventListener("touchend",x);let n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=v(t.nativeEvent),l.y=h(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(l.boundingRect){let{top:n,bottom:a,left:o,right:s}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=o&&l.x<=s&&l.y>=n&&l.y<=a?E():b()}}function b(){n(!0)}function E(){n(!1)}function T(n){let a=r.current;l.canDrag&&a&&(l.didMove=!0,t&&E(),l.x=v(n),l.y=h(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),a.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,a.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function x(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",x);let t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return s(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,a.useEffect)(()=>{c.current=e}),(0,a.useEffect)(()=>(r.current&&r.current.addEventListener("d",b,{once:!0}),i(e.onOpen)&&e.onOpen((0,a.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;i(e.onClose)&&e.onClose((0,a.isValidElement)(e.children)&&e.children.props)}),[]),(0,a.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",b),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);let C={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return u&&d&&(C.onMouseEnter=E,C.onMouseLeave=b),f&&(C.onClick=e=>{m&&m(e),l.canCloseOnClick&&p()}),{playToast:b,pauseToast:E,isRunning:t,preventExitTransition:o,toastRef:r,eventHandlers:C}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:p,hideProgressBar:m,closeToast:f,transition:b,position:E,className:T,style:x,bodyClassName:C,bodyStyle:w,progressClassName:_,progressStyle:N,updateId:I,role:k,progress:L,rtl:O,toastId:R,deleteToast:j,isIn:M,isLoading:P,iconOut:A,closeOnClick:D,theme:$}=e,S=o("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":D}),B=i(T)?T({rtl:O,position:E,type:p,defaultClassName:S}):o(S,T),z=!!L||!u,F={closeToast:f,type:p,theme:$},H=null;return!1===l||(H=i(l)?l(F):(0,a.isValidElement)(l)?(0,a.cloneElement)(l,F):g(F)),a.createElement(b,{isIn:M,done:j,position:E,preventExitTransition:n,nodeRef:s},a.createElement("div",{id:R,onClick:d,className:B,...r,style:x,ref:s},a.createElement("div",{...M&&{role:k},className:i(C)?C({type:p}):o("Toastify__toast-body",C),style:w},null!=A&&a.createElement("div",{className:o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},A),a.createElement("div",null,c)),H,a.createElement(y,{...I&&!z?{key:`pb-${I}`}:{},rtl:O,theme:$,delay:u,isRunning:t,isIn:M,closeToast:f,hide:m,type:p,style:N,className:_,controlledProgress:z,progress:L||0})))},E=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},T=u(E("bounce",!0)),x=(u(E("slide",!0)),u(E("zoom")),u(E("flip")),(0,a.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:u,isToastActive:m}=function(e){let[,t]=(0,a.useReducer)(e=>e+1,0),[n,o]=(0,a.useState)([]),u=(0,a.useRef)(null),m=(0,a.useRef)(new Map).current,v=e=>-1!==n.indexOf(e),h=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:v,getToast:e=>m.get(e)}).current;function g(e){let{containerId:t}=e,{limit:n}=h.props;!n||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function y(e){o(t=>null==e?[]:t.filter(t=>t!==e))}function b(){let{toastContent:e,toastProps:t,staleId:n}=h.queue.shift();T(e,t,n)}function E(e,n){var o,v;let{delay:g,staleId:E,...x}=n;if(!c(e)||!u.current||h.props.enableMultiContainer&&x.containerId!==h.props.containerId||m.has(x.toastId)&&null==x.updateId)return;let{toastId:C,updateId:w,data:_}=x,{props:N}=h,I=()=>y(C),k=null==w;k&&h.count++;let L={...N,style:N.toastStyle,key:h.toastKey++,...x,toastId:C,updateId:w,data:_,closeToast:I,isIn:!1,className:l(x.className||N.toastClassName),bodyClassName:l(x.bodyClassName||N.bodyClassName),progressClassName:l(x.progressClassName||N.progressClassName),autoClose:!x.isLoading&&(o=x.autoClose,v=N.autoClose,!1===o||s(o)&&o>0?o:v),deleteToast(){let e=d(m.get(C),"removed");m.delete(C),p.emit(4,e);let n=h.queue.length;if(h.count=null==C?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),n>0){let e=null==C?h.props.limit:1;if(1===n||1===e)h.displayedToast++,b();else{let t=e>n?n:e;h.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};L.iconOut=function(e){let{theme:t,type:n,isLoading:o,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(i(l)?c=l(u):(0,a.isValidElement)(l)?c=(0,a.cloneElement)(l,u):r(l)||s(l)?c=l:o?c=f.spinner():n in f&&(c=f[n](u))),c}(L),i(x.onOpen)&&(L.onOpen=x.onOpen),i(x.onClose)&&(L.onClose=x.onClose),L.closeButton=N.closeButton,!1===x.closeButton||c(x.closeButton)?L.closeButton=x.closeButton:!0===x.closeButton&&(L.closeButton=!c(N.closeButton)||N.closeButton);let O=e;(0,a.isValidElement)(e)&&!r(e.type)?O=(0,a.cloneElement)(e,{closeToast:I,toastProps:L,data:_}):i(e)&&(O=e({closeToast:I,toastProps:L,data:_})),N.limit&&N.limit>0&&h.count>N.limit&&k?h.queue.push({toastContent:O,toastProps:L,staleId:E}):s(g)?setTimeout(()=>{T(O,L,E)},g):T(O,L,E)}function T(e,t,n){let{toastId:a}=t;n&&m.delete(n);let s={content:e,props:t};m.set(a,s),o(e=>[...e,a].filter(e=>e!==n)),p.emit(4,d(s,null==s.props.updateId?"added":"updated"))}return(0,a.useEffect)(()=>(h.containerId=e.containerId,p.cancelEmit(3).on(0,E).on(1,e=>u.current&&y(e)).on(5,g).emit(2,h),()=>{m.clear(),p.emit(3,h)}),[]),(0,a.useEffect)(()=>{h.props=e,h.isToastActive=v,h.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,a=Array.from(m.values());return e.newestOnTop&&a.reverse(),a.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:v}}(e),{className:v,style:h,rtl:g,containerId:y}=e;return(0,a.useEffect)(()=>{t&&(t.current=u.current)},[]),a.createElement("div",{ref:u,className:"Toastify",id:y},n((e,t)=>{let n=t.length?{...h}:{...h,pointerEvents:"none"};return a.createElement("div",{className:function(e){let t=o("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":g});return i(v)?v({position:e,rtl:g,defaultClassName:t}):o(t,l(v))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:o,props:s}=e;return a.createElement(b,{...s,isIn:m(s.toastId),style:{...s.style,"--nth":n+1,"--len":t.length},key:`toast-${s.key}`},o)}))}))}));x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:T,autoClose:5e3,closeButton:g,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let C,w=new Map,_=[],N=1;function I(e,t){return w.size>0?p.emit(0,e,t):_.push({content:e,options:t}),t.toastId}function k(e,t){return{...t,type:t&&t.type||e,toastId:t&&(r(t.toastId)||s(t.toastId))?t.toastId:""+N++}}function L(e){return(t,n)=>I(t,k(e,n))}function O(e,t){return I(e,k("default",t))}O.loading=(e,t)=>I(e,k("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),O.promise=function(e,t,n){let a,{pending:o,error:s,success:l}=t;o&&(a=r(o)?O.loading(o,n):O.loading(o.render,{...n,...o}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,t,o)=>{if(null==t)return void O.dismiss(a);let s={type:e,...c,...n,data:o},i=r(t)?{render:t}:t;return a?O.update(a,{...s,...i}):O(i.render,{...s,...i}),o},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",s,e)),d},O.success=L("success"),O.info=L("info"),O.error=L("error"),O.warning=L("warning"),O.warn=O.warning,O.dark=(e,t)=>I(e,k("default",{theme:"dark",...t})),O.dismiss=e=>{w.size>0?p.emit(1,e):_=_.filter(t=>null!=e&&t.options.toastId!==e)},O.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},O.isActive=e=>{let t=!1;return w.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},O.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,a=w.get(n||C);return a&&a.getToast(e)}(e,t);if(n){let{props:a,content:o}=n,s={...a,...t,toastId:t.toastId||e,updateId:""+N++};s.toastId!==e&&(s.staleId=e);let r=s.render||o;delete s.render,I(r,s)}},0)},O.done=e=>{O.update(e,{progress:1})},O.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),O.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},O.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,e=>{C=e.containerId||e,w.set(C,e),_.forEach(e=>{p.emit(0,e.content,e.options)}),_=[]}).on(3,e=>{w.delete(e.containerId||e),0===w.size&&p.off(0).off(1).off(5)})}},function(e){e.O(0,[996,17,744],function(){return e(e.s=1047)}),_N_E=e.O()}]);