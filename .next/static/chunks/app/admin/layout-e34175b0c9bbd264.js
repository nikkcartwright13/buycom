(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183,29],{6745:function(e,s,t){Promise.resolve().then(t.bind(t,2326))},2326:function(e,s,t){"use strict";t.r(s);var a=t(1844),l=t(8073),r=t(3299),c=t(1664),d=t.n(c),o=t(5784);let n=()=>{let{user:e}=(0,o.useContext)(l.Z),s=()=>{(0,r.signOut)()};return(0,a.jsx)("aside",{className:"md:w-1/3 lg:w-1/4 px-4",children:(0,a.jsxs)("ul",{className:"sidebar",children:[(null==e?void 0:e.role)==="admin"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("li",{children:[" ",(0,a.jsxs)(d(),{href:"/admin/products/new",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:["New Product ",(0,a.jsx)("span",{className:"text-red-500",children:"(Admin)"})]})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsxs)(d(),{href:"/admin/products",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:["All Products ",(0,a.jsx)("span",{className:"text-red-500",children:"(Admin)"})]})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsxs)(d(),{href:"/admin/orders",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:["All Orders ",(0,a.jsx)("span",{className:"text-red-500",children:"(Admin)"})]})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsxs)(d(),{href:"/admin/users",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:["All Users ",(0,a.jsx)("span",{className:"text-red-500",children:"(Admin)"})]})]}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(d(),{href:"/me",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:"Your Profile"})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(d(),{href:"/me/orders",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:"Orders"})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(d(),{href:"/me/update",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:"Update Profile"})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(d(),{href:"/me/update_password",className:"block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md",children:"Update Password"})]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{className:"block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer",onClick:s,children:"Logout"})]})]})})};s.default=n},8073:function(e,s,t){"use strict";t.d(s,{H:function(){return o}});var a=t(1844),l=t(8433),r=t(9332),c=t(5784);let d=(0,c.createContext)(),o=e=>{let{children:s}=e,[t,o]=(0,c.useState)(null),[n,i]=(0,c.useState)(null),[u,p]=(0,c.useState)(null),[v,h]=(0,c.useState)(!1),m=(0,r.useRouter)(),x=async e=>{let{name:s,email:t,password:a}=e;try{let{data:e}=await l.Z.post("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/auth/register"),{name:s,email:t,password:a});(null==e?void 0:e.user)&&m.push("/")}catch(e){var r,c;i(null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(c=r.data)||void 0===c?void 0:c.message)}},b=async()=>{try{p(!0);let{data:e}=await l.Z.get("/api/auth/session?update");(null==e?void 0:e.user)&&(o(e.user),m.replace("/me"))}catch(t){var e,s;i(null==t?void 0:null===(e=t.response)||void 0===e?void 0:null===(s=e.data)||void 0===s?void 0:s.message)}},y=async e=>{try{p(!0);let{data:s}=await l.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/auth/me/update"),e,{headers:{"Content-Type":"multipart/form-data"}});(null==s?void 0:s.user)&&(b(),p(!1))}catch(e){var s,t;p(!1),i(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.message)}},j=async e=>{let{currentPassword:s,newPassword:t}=e;try{let{data:e}=await l.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/auth/me/update_password"),{currentPassword:s,newPassword:t});(null==e?void 0:e.success)&&m.replace("/me")}catch(e){var a,r;console.log(e.response),i(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(r=a.data)||void 0===r?void 0:r.message)}},g=async(e,s)=>{try{let{data:t}=await l.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/admin/users/").concat(e),{userData:s});(null==t?void 0:t.success)&&(h(!0),m.replace("/admin/users/".concat(e)))}catch(e){var t,a;i(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message)}},k=async e=>{try{let{data:s}=await l.Z.delete("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/admin/users/").concat(e));(null==s?void 0:s.success)&&m.replace("/admin/users")}catch(e){var s,t;i(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.message)}},f=async e=>{try{let{data:s}=await l.Z.post("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/address"),e);s&&m.push("/me")}catch(e){var s,t;i(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.message)}},w=async(e,s)=>{try{let{data:t}=await l.Z.put("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/address/").concat(e),s);(null==t?void 0:t.address)&&(h(!0),m.replace("/address/".concat(e)))}catch(e){var t,a;i(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message)}},N=async e=>{try{let{data:s}=await l.Z.delete("".concat("https://npmbuycom-c8fjodpc4-nikkcartwrights-projects.vercel.app","/api/address/").concat(e));(null==s?void 0:s.success)&&m.push("/me")}catch(e){var s,t;i(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.message)}},Z=()=>{i(null)};return(0,a.jsx)(d.Provider,{value:{user:t,error:n,loading:u,updated:v,updateUser:g,deleteUser:k,setUpdated:h,setUser:o,registerUser:x,updateProfile:y,updatePassword:j,addNewAddress:f,updateAddress:w,deleteAddress:N,clearErrors:Z},children:s})};s.Z=d}},function(e){e.O(0,[996,664,299,17,744],function(){return e(e.s=6745)}),_N_E=e.O()}]);