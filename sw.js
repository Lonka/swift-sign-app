if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_-d78d067d.js",revision:null},{url:"assets/_name_-08578aaa.js",revision:null},{url:"assets/404-15503a48.js",revision:null},{url:"assets/about-c6ba5fe4.js",revision:null},{url:"assets/ar-0eb78e82.js",revision:null},{url:"assets/canvas-55fbc2d9.js",revision:null},{url:"assets/de-1d048ed8.js",revision:null},{url:"assets/drawBoard-95eda7ed.js",revision:null},{url:"assets/drawBoard-af4fdef1.css",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/es-695014b3.js",revision:null},{url:"assets/fr-dac7f002.js",revision:null},{url:"assets/home-af3d044d.js",revision:null},{url:"assets/id-96d44a7c.js",revision:null},{url:"assets/index-3d527204.css",revision:null},{url:"assets/index-4c2e3ce2.js",revision:null},{url:"assets/index-8dba5944.js",revision:null},{url:"assets/it-722f4f77.js",revision:null},{url:"assets/ja-357ab22b.js",revision:null},{url:"assets/ka-cc514cb9.js",revision:null},{url:"assets/ko-31fd6682.js",revision:null},{url:"assets/pl-b4d08f74.js",revision:null},{url:"assets/pt-BR-e5840fd8.js",revision:null},{url:"assets/README-50126f27.js",revision:null},{url:"assets/ru-1f9df64c.js",revision:null},{url:"assets/tr-c2f43110.js",revision:null},{url:"assets/uk-9a65a31a.js",revision:null},{url:"assets/vi-6fb840cb.js",revision:null},{url:"assets/virtual_pwa-register-671a4b25.js",revision:null},{url:"assets/vPerfectSignature-0d0f26de.js",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"index.html",revision:"67187d36f2b4392a5109bb61f61a03d3"},{url:"favicon.svg",revision:"50eaa5ff03f3d89bea3e4450aefa60af"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"d45423ff4e2ad7521e24a50fcc4c2bd0"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
