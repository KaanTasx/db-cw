/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d5174c5d3716c4da409812ca8833986d"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.96c66562.css",
    "revision": "3087b192d2e73246e3535e172de81b7f"
  },
  {
    "url": "assets/img/get-all.c5724181.png",
    "revision": "c572418148c4ab9e674e5b5496a4c5b0"
  },
  {
    "url": "assets/img/log.28751883.png",
    "revision": "28751883b697db5a0246c7551712dc65"
  },
  {
    "url": "assets/img/reg-exist.cd0c37ed.png",
    "revision": "cd0c37ed57fb389684a498ebda714fb4"
  },
  {
    "url": "assets/img/reg.4e1d108e.png",
    "revision": "4e1d108e42ed0e63fce55db20aaf6489"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update.5e8b8eb4.png",
    "revision": "5e8b8eb4967592c79c96b9d3ef1ca52e"
  },
  {
    "url": "assets/js/10.c9c5cf8c.js",
    "revision": "ef5c4d740bd8c96bfaaf299de341ca14"
  },
  {
    "url": "assets/js/11.fceef510.js",
    "revision": "8cd8a59e2dd9b0458b315f77276924a5"
  },
  {
    "url": "assets/js/12.f9399a4e.js",
    "revision": "8043b32467415cd7fbd4b71cd56f9547"
  },
  {
    "url": "assets/js/13.ea3d1d23.js",
    "revision": "bb7de98639b8114b9223a52ebeee6883"
  },
  {
    "url": "assets/js/14.c2fc06b7.js",
    "revision": "ac6bed1e8f80accb870de4d6f12afe2f"
  },
  {
    "url": "assets/js/15.f45c10c8.js",
    "revision": "8b38d48f808fb133220dc3e6b3bc52ef"
  },
  {
    "url": "assets/js/16.1b55a862.js",
    "revision": "9bc303b996438d551fd68d02021079cd"
  },
  {
    "url": "assets/js/17.ba0a0425.js",
    "revision": "bdb926e421c141fdbdef330714a95625"
  },
  {
    "url": "assets/js/18.9a5d0c12.js",
    "revision": "d424e624d5069a2966d4bd9687900f8a"
  },
  {
    "url": "assets/js/19.e7c29f8c.js",
    "revision": "86c6718f8985340d1e8da14af102d50d"
  },
  {
    "url": "assets/js/2.a6a6c163.js",
    "revision": "28e3cfb3629960c57673d6cb79c6d804"
  },
  {
    "url": "assets/js/20.4b6c2972.js",
    "revision": "fd822aa17e518b7b8f778baa26122674"
  },
  {
    "url": "assets/js/21.8f0df66f.js",
    "revision": "67ed98c7ed8ab9760cb48dddf8d1c72f"
  },
  {
    "url": "assets/js/22.bf3eb279.js",
    "revision": "0f3b9b241d2ac998a7c886f6c13dab68"
  },
  {
    "url": "assets/js/23.0184d30b.js",
    "revision": "5a107860c1c631ce6bab7af66dc1fe31"
  },
  {
    "url": "assets/js/24.4c904853.js",
    "revision": "d151e55a5a479439c77a1fbd5090f6e0"
  },
  {
    "url": "assets/js/26.e8c39599.js",
    "revision": "9cacdd2e7a4bb72d080fa560f95409ff"
  },
  {
    "url": "assets/js/3.2124eb52.js",
    "revision": "310d0baae08a4b7a4e5ff2a358191964"
  },
  {
    "url": "assets/js/4.6f4418fd.js",
    "revision": "9ad93eb072f1c6f64c6c5c78d69309d0"
  },
  {
    "url": "assets/js/5.31506af8.js",
    "revision": "91cc15b1aea4dce9ca8d1ae07c19a632"
  },
  {
    "url": "assets/js/6.d795c82c.js",
    "revision": "f6d27c2552b31677ec4db3eccfba10c2"
  },
  {
    "url": "assets/js/7.54daaa9c.js",
    "revision": "6af93c07b5c847fc32f8365e38301cb1"
  },
  {
    "url": "assets/js/8.fcc7065c.js",
    "revision": "f41347123af530abe6b86ade20b6beb8"
  },
  {
    "url": "assets/js/9.ffbcebdc.js",
    "revision": "3fe3f0d72e976a159d924d27a0800ff3"
  },
  {
    "url": "assets/js/app.2825c156.js",
    "revision": "d24dea98e8d23cb3891b7b39565f6988"
  },
  {
    "url": "conclusion/index.html",
    "revision": "874f2a214ed3672083b5ec9b06b77ddd"
  },
  {
    "url": "design/index.html",
    "revision": "cd5cd2cfab79cb1600f750dee2110b28"
  },
  {
    "url": "index.html",
    "revision": "0146b8fdcf979bff38e0f5472549441e"
  },
  {
    "url": "intro/index.html",
    "revision": "0ec161dc4db784707aa3bfeed33cc81f"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "e15f82adc3dbaa723c74b027b0b25ba4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "93d87b546a908f682134a0669d82aa65"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9806d45fd38cca2fba3b55fffd36a41f"
  },
  {
    "url": "software/index.html",
    "revision": "b4625861cf614010b49c65f3ea440b9a"
  },
  {
    "url": "test/index.html",
    "revision": "6fa829784b6fb4a7df078fac1c6703c6"
  },
  {
    "url": "use cases/index.html",
    "revision": "8b0ad1f95bc59dfb9b0439581990fde1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
