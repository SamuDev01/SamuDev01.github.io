'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b557acc2fac715de8d64feeef31c33bf",
"index.html": "ec522b5b7b0a75ecaba38cb25609b9c9",
"/": "ec522b5b7b0a75ecaba38cb25609b9c9",
"firebase-messaging-sw.js": "e820510c671ae0f6a91291d2067623a2",
"main.dart.js": "f7ef405b8317ea77becde17d070adf8b",
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
"assets/AssetManifest.json": "f5729618c0f9b81039a176fcf20f0baf",
"assets/NOTICES": "4ef426a9a2aa0602b474838c681f82b2",
"assets/FontManifest.json": "c0232c981691309906dafb878d68db9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
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
"assets/shaders/ink_sparkle.frag": "ac504c5722e6d44862f91bb8e0a30493",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/physiotherapy.png": "06637bddb67205a998bf078a4a27c92d",
"assets/assets/images/e_board.png": "02c3acc2049ea92b33642de4828aaa68",
"assets/assets/images/d_plus.png": "30e9945df0535c8ec4b75686dce094c9",
"assets/assets/images/v_plus_pininfarina.png": "da716c8764ae67c239593908ac5c3e82",
"assets/assets/images/gym_1.png": "0606e42a5dadd7d212b06fb6b71d84b4",
"assets/assets/images/reformer.png": "2f093f0bb17eeffef54bd3e9130b823a",
"assets/assets/images/webinar.png": "541f2e6a0d74e7ebbb186905a6d924ea",
"assets/assets/images/d_evo.png": "05d58068000704d40a2185af9bab58e7",
"assets/assets/images/d_sport.png": "6decda43bda24df88d8659a5978bf935",
"assets/assets/images/image_sdk.PNG": "52f77893001dc8dee21cde2a56b8bb39",
"assets/assets/images/video.png": "f6d9fb38f2e7fd742268fcd897ac7a35",
"assets/assets/images/comingsoon.png": "33abe82a6bde08647729f9d4b282b4dd",
"assets/assets/images/d_full.png": "5704faf36beec4c9ce77f20e4a668169",
"assets/assets/images/image_tennis.PNG": "ec6e4a7362ea6cfb26462c3ed7168519",
"assets/assets/images/image-3.png": "e5c719f1f3ddce44ceaa20a40bcded02",
"assets/assets/images/image_scii.PNG": "7ae3897a1510f824ab11ce666c8943c3",
"assets/assets/images/image_football.PNG": "3f2f6f3c83a9e24a748b8d3334c5593a",
"assets/assets/images/catalogue.png": "e04fe8871834c9f12b90e3b3ef83da8e",
"assets/assets/images/comingsoon%2520copia.png": "33abe82a6bde08647729f9d4b282b4dd",
"assets/assets/images/image-5.png": "de97782ae615f3ba36914646cc08f18d",
"assets/assets/images/v_sport.png": "e5de769230bac348103443e7b65c3e3a",
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
