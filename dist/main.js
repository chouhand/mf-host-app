(()=>{var e,r,t,o,n,a,i,s,f={},d={};function l(e){if(d[e])return d[e].exports;var r=d[e]={id:e,exports:{}};return f[e](r,r.exports,l),r.exports}l.m=f,l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce((r,t)=>(l.f[t](e,r),r),[])),l.u=e=>e+".js",l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},l.l=(r,t,o)=>{if(e[r])e[r].push(t);else{var n,a;if(void 0!==o)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var f=i[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==o){n=f;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,l.nc&&n.setAttribute("nonce",l.nc),n.setAttribute("data-webpack",o),n.src=r),e[r]=[t];var d=t=>{d=()=>{},n.onerror=n.onload=null,clearTimeout(u);var o=e[r];delete e[r],n.parentNode.removeChild(n),o&&o.forEach(e=>e(t))},u=setTimeout(()=>{d({type:"timeout",target:n})},12e4);n.onerror=n.onload=d,a&&document.head.appendChild(n)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="http://localhost:8080/",(()=>{l.S={};var e={};l.I=r=>{if(e[r])return e[r];e[r]=1,l.o(l.S,r)||(l.S[r]={});var t=l.S[r],o=e=>"undefined"!=typeof console&&console.warn&&console.warn(e),n=(e,r,n,a)=>{r=r||[],a=e;var i=()=>o("Version conflict for shared modules: "+e+" "+(v&&v.join("."))+" <=> "+(r&&r.join("."))),s=()=>{if(t[a]){for(var s=t[a].version||[],f=0;f<r.length&&f<s.length;f++)if(s[f]!=r[f]){if("string"==typeof s[f]||"string"==typeof r[f])return i();if(s[f]>r[f])return;if(s[f]<r[f]){f=-1;break}}if(f>=0&&r.length<=s.length)return;if(t[a].loaded)return o("Ignoring providing of already used shared module: "+e)}t[a]={get:n,version:r}};s(),r.forEach(e=>{a+="`"+e,s()})},a=[];switch(r){case"default":n("react-dom",[16,13,1],()=>Promise.all([l.e(935),l.e(104)]).then(()=>()=>l(935))),n("react",[16,13,1],()=>l.e(294).then(()=>()=>l(294)))}return a.length&&(e[r]=Promise.all(a).then(()=>e[r]=1))}})(),r=(e,r)=>{for(var t=0;t<r.length;t++){if(t===e.length)return 1;if(e[t]!=r[t]){if("string"==typeof e[t]||"string"==typeof r[t]||e[t]<r[t])return 1;if(e[t]>r[t])return}}},t=(e,t,o,n)=>{var a,i=t,s=(o=o||[]).map(e=>i+="`"+e);for(s.unshift(t);i=s.shift();)if(l.o(e,i)&&!r(a=e[i].version||[],o))return e[i];var f="Unsatisfied version of shared module "+t+"@"+(a&&a.join("."))+" (required "+t+"@"+o.join(".")+")";if(n)throw new Error(f);"undefined"!=typeof console&&console.warn&&console.warn(f)},o=e=>(e.loaded=1,e.get()),n=(e,r,n,a)=>{l.I(e);var i=l.S[e],s=i&&t(i,r,n);return s?o(s):a()},a={},i={871:()=>n("default","react-dom",["16",13,0],()=>l.e(935).then(()=>()=>l(935))),104:()=>n("default","react",["16",13,0],()=>l.e(294).then(()=>()=>l(294)))},s={104:[104],684:[871,104]},l.f.consumes=(e,r)=>{l.o(s,e)&&s[e].forEach(e=>{if(l.o(a,e))return r.push(a[e]);var t=r=>{a[e]=0,f[e]=t=>{delete d[e],t.exports=r()}},o=r=>{delete a[e],f[e]=t=>{throw delete d[e],r}};try{var n=i[e]();n.then?r.push(a[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}})},(()=>{var e={179:0};l.f.j=(r,t)=>{var o=l.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(104!=r){var n=new Promise((t,n)=>{o=e[r]=[t,n]});t.push(o[2]=n);var a=l.p+l.u(r),i=new Error;l.l(a,t=>{if(l.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}},"chunk-"+r)}else e[r]=0};var r=window.webpackJsonpmodule_federation=window.webpackJsonpmodule_federation||[],t=r.push.bind(r);r.push=function(r){for(var t,n,a=r[0],i=r[1],s=r[3],f=0,d=[];f<a.length;f++)n=a[f],l.o(e,n)&&e[n]&&d.push(e[n][0]),e[n]=0;for(t in i)l.o(i,t)&&(l.m[t]=i[t]);for(s&&s(l),o&&o(r);d.length;)d.shift()()};var o=t})(),l.e(684).then(l.bind(l,684))})();