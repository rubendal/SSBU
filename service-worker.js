"use strict";var precacheConfig=[["/ssbu/index.html","1fb09b5022b916b006883dc31dce2686"],["/ssbu/static/css/main.da0bb638.css","e2727b7c7f38bf8b875de2127096bc2a"],["/ssbu/static/js/main.dfe269b1.js","fc463461d06a7b402c2e9bad92bf1009"],["/ssbu/static/media/1.2.0 - 2.0.0.31c8f168.png","31c8f168c440ecde2d0d1b25447e1c37"],["/ssbu/static/media/2.0.0 - 3.0.0.72a15a13.png","72a15a13db7ab1d7bca12df77344093f"],["/ssbu/static/media/2.0.0.31c8f168.png","31c8f168c440ecde2d0d1b25447e1c37"],["/ssbu/static/media/3.0.0.72a15a13.png","72a15a13db7ab1d7bca12df77344093f"],["/ssbu/static/media/about.559fb025.png","559fb025efce2c5423d06890772271fc"],["/ssbu/static/media/bayonetta.5df34e09.png","5df34e096bff27839ce445e51cbd49de"],["/ssbu/static/media/bowser jr.487493a1.png","487493a17c78f8f4dc61edf97151334b"],["/ssbu/static/media/bowser jr.afeca535.png","afeca53581b2bafbbbb2caa31475221b"],["/ssbu/static/media/bowser.a53087ea.png","a53087eadd26e7ade6e5ba70a1602550"],["/ssbu/static/media/calculator.00eff6fc.png","00eff6fcc8dfc09c1590954c4872b0a8"],["/ssbu/static/media/captain falcon.e88356b7.png","e88356b7db85eee258d627de6c974df1"],["/ssbu/static/media/characters.2cd74435.png","2cd74435e0a71cdd882ced0c072186fe"],["/ssbu/static/media/charizard.581df369.png","581df3697e2c0ac266a220b178733566"],["/ssbu/static/media/charizard.ad6a3f3c.png","ad6a3f3cddf66be471b562d74e6e1e08"],["/ssbu/static/media/chrom.c9823715.png","c9823715b074ce82379c0da7dbfa9264"],["/ssbu/static/media/cloud.67c3912b.png","67c3912b5a677c51766fdbdd556b8b5b"],["/ssbu/static/media/corrin.c921f9d9.png","c921f9d9cbde8650f030670e5e7dbd17"],["/ssbu/static/media/daisy.04b6aac3.png","04b6aac36aa8c3408cc465e2acd6a1e7"],["/ssbu/static/media/daisy.04c2b6c5.png","04c2b6c50fe7b0045c98a1331b3faffa"],["/ssbu/static/media/dark pit.49941bee.png","49941bee0c0ee07acfbc594215819fa5"],["/ssbu/static/media/dark pit.84fb5904.png","84fb5904391a7f62555e9d8b13f1cd7b"],["/ssbu/static/media/dark samus.17b9bb92.png","17b9bb927b515124ac85e12e81ed5ee5"],["/ssbu/static/media/darkpit-wait2.a4db31b9.gif","a4db31b9aff0f52a78effbfd226df754"],["/ssbu/static/media/diddy kong.3bfd7b90.png","3bfd7b909cac543d337760581fe28ed6"],["/ssbu/static/media/diddy kong.dd86d64f.png","dd86d64f97011b8db0e73f1b9a612318"],["/ssbu/static/media/diffs.c2a6f04b.png","c2a6f04bf2a94e5833a7f6726182806d"],["/ssbu/static/media/donkey kong.752ef469.png","752ef46958ad289af771f2a120a1aedc"],["/ssbu/static/media/dr mario.9dde49dc.png","9dde49dc83028b5e725fa7a7e4a99edb"],["/ssbu/static/media/dr mario.b78f0177.png","b78f0177a597d3a6a84e8022f3a1938c"],["/ssbu/static/media/duck hunt.20e61e81.png","20e61e817129e9d12dbd99d1377c2f67"],["/ssbu/static/media/duck hunt.bdfca7f1.png","bdfca7f1eff68bc5c5332336340afa7d"],["/ssbu/static/media/error.0116dae6.png","0116dae6b180957d7f0b1addd8c06a94"],["/ssbu/static/media/falco.602a5128.png","602a51286e2ab8fa13803c96ab6d39a3"],["/ssbu/static/media/falco.7757215a.png","7757215a95fd4b8e1c5db5d7083bdc96"],["/ssbu/static/media/fighter_params.4ab23555.png","4ab2355522d93331b79e03acb024c855"],["/ssbu/static/media/fox.4f9bc8aa.png","4f9bc8aabfdb062b22bcc959bbb7c90c"],["/ssbu/static/media/fox.650277b0.png","650277b0fa4e802e9474df9e24dacb48"],["/ssbu/static/media/ganondorf.e6285ad5.png","e6285ad5734f5aab6e247d646203d0bc"],["/ssbu/static/media/glossary.c3dea242.png","c3dea2423d81042b5bceba08554125ce"],["/ssbu/static/media/greninja.770f8fca.png","770f8fcac41ebf4adb7205a44ec52f43"],["/ssbu/static/media/greninja.b901ffb4.png","b901ffb49e4213763ff762ad5cb8014a"],["/ssbu/static/media/ice climbers (nana).9e37276f.png","9e37276fc08fdb37ac9441b8c936fd02"],["/ssbu/static/media/ice climbers.9e37276f.png","9e37276fc08fdb37ac9441b8c936fd02"],["/ssbu/static/media/ike.c6d1ac54.png","c6d1ac544ff53a80cdac496fc4fc5b15"],["/ssbu/static/media/incineroar.03d6ab0d.png","03d6ab0d9d20b544cbfbd0c6e556353d"],["/ssbu/static/media/inkling.6a7d3841.png","6a7d3841a18fa1820d097d5bbe2027f3"],["/ssbu/static/media/inkling.a608294e.png","a608294ec0c33707c634e0993f812fa5"],["/ssbu/static/media/isabelle.6f082e7f.png","6f082e7f1d8e06583cca78baed0ba944"],["/ssbu/static/media/isabelle.92b10ca9.png","92b10ca982cd8c0d7276da87c09f45a2"],["/ssbu/static/media/ivysaur.af69ca85.png","af69ca85e99d0da7e6dc4192d847ebc5"],["/ssbu/static/media/ivysaur.f4edf716.png","f4edf716fd4e57d76fcdedfee5fbf1cc"],["/ssbu/static/media/jigglypuff.af32cb51.png","af32cb518c0105b831d7746efff6c8a4"],["/ssbu/static/media/jigglypuff.cf8f7d8c.png","cf8f7d8c6554cafe6d108334a0ff4bf2"],["/ssbu/static/media/joker.604ccfb1.png","604ccfb14efadc9078a83f942234955e"],["/ssbu/static/media/joker.aad179fe.png","aad179fe601a12df2256796f3520909b"],["/ssbu/static/media/ken.ed67effd.png","ed67effde509033d030eb6856bc673b8"],["/ssbu/static/media/kh.2ebe25ad.png","2ebe25ad64a02f1140fbce01320514b8"],["/ssbu/static/media/king dedede.533bc346.png","533bc34680d84c7d2b0e213c1dabed94"],["/ssbu/static/media/king dedede.9ac0f5de.png","9ac0f5de4c549777e225c3c011645064"],["/ssbu/static/media/king k rool.553f2191.png","553f2191393a084437fe586d0441814c"],["/ssbu/static/media/kirby.004197cf.png","004197cff1a39c69081d76f9ad393bab"],["/ssbu/static/media/kirby.5501ce6c.png","5501ce6c92efd528c5db29f00f67aedf"],["/ssbu/static/media/limit.716141c3.png","716141c34d0c5b3f155fad6a60426624"],["/ssbu/static/media/link.517e8511.png","517e851113ebfac856d23f686413b7e2"],["/ssbu/static/media/little mac.33c69346.png","33c693465c5d39b63d35e8a88eaae1ae"],["/ssbu/static/media/little mac.371df197.png","371df197181da8b96d91dd334851433b"],["/ssbu/static/media/lucario.c4f350af.png","c4f350affbd6a94dd1a4bedc48538c90"],["/ssbu/static/media/lucario.c800ce41.png","c800ce4191d4f6aa76d79ad2e87d3ad3"],["/ssbu/static/media/lucas.19c2fb2d.png","19c2fb2d03098a2b26c9172ac74b1947"],["/ssbu/static/media/lucas.f4fda7bc.png","f4fda7bcee906bbeb3c5886f80b1069b"],["/ssbu/static/media/lucina.228e9a7b.png","228e9a7ba32386aff8e575283f83fd9a"],["/ssbu/static/media/lucina.9fa8451b.png","9fa8451bb3dc723fad0a8545ac34688e"],["/ssbu/static/media/luigi.1851f907.png","1851f9073b7a713e634b268831ad348d"],["/ssbu/static/media/luigi.9cccc449.png","9cccc449f3cd23bde532e8d2c798c181"],["/ssbu/static/media/m-icon.b73c5002.png","b73c50024cfb63d1c69b22cc75472963"],["/ssbu/static/media/mario.2fc148a5.png","2fc148a5484c109caa9beedae7e34ee5"],["/ssbu/static/media/mario.6bc49213.png","6bc492130f6672f78119a2b0657595e3"],["/ssbu/static/media/marth.1ea59951.png","1ea59951c3e3a41f5eb9a268e7f50db2"],["/ssbu/static/media/mega man.13439a0b.png","13439a0bbebba31201c4bf4c0c8962da"],["/ssbu/static/media/mega man.8ce035a9.png","8ce035a97e65d588d959f53dfb257fdd"],["/ssbu/static/media/meta knight.14c097f4.png","14c097f456e5126b8db0e804c44c418f"],["/ssbu/static/media/mewtwo.195c1a1b.png","195c1a1b4b6d65d5834baa18322489d0"],["/ssbu/static/media/mewtwo.638012c1.png","638012c11d4905a846a0253cb27b13c6"],["/ssbu/static/media/mii brawler.aaca1e62.png","aaca1e621aaad829382eeb79fed5ec2f"],["/ssbu/static/media/mii brawler.d466040b.png","d466040bfe5c88a4b52fc84af47b7a90"],["/ssbu/static/media/mii gunner.7638484a.png","7638484aff7d6e355f4d33bd46faf11a"],["/ssbu/static/media/mii gunner.aaca1e62.png","aaca1e621aaad829382eeb79fed5ec2f"],["/ssbu/static/media/mii swordfighter.aaca1e62.png","aaca1e621aaad829382eeb79fed5ec2f"],["/ssbu/static/media/mii swordfighter.ff6f9803.png","ff6f9803e556890d7b50353325aba8f8"],["/ssbu/static/media/miis.aaca1e62.png","aaca1e621aaad829382eeb79fed5ec2f"],["/ssbu/static/media/move_viewer.e9f9f899.png","e9f9f899564c3906892a983b2d4951de"],["/ssbu/static/media/mr game watch.49c88229.png","49c88229e301d0c320fa966a7c7c3dbe"],["/ssbu/static/media/mr game watch.7d7b8e54.png","7d7b8e544d6a646679c7f063988f14e0"],["/ssbu/static/media/ness.0cb23af9.png","0cb23af93c46567b33df12cca7919ac4"],["/ssbu/static/media/ness.84a06c8e.png","84a06c8e207e47aed14195c488f86c6f"],["/ssbu/static/media/olimar.640d0da5.png","640d0da50aaabde3b596cabe4f567dcf"],["/ssbu/static/media/olimar.8ab0f0ac.png","8ab0f0ac271b0be604e89edc1e4c3945"],["/ssbu/static/media/pac-man.49c6a2ac.png","49c6a2ac81605d0ddb2b408fbcd2c437"],["/ssbu/static/media/pac-man.c7023c26.png","c7023c26071e3bcd5e5ac90381483180"],["/ssbu/static/media/palutena.1f908894.png","1f908894069abac360392b51e2c78e2e"],["/ssbu/static/media/palutena.a5ed7c9f.png","a5ed7c9f83b4445873817dddd3afec8e"],["/ssbu/static/media/params.fa42c49a.png","fa42c49a50e61f9588ce9ae715f7b998"],["/ssbu/static/media/patches.0dfffefa.png","0dfffefa29ab92e33fb4508aa622a676"],["/ssbu/static/media/peach.6cd2378b.png","6cd2378bad5be99ed6cbac9f18743f94"],["/ssbu/static/media/peach.f9da0e77.png","f9da0e777e965386ba49fe57ea635361"],["/ssbu/static/media/pichu.65198d34.png","65198d34cb16e69065ea29174c0fe67a"],["/ssbu/static/media/pichu.67cc02b6.png","67cc02b6253eaf637ac9a94fc6ad495d"],["/ssbu/static/media/pikachu.25a342a6.png","25a342a6a3af780eb21d4b2689c4c43b"],["/ssbu/static/media/pikachu.85dba710.png","85dba7103210c0c1fe3417b00d79e064"],["/ssbu/static/media/piranha plant.9c39b5c7.png","9c39b5c7bcf072dbd4f0fa1912a3336d"],["/ssbu/static/media/pit.2a89426f.png","2a89426ffaf29bf16316571f5ee83eb0"],["/ssbu/static/media/pit.79072663.png","79072663c1fa370b84561fafa375da20"],["/ssbu/static/media/pokemon trainer.0a51dd35.png","0a51dd35adfc3f6fad309e4501dfa101"],["/ssbu/static/media/pokemon trainer.cbc345a2.png","cbc345a287621d4ae3c0a9819124acdc"],["/ssbu/static/media/resources.5afcfa39.png","5afcfa39bd2571f3335fd431b58d0b45"],["/ssbu/static/media/richter.5fffdd8b.png","5fffdd8b9e59a936b43848ed6a7409a8"],["/ssbu/static/media/ridley.861b48d9.png","861b48d960e2cb138ca935207ad85858"],["/ssbu/static/media/rob.744fb7f2.png","744fb7f272eaca06bb5088bc7e03e830"],["/ssbu/static/media/rob.ba77a18e.png","ba77a18e8a550f9148893bb7fa4681b9"],["/ssbu/static/media/robin.71645d7e.png","71645d7e071a541e116c445a050c8afc"],["/ssbu/static/media/rosalina luma.2a8db742.png","2a8db742b32a5183faf0f987e2208e94"],["/ssbu/static/media/rosalina luma.a1ae6d9f.png","a1ae6d9f28e05b36a8493c80567328e9"],["/ssbu/static/media/roy.4f277f00.png","4f277f008aa0acae5ee1987525930e20"],["/ssbu/static/media/ryu.0bbd1869.png","0bbd186960f72612a6af88e60a969e1a"],["/ssbu/static/media/samus.e9d22256.png","e9d2225646b6db4cdc40580dffa5436e"],["/ssbu/static/media/scriptsearch.7ba97ac1.png","7ba97ac1756aeb29b9df9e448415d22a"],["/ssbu/static/media/sheik.7a983d98.png","7a983d988f28610763dd9f032ecb0429"],["/ssbu/static/media/shulk.14a311e4.png","14a311e4aa6bc3bf369a184934fdcf77"],["/ssbu/static/media/simon.70e9dc7e.png","70e9dc7e91f4078ee0e51bd0b67ef928"],["/ssbu/static/media/snake.48c57f2c.png","48c57f2cdf989c24e451b652746c397c"],["/ssbu/static/media/sonic.13247c91.png","13247c915dcf9914a9e13bed002000e2"],["/ssbu/static/media/sonic.92f905fe.png","92f905fe30cd8cbb546abfbb02ee1e13"],["/ssbu/static/media/squirtle.d2fadf1c.png","d2fadf1c788ae1edab689ddf30c5b834"],["/ssbu/static/media/stages.b15d83f1.png","b15d83f1df2443d02a2f2ae2da7092ea"],["/ssbu/static/media/toon link.09749631.png","097496313a20da14b82c250195383dcf"],["/ssbu/static/media/toon link.725d29ea.png","725d29eac8dc7436bc317bd440d00055"],["/ssbu/static/media/villager.a53c5abb.png","a53c5abbc08e0c8f44a1a81a6de209be"],["/ssbu/static/media/villager.c61a5dda.png","c61a5dda57e8099c1241eecbb0e9089e"],["/ssbu/static/media/wario.3615a1cc.png","3615a1cc580c2443c82ca664e6095f46"],["/ssbu/static/media/wario.cc388870.png","cc3888708500c462ae7f37c88abad272"],["/ssbu/static/media/wii fit trainer.cc06564a.png","cc06564a3ba0e133bc6228140d09e1a5"],["/ssbu/static/media/wolf.2174062b.png","2174062b6b2e16c14c94cef701b6ce2b"],["/ssbu/static/media/wolf.e0cf8b56.png","e0cf8b563935206a2edc7fe9205294a3"],["/ssbu/static/media/yoshi.8ee4650f.png","8ee4650fe0681603007d596dbba96199"],["/ssbu/static/media/yoshi.f0dddd25.png","f0dddd2555ea8960af8008455e72fc33"],["/ssbu/static/media/young link.6fb3b1fa.png","6fb3b1fadaa52c985bee9819ba0ef9af"],["/ssbu/static/media/young link.e04fd2ce.png","e04fd2ceb22040990f7164e1bf6bb237"],["/ssbu/static/media/zelda.994c25e6.png","994c25e6891808cd8b7b005bd037fe6f"],["/ssbu/static/media/zero suit samus.80a97367.png","80a97367ff603074864e4cf3b78a029f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,c,s){var d=new URL(a);return s&&d.pathname.match(s)||(d.search+=(d.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,c){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return c.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],s=new URL(e,self.location),d=createCacheKey(s,hashParamName,c,/\.\w{8}\./);return[s.toString(),d]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!c.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return s.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var c=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!c.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,s),a=urlsToCacheKeys.has(c));var d="/ssbu/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(d,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});