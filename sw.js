if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>n(e,r),f={module:{uri:r},exports:o,require:l};s[r]=Promise.all(i.map((e=>f[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-3b842460.css",revision:null},{url:"assets/index-4d24fcbf.js",revision:null},{url:"assets/vendor-f037f9a7.js",revision:null},{url:"index.html",revision:"fcc553463f590eb7e4792c663900627e"},{url:"manifest.webmanifest",revision:"ab41ef81195544e79e0f9218397fb2d9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));