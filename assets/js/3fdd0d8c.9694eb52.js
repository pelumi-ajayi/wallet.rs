(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3575],{6872:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(2122),a=t(9756),c=(t(7294),t(3905)),i=["components"],o={},s=void 0,l={unversionedId:"libraries/java/api/AccountSynchronizer",id:"libraries/java/api/AccountSynchronizer",isDocsHomePage:!1,title:"AccountSynchronizer",description:"Account sync helper.",source:"@site/docs/libraries/java/api/AccountSynchronizer.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/AccountSynchronizer",permalink:"/docs/libraries/java/api/AccountSynchronizer",editUrl:"https://github.com/iotaledger/wallet.rs/tree/dev/documentation/docs/libraries/java/api/AccountSynchronizer.mdx",version:"current",frontMatter:{}},u=[{value:"gapLimit(limit): AccountSynchronizer",id:"gaplimitlimit-accountsynchronizer",children:[]},{value:"skipPersistence(): AccountSynchronizer",id:"skippersistence-accountsynchronizer",children:[]},{value:"skipChangeAddresses(): AccountSynchronizer",id:"skipchangeaddresses-accountsynchronizer",children:[]},{value:"addressIndex(address_index): AccountSynchronizer",id:"addressindexaddress_index-accountsynchronizer",children:[]},{value:"execute(): SyncedAccount",id:"execute-syncedaccount",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Account sync helper."),(0,c.kt)("h3",{id:"gaplimitlimit-accountsynchronizer"},"gapLimit(limit): ",(0,c.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,c.kt)("p",null,"Number of address indexes that are generated."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"limit"),(0,c.kt)("td",{parentName:"tr",align:null},"long"),(0,c.kt)("td",{parentName:"tr",align:null},"The maximum gap we cross without finding an address with balance")))),(0,c.kt)("h3",{id:"skippersistence-accountsynchronizer"},"skipPersistence(): ",(0,c.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,c.kt)("p",null,"Skip saving new messages and addresses on the account object.\nThe found data is returned on the ",(0,c.kt)("inlineCode",{parentName:"p"},"execute")," call but won't be persisted on the database."),(0,c.kt)("h3",{id:"skipchangeaddresses-accountsynchronizer"},"skipChangeAddresses(): ",(0,c.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,c.kt)("p",null,"Skip syncing existing change addresses."),(0,c.kt)("h3",{id:"addressindexaddress_index-accountsynchronizer"},"addressIndex(address_index): ",(0,c.kt)("a",{parentName:"h3",href:"#accountsynchronizer"},"AccountSynchronizer")),(0,c.kt)("p",null,"Initial address index to start syncing."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"address_index"),(0,c.kt)("td",{parentName:"tr",align:null},"long"),(0,c.kt)("td",{parentName:"tr",align:null},"The starting index")))),(0,c.kt)("h3",{id:"execute-syncedaccount"},"execute(): ",(0,c.kt)("a",{parentName:"h3",href:"#syncedaccount"},"SyncedAccount")),(0,c.kt)("p",null,"Syncs account with the tangle.\nThe account syncing process ensures that the latest metadata (balance, transactions)\nassociated with an account is fetched from the tangle and is stored locally."))}p.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||c;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);