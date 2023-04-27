'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b557acc2fac715de8d64feeef31c33bf",
"index.html": "e9a6cca36f9ba69a285176df412de54b",
"/": "e9a6cca36f9ba69a285176df412de54b",
"main.dart.js": "d86dc528619e4b55b2ab117b0eaa0478",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/favicon/favicon-16x16.png": "cbb65d0168434c0017ad353004710fad",
"icons/favicon/favicon.ico": "55a0da09e481754b7f66283c18d14388",
"icons/favicon/apple-icon.png": "55fd6e219ab80ee83a0374dc3227cf94",
"icons/favicon/apple-icon-144x144.png": "570c9b7e1ff07bba017959cff285b8e4",
"icons/favicon/android-icon-192x192.png": "c3cbe9fe2e83c9dd5b4c3d4b8ee60efd",
"icons/favicon/apple-icon-precomposed.png": "55fd6e219ab80ee83a0374dc3227cf94",
"icons/favicon/apple-icon-114x114.png": "df4dba1436234ca13d127e543d8050a2",
"icons/favicon/ms-icon-310x310.png": "e2579cf0dea8b944e822df486e744189",
"icons/favicon/ms-icon-144x144.png": "570c9b7e1ff07bba017959cff285b8e4",
"icons/favicon/apple-icon-57x57.png": "ee0c6d3932bea7e65620171d2c94b97b",
"icons/favicon/apple-icon-152x152.png": "bc3185a46269468fb7852fa9f2c9b6d4",
"icons/favicon/ms-icon-150x150.png": "bde759e6a191a849125395597010eafc",
"icons/favicon/android-icon-72x72.png": "e0c16d1374a0765a6a244c7707657273",
"icons/favicon/android-icon-96x96.png": "a9a5a5405b7bea342eb3caf9fed2a81c",
"icons/favicon/android-icon-36x36.png": "d3ae6aa33a868c1dbada9c802c9fc957",
"icons/favicon/apple-icon-180x180.png": "ae50056172df29494b022b27fecf8c53",
"icons/favicon/favicon-96x96.png": "a9a5a5405b7bea342eb3caf9fed2a81c",
"icons/favicon/android-icon-48x48.png": "3352c1d3c710181f4f118158c8d6b8bc",
"icons/favicon/apple-icon-76x76.png": "96b92942654865c0b0f283b2b2095a59",
"icons/favicon/apple-icon-60x60.png": "57db8c891322f96b880505a3c0d1fa96",
"icons/favicon/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon/android-icon-144x144.png": "570c9b7e1ff07bba017959cff285b8e4",
"icons/favicon/apple-icon-72x72.png": "e0c16d1374a0765a6a244c7707657273",
"icons/favicon/apple-icon-120x120.png": "dbf64ec4d37e9478ea26f5efdbb2e531",
"icons/favicon/favicon-32x32.png": "02fd9ace269d382f996d5185f1395ac9",
"icons/favicon/ms-icon-70x70.png": "a94624448d72380a618e96963fa6193e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "de7a6353ec3170179406cfafb6c7cb50",
"assets/AssetManifest.json": "97aa447accab2889fc4e49ace79a4a32",
"assets/NOTICES": "89d46cc071310544d0e17a9b2ea80297",
"assets/FontManifest.json": "eebfed969469982d0a756367dc6b0844",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/flat_icons_flutter/lib/fonts/FlaticonArrows.ttf": "92dcd169306f1506375b54ed45f6c0e8",
"assets/packages/flat_icons_flutter/lib/fonts/Flaticon.ttf": "90bc8831ccc880209459e741dc3ad6e2",
"assets/packages/flat_icons_flutter/lib/fonts/FlaticonSocial.ttf": "bfd49182b9ca024d5a0348652126c9e5",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ac504c5722e6d44862f91bb8e0a30493",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/physiotherapy.png": "06637bddb67205a998bf078a4a27c92d",
"assets/assets/images/gym_1.png": "0606e42a5dadd7d212b06fb6b71d84b4",
"assets/assets/images/reformer.png": "2f093f0bb17eeffef54bd3e9130b823a",
"assets/assets/images/shop.png": "406ce940725197d66d3f6e4c3221fcf4",
"assets/assets/images/webinar.png": "541f2e6a0d74e7ebbb186905a6d924ea",
"assets/assets/images/rocket.png": "87074549e1f7167a70ba729ec318bcc8",
"assets/assets/images/image_sdk.PNG": "52f77893001dc8dee21cde2a56b8bb39",
"assets/assets/images/machines/vmini.png": "29e13350c47ddf1b35374b0fbd8c45db",
"assets/assets/images/machines/pl.png": "e7f3c30801c1a35dc99ef34c42cb8444",
"assets/assets/images/machines/d11p.png": "8eae6bf833f289a3d4f96d59c2806dca",
"assets/assets/images/machines/d11f.png": "76b1f8990525f6a081d719cdf024838f",
"assets/assets/images/machines/pm.png": "5a57ed1b802d1017b6e390589db13d60",
"assets/assets/images/machines/d11s.png": "f72c49793ccaba96779ff4890e88c337",
"assets/assets/images/machines/d11e.png": "0b8c9532f9f9d4537cf31a893a94e335",
"assets/assets/images/machines/v12p.png": "db12154d0698c52c8752ca35cdcc8bf4",
"assets/assets/images/machines/v12f.png": "36011e283b177463c02e4fabbfa51b7f",
"assets/assets/images/machines/v12s.png": "e0bfd262df3ef3fb9573df9cbcfa4b2b",
"assets/assets/images/video.png": "f6d9fb38f2e7fd742268fcd897ac7a35",
"assets/assets/images/comingsoon.png": "33abe82a6bde08647729f9d4b282b4dd",
"assets/assets/images/image_tennis.PNG": "ec6e4a7362ea6cfb26462c3ed7168519",
"assets/assets/images/image-3.png": "e5c719f1f3ddce44ceaa20a40bcded02",
"assets/assets/images/image_scii.PNG": "7ae3897a1510f824ab11ce666c8943c3",
"assets/assets/images/image_football.PNG": "3f2f6f3c83a9e24a748b8d3334c5593a",
"assets/assets/images/catalogue.png": "e04fe8871834c9f12b90e3b3ef83da8e",
"assets/assets/images/image-5.png": "de97782ae615f3ba36914646cc08f18d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
